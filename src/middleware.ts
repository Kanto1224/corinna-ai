// middleware.ts
import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    // Be explicit with the exact pages first
    '/auth/sign-in',
    '/auth/sign-up',
    // Add a wildcard for any API routes Clerk might use internally
    '/api/auth/(.*)', 
    '/portal/(.*)',
    '/images/(.*)',
    '/impressum',
    '/wiederrufsrecht',
    '/agb',
    '/zahlungen-versand',
    '/datenschutz',
  ],
  ignoredRoutes: ['/chatbot', '/chatbot-demo', '/api/chatbot-demo'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
