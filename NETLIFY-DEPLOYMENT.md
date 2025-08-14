# Netlify Deployment Guide for Corinna AI (Chatvise)

## Prerequisites
- Netlify account
- GitHub repository connected to Netlify
- All required API keys and services set up

## Step 1: Environment Variables
Add these environment variables in Netlify Dashboard (Site Settings > Environment Variables):

```bash
# Database (Prisma Accelerate)
DATABASE_URL=your_prisma_accelerate_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up

# OpenAI
OPEN_AI_KEY=your_openai_api_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISH_KEY=your_stripe_publishable_key
STRIPE_SECRET=your_stripe_secret_key

# Pusher (Real-time)
NEXT_PUBLIC_PUSHER_APP_ID=your_pusher_app_id
NEXT_PUBLIC_PUSHER_APP_KEY=your_pusher_app_key
NEXT_PUBLIC_PUSHER_APP_SECRET=your_pusher_app_secret
NEXT_PUBLIC_PUSHER_APP_CLUSTOR=your_pusher_cluster

# Uploadcare
NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY=your_uploadcare_public_key
UPLOAD_CARE_SECRET_KEY=your_uploadcare_secret_key

# Email (Nodemailer)
NODE_MAILER_EMAIL=your_email@gmail.com
NODE_MAILER_GMAIL_APP_PASSWORD=your_gmail_app_password
```

## Step 2: Build Settings
Configure in Netlify Dashboard or netlify.toml:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Functions directory:** `netlify/functions` (auto-detected)
- **Node version:** 18.x or higher

## Step 3: Prisma Setup

### For Prisma Accelerate (Recommended)
1. Your DATABASE_URL should be the Prisma Accelerate connection string
2. No additional configuration needed - already optimized for serverless

### For Direct Database Connection
If using direct database connection instead of Prisma Accelerate:

1. Update `prisma.ts`:
```typescript
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

export const client = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client
```

2. Add postinstall script to package.json:
```json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
```

## Step 4: Function Timeout Considerations

### Default Timeouts
- Netlify Functions: 10 seconds (default), 26 seconds (with background functions)
- This may be insufficient for:
  - OpenAI API calls (can take 5-15 seconds)
  - Complex database operations
  - Email campaigns

### Solutions:

1. **Use Netlify Background Functions** for long-running tasks:
```javascript
// netlify/functions/process-ai-chat-background.js
exports.handler = async (event, context) => {
  // Long-running AI processing
  return {
    statusCode: 202,
    body: JSON.stringify({ message: 'Processing started' })
  }
}
```

2. **Implement Response Streaming** for AI responses:
```javascript
// Use streaming responses for OpenAI
const stream = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: messages,
  stream: true,
});
```

3. **Use Edge Functions** for better performance:
```javascript
// netlify/edge-functions/chatbot.js
export default async (request, context) => {
  // Runs closer to users with 50ms-1s timeouts
}
```

## Step 5: Deployment Steps

1. **Connect Repository:**
   - Link your GitHub repository to Netlify
   - Netlify will auto-detect Next.js

2. **Configure Build:**
   - Netlify auto-installs dependencies
   - Prisma client generates during build

3. **Deploy:**
   ```bash
   # Manual deploy from CLI
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

4. **Post-Deployment:**
   - Test chatbot embedding
   - Verify Stripe webhooks
   - Check Pusher real-time connections

## Step 6: Performance Optimizations

1. **Enable Netlify Cache Plugin:**
```toml
[[plugins]]
  package = "netlify-plugin-cache-nextjs"
```

2. **Configure ISR (Incremental Static Regeneration):**
```javascript
// In your pages
export const revalidate = 3600 // Revalidate every hour
```

3. **Optimize Images:**
```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
  [plugins.inputs]
    imageOptimization = true
```

## Common Issues & Solutions

### Issue: Prisma Client not found
**Solution:** Add postinstall script to generate Prisma client

### Issue: Function timeout on AI responses
**Solution:** Use background functions or implement streaming

### Issue: CORS errors on chatbot embed
**Solution:** Already configured in netlify.toml

### Issue: Environment variables not loading
**Solution:** Ensure all vars are added in Netlify dashboard, not just .env file

## Monitoring & Logs

- **Function Logs:** Netlify Dashboard > Functions > View logs
- **Build Logs:** Netlify Dashboard > Deploys > View logs
- **Real-time Logs:** `netlify logs:function --tail`

## Cost Considerations

### Netlify Free Tier Includes:
- 100GB bandwidth/month
- 300 build minutes/month
- 125,000 serverless function invocations/month

### For Production:
- Consider Netlify Pro ($19/month) for:
  - 1TB bandwidth
  - 1000 build minutes
  - 2M function invocations
  - Background functions support

## Testing Checklist

- [ ] Landing page loads correctly
- [ ] Authentication flow works
- [ ] Chatbot embeds on external sites
- [ ] Real-time chat updates via Pusher
- [ ] Stripe payments process correctly
- [ ] Email sending works
- [ ] File uploads via Uploadcare
- [ ] Database queries perform well
- [ ] AI responses generate within timeout

## Support Resources

- [Netlify Next.js Documentation](https://docs.netlify.com/frameworks/next-js/)
- [Prisma Serverless Guide](https://www.prisma.io/docs/guides/deployment/serverless)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)