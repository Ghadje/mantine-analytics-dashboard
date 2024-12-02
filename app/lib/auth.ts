
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { api } from "./api";

export const AUTH_SECRET = "TII63t4e5900T/3cSupOTGMZrzuXRzyCVdDOCe4oRjs=";

export const authOptions : NextAuthOptions = {
  secret: AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      
      async authorize(credentials) {
        try {
          const res = await api.post('api/user/login', {
            email: credentials?.email,
            password: credentials?.password,
            
          });
      
          const resData = await res;
          if (res.data && resData && resData.data) {
            return resData.data;
          } else {
            console.error('Authorization failed:', resData);
            return null;
          }
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({token, user}){
      return {...token, ...user}
    },
    async session ({ session, token }) {
      session.user = token as any ;
      return session;
    }
  }
  
};