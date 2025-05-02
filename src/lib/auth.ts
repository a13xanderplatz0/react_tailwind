import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Ensure profile scope includes email, name, and picture
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile",
        }
      }
    }),
  ],
  // Optional: Add callbacks for session/jwt modification if needed later
  callbacks: {
    async session({ session, token }) {
      // Add user id or other token info to session if needed
      // session.user.id = token.sub; // Example
      return session;
    },
    // async jwt({ token, user, account }) {
    //   // Persist the OAuth access_token and or the user id to the token right after signin
    //   if (account && user) {
    //     token.accessToken = account.access_token;
    //     token.id = user.id;
    //   }
    //   return token;
    // }
  },
  // Optional: Add secret for production
  // secret: process.env.NEXTAUTH_SECRET,
});
