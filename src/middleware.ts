import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("laravel_session"); // Adjust based on your authentication method
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];
  
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Add all protected routes
};