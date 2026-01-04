import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isValidToken = token === "face";
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/login";

  // 1. If trying to access admin and not authenticated, redirect to login
  if (isAdminRoute && !isValidToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. If trying to access login and already authenticated, redirect to admin
  if (isLoginRoute && isValidToken) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
