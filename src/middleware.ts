// middleware.ts
import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/auth(.*)',
    '/portal(.*)',
    '/images(.*)',
    '/impressum',
    '/wiederrufsrecht',
    '/agb',
    '/zahlungen-versand',
    '/datenschutz',
  ],
  // Note: /favicon.ico has been removed from publicRoutes

  ignoredRoutes: ['/chatbot', '/chatbot-demo', '/api/chatbot-demo'],
})

export const config = {
  // This updated matcher correctly ignores files with extensions (like .ico, .png) 
  // and special Next.js folders.
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
