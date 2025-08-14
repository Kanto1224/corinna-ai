// middleware.ts
import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // By default, all routes are public. 
  // We only specify which routes to PROTECT.
  // This is the opposite of using publicRoutes.
});

export const config = {
  // This matcher protects only the routes starting with /dashboard
  // It specifically ignores all other routes, including /auth
  matcher: ['/dashboard/:path*'], 
};
