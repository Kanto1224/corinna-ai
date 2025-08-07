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
    '/favicon.ico'
  ],
  ignoredRoutes: ['/chatbot', '/chatbot-demo', '/api/chatbot-demo'],
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
