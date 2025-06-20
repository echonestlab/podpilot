// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/pricing"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
