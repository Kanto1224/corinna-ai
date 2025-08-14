// middleware.ts
import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    // This now correctly matches /auth, /auth/sign-up, /auth/sign-in, etc.
    '/auth/(.*)', 
    '/portal/(.*)', // Also updated this for consistency
    '/images/(.*)', // And this one
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
