import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define public paths that don't require authentication
  const isPublicPath = !path.startsWith('/admin') || path === '/admin/login';
  
  // Get the token if it exists
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  // If the path is public, allow the request
  if (isPublicPath) {
    return NextResponse.next();
  }
  
  // If no token and trying to access a protected route, redirect to login
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  
  // If token exists and the user is trying to access an admin route, allow them
  return NextResponse.next();
}
