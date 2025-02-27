import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("token");
  if (!jwt && request.nextUrl.pathname === "/login") return NextResponse.next();;
  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));
  if (jwt) {
    if (request.nextUrl.pathname.includes("/login")) {
      try {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      } catch (error) {
        console.error(error);
        return NextResponse.next();
      }
    }
  }

  try {
    return NextResponse.next();
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login/:path*", "/proveedores/:path*"],
};
