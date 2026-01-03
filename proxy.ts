import { neonAuthMiddleware } from "@neondatabase/auth/next/server";

export default neonAuthMiddleware({
  loginUrl: "/auth/sign-in",
});

export const config = {
  matcher: [
    "/licoes/:path*",
    "/perfil/:path*",
    "/account/:path*",
  ],
};
