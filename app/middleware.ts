export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*"], // Match `/dashboard` and its sub-paths
};