import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// List of allowed admin emails
const ADMIN_EMAILS = ["elwehch123@gmail.com", "castarokio@gmail.com"];

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Check auth status for admin routes
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect admin routes (except login)
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    request.nextUrl.pathname !== "/admin/login"
  ) {
    if (!user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Check if user is an admin
    if (!ADMIN_EMAILS.includes(user.email || "")) {
      await supabase.auth.signOut();
      return NextResponse.redirect(new URL("/admin/login?error=not_authorized", request.url));
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
