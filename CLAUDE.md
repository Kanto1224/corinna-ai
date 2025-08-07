# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corinna AI is a Next.js 14 application that provides an AI-powered customer support chatbot and CRM system. It uses Clerk for authentication, Prisma with PostgreSQL for data persistence, Stripe for payments, and OpenAI for conversational AI capabilities.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM (using Prisma Accelerate)
- **Payments**: Stripe (including Stripe Connect)
- **AI**: OpenAI API
- **Real-time**: Pusher
- **UI Components**: Radix UI with shadcn/ui components
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **File Uploads**: Uploadcare
- **Email**: Nodemailer (for transactional emails)
- **Animations**: Framer Motion

### Key Architectural Patterns

1. **Server Actions**: Located in `src/actions/`, these handle business logic with database operations using Prisma client
   - `auth/` - User authentication and management
   - `bot/` - Chatbot configuration and responses
   - `conversation/` - Chat room and message handling
   - `dashboard/` - Analytics and metrics
   - `mail/` - Email campaign management
   - `payments/` - Stripe integration and billing
   - `settings/` - Domain and user settings
2. **Custom Hooks**: Found in `src/hooks/`, these manage component state and side effects
3. **Context Providers**: Authentication, theme, sidebar, and chat contexts wrap the application
4. **Component Structure**: 
   - UI components in `src/components/ui/` (shadcn/ui based)
   - Business components in `src/components/`
   - Form components organized by feature in `src/components/forms/`

### Database Schema

The application uses these main models:
- **User**: Linked to Clerk, contains subscription info
- **Domain**: Represents a business/website with its chatbot
- **ChatBot**: Configuration for each domain's AI assistant
- **Customer**: Visitors who interact with the chatbot
- **ChatRoom/ChatMessage**: Conversation history
- **Bookings**: Appointment scheduling
- **Campaign**: Email marketing campaigns
- **Product**: Products for sale through chatbot

### Routing Structure

- `/auth/*` - Authentication pages (public)
- `/(dashboard)/*` - Main app dashboard (protected)
  - `/dashboard` - Main dashboard
  - `/conversation` - Chat conversations management
  - `/appointment` - Appointment scheduling
  - `/email-marketing` - Email campaign management
  - `/integration` - Third-party integrations
  - `/settings/*` - Domain and account settings
- `/portal/[domainid]/*` - Customer-facing portal
  - `/appointment/[customerid]` - Customer booking interface
  - `/payment/[customerid]` - Payment processing
- `/chatbot` - Embeddable chatbot widget
- `/blogs/[id]` - Blog post pages
- `/api/stripe/*` - Stripe webhook handlers
- Legal/compliance pages:
  - `/agb` - Terms of service (German)
  - `/datenschutz` - Privacy policy (German)
  - `/impressum` - Legal notice (German)
  - `/wiederrufsrecht` - Right of withdrawal (German)
  - `/zahlungen-versand` - Payment and shipping (German)

### Environment Variables Required

```
# Database (using Prisma Accelerate)
DATABASE_URL=           # Prisma Accelerate connection string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up

# OpenAI
OPEN_AI_KEY=           # OpenAI API key

# Stripe Payments
NEXT_PUBLIC_STRIPE_PUBLISH_KEY=  # Note: different from template name
STRIPE_SECRET=         # Note: different from template name

# Pusher Real-time
NEXT_PUBLIC_PUSHER_APP_ID=
NEXT_PUBLIC_PUSHER_APP_KEY=
NEXT_PUBLIC_PUSHER_APP_SECRET=
NEXT_PUBLIC_PUSHER_APP_CLUSTOR=  # Note: typo in actual env var

# Uploadcare File Uploads
NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY=
UPLOAD_CARE_SECRET_KEY=

# Email (Nodemailer)
NODE_MAILER_EMAIL=
NODE_MAILER_GMAIL_APP_PASSWORD=
```

## Important Implementation Notes

- Authentication middleware is configured in `src/middleware.ts` using Clerk
- Prisma client singleton is in `src/lib/prisma.ts` to prevent connection issues in development
- Database uses Prisma Accelerate for connection pooling and performance optimization
- All forms use React Hook Form with Zod schemas defined in `src/schemas/`
  - `auth.schema.ts` - Authentication and user registration
  - `conversation.schema.ts` - Chat and messaging
  - `marketing.schema.ts` - Email campaigns
  - `settings.schema.ts` - Domain and bot configuration
- Server components fetch data directly in `src/actions/`, client components use hooks
- The chatbot can be embedded on external sites via the `/chatbot` route with domain ID parameter
- Real-time chat uses Pusher for live updates between customer and support agent
- Email functionality uses Nodemailer with Gmail integration for transactional emails
- Legal compliance pages are included for German market (GDPR, terms, etc.)
- The application supports multi-domain chatbot management with individual customization