import { authMiddleware } from "@clerk/nextjs";

const middleware = authMiddleware({
  // Your middleware configuration options go here
  // For example, you can set ignoredRoutes or custom afterAuth logic
});

export default middleware;

export const config = {
  // Define publicRoutes and matcher inside the config object
  publicRoutes: [""],
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Exclude files with extensions and _next folder
                  // Include the root route
    "/(api|trpc)(.*)"              // Include routes starting with "api" or "trpc"
  ],
};
