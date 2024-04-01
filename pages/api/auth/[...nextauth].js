import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("No user found with the email");
        }

        const isValid = credentials.password === user.password;

        if (isValid) {
          return { id: user.id, name: user.email, email: user.email, isAdmin: user.isAdmin };
        } else {
          throw new Error("Password is incorrect");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
        session.user.id = token.uid;
        session.user.isAdmin = token.isAdmin;
        const user = await prisma.user.findUnique({
          where: { id: token.uid },
        });
        if (session && user) {
          session.user.id = user.id;
          session.user.firstName = user.firstName;
          session.user.isAdmin = user.isAdmin;
        }
        return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});