import { defaultLocale, locales } from "./constants/locales";

// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
  urlMappingStrategy: "rewriteDefault",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};

// // Consolidated imports
// import { defaultLocale, locales } from "./constants/locales";
// import { createI18nMiddleware } from "next-international/middleware";
// import { NextRequest, NextResponse } from "next/server";
// import { clerkMiddleware } from "@clerk/nextjs/server";

// // i18n Middleware setup
// const I18nMiddleware = createI18nMiddleware({
//   locales,
//   defaultLocale,
//   urlMappingStrategy: "rewriteDefault",
// });

// // Combined middleware function
// export function middleware(request: NextRequest) {
//   // First, handle authentication with Clerk
//   const response = clerkMiddleware()(request);
//   if (response instanceof NextResponse && response.status === 401) {
//     // If unauthorized, return the response early
//     return response;
//   }

//   // Then, handle localization
//   return I18nMiddleware(request);
// }

// // Combined configuration
// export const config = {
//   matcher: [
//     "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
//     "/((?!.*\\..*|_next).*)",
//     "/",
//     "/(api|trpc)(.*)",
//   ],
// };
