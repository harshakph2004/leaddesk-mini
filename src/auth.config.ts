import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: { signIn: "/login" },
  callbacks: {
    authorized: async ({ auth, request }) => {
      if (request.nextUrl.pathname.startsWith("/admin")) return Boolean(auth);
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
