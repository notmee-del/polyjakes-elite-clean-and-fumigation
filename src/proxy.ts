import { NextResponse, type NextRequest } from 'next/server';
import { auth0 } from './lib/auth0';

export async function proxy(request: NextRequest) {
  // Let Auth0 handle authentication routes (/auth/login, etc.)
  const authResponse = await auth0.middleware(request);

  const pathname = request.nextUrl.pathname;

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    const session = await auth0.getSession();
    if (!session || !session.user) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  // Redirect authenticated users from home page to dashboard
  if (pathname === '/') {
    const session = await auth0.getSession();
    if (session && session.user) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return authResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - .*\\.(?:svg|png|jpg|jpeg|gif|webp)$ (image formats)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};