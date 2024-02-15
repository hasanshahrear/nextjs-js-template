import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email_or_phone: {
          label: "Please enter your phone number or Email",
          type: "text",
        },
        password: { label: "Password", type: "text" },
      },

      async authorize(credentials) {
        const API_URL = `${process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_API_URL}/v1/customer/auth/login`;

        const res = await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json; charset=utf-8" },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token }) {
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user = {
          code: token.code,
          success: token.success,
          message: token.message,
          data: token.data,
        };
        session.access_token = token.access_token;
      }
      return session;
    },
  },
};
