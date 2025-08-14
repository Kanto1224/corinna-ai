# Netlify Deployment Terminal Commands

## Step-by-Step Deployment Guide

### 1. First, ensure all dependencies are installed:
```bash
npm install
```

### 2. Generate Prisma Client:
```bash
npx prisma generate
```

### 3. Build the project locally to test:
```bash
npm run build
```

### 4. If build succeeds, proceed with Netlify deployment:

#### Option A: Create New Site (Recommended for first deployment)
```bash
# Create a new Netlify site
netlify init

# When prompted:
# 1. Choose "Create & configure a new project"
# 2. Select your team (Main)
# 3. Choose a site name (e.g., "chatvise-ai")
# 4. Keep default settings for build command and publish directory
```

#### Option B: Link to Existing Site
```bash
# If you already created a site on Netlify dashboard
netlify link

# Enter your site name or ID when prompted
```

### 5. Deploy to Production:
```bash
# Deploy directly to production
netlify deploy --build --prod

# Or if you want to preview first:
netlify deploy --build  # Creates draft URL
# Then if satisfied:
netlify deploy --prod   # Promotes to production
```

### 6. Alternative: Manual Deploy Without Build
```bash
# If you've already built locally
npm run build

# Then deploy the built files
netlify deploy --dir=.next --prod
```

## Environment Variables Setup

### Via Terminal (After site is created):
```bash
# Set individual environment variables
netlify env:set DATABASE_URL "your_prisma_accelerate_url"
netlify env:set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY "your_key"
netlify env:set CLERK_SECRET_KEY "your_secret"
netlify env:set OPEN_AI_KEY "your_openai_key"
netlify env:set NEXT_PUBLIC_STRIPE_PUBLISH_KEY "your_stripe_key"
netlify env:set STRIPE_SECRET "your_stripe_secret"
netlify env:set NEXT_PUBLIC_PUSHER_APP_ID "your_pusher_id"
netlify env:set NEXT_PUBLIC_PUSHER_APP_KEY "your_pusher_key"
netlify env:set NEXT_PUBLIC_PUSHER_APP_SECRET "your_pusher_secret"
netlify env:set NEXT_PUBLIC_PUSHER_APP_CLUSTOR "your_cluster"
netlify env:set NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY "your_uploadcare_key"
netlify env:set UPLOAD_CARE_SECRET_KEY "your_uploadcare_secret"
netlify env:set NODE_MAILER_EMAIL "your_email"
netlify env:set NODE_MAILER_GMAIL_APP_PASSWORD "your_app_password"
```

### Or Import from .env file:
```bash
# If you have a .env.local file with all variables
netlify env:import .env.local
```

## Useful Commands

### Check deployment status:
```bash
netlify status
```

### View site info:
```bash
netlify sites:list
```

### Open site in browser:
```bash
netlify open:site
```

### View logs:
```bash
netlify logs:function
```

### Watch function logs in real-time:
```bash
netlify logs:function --tail
```

## Troubleshooting

### If you get "site not linked" error:
```bash
netlify link
# Or
netlify init
```

### If build fails locally:
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### To unlink and start fresh:
```bash
netlify unlink
netlify init
```

## Quick One-Liner Deploy (After Initial Setup)

Once your site is linked, you can deploy with:
```bash
npm run build && netlify deploy --dir=.next --prod
```

Or add to package.json:
```json
{
  "scripts": {
    "deploy": "npm run build && netlify deploy --dir=.next --prod"
  }
}
```

Then just run:
```bash
npm run deploy
```