import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../utils/prisma"
import {compare} from "bcrypt";

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

        // const user = { id: "2", name: "Việt Hùng", email: "viet.hung.2898@gmail.com", password: "Admin123!" }
        var user = await prisma.user.findUnique({
          where: {
            email: email
          },
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
            password: true,
            image: true,
            created_at: true,
            updated_at: true
          }
        })

        if (!user) {
          // throw new Error(JSON.stringify({
          //   text: "Credentials",
          //   detail: {
          //     'email': 'Email not found'
          //   }
          // }))
          throw new Error("Email not found")
        }

        if (!await compare(password, user.password || '')) {
          throw new Error("Password is corrected")
        }
  
        if (password != "Admin123!") {
          throw new Error("Password is corrected")
        } 

        const data = {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username,
          image: user.image,
          created_at: user.created_at,
          updated_at: user.updated_at
        }

        console.log({data})
      
        return data
      }
    })
  ],
  pages: {
    signIn: '/auth2/login'
  }
})
