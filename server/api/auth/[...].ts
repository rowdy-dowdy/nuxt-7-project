import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../utils/prisma"

export default NuxtAuthHandler({
  secret: process.env.SECRET || "",
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider.default({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    }),
    CredentialsProvider.default({
      id: 'credentials',
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text ", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string,
          password: string
        }

        const user = { id: "2", name: "Việt Hùng", email: "viet.hung.2898@gmail.com", password: "Admin123!" }

        if (email != user.email) {
          // throw new Error(JSON.stringify({
          //   text: "Credentials",
          //   detail: {
          //     'email': 'Email not found'
          //   }
          // }))
          throw new Error("Email not found")
        }
  
        if (password != "Admin123!") {
          throw new Error("Password is corrected")
        } 

        const data = {
          id: user.id,
          name: user.name,
          email: user.email
        }
      
        return data
      }
    })
  ],
  pages: {
    signIn: '/auth2/login'
  }
})
