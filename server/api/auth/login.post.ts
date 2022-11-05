import { PrismaClient, User } from '@prisma/client'
// import { User } from "@prisma/client";
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import { removeSpace } from '~/utils/validator'
import { signToken } from '~/utils/jwt'

export type TypeUser = Omit<User, "password"> & {
  password?: String
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    // console.log(body)

    let email: string = removeSpace(body.email || ''),
        password: string = body.password || '',
        remember: boolean = body.remember || false

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

    var body_response = []

    if (!user) {
      body_response.push({ email: 'Email not exists' })
      throw {
        status: 404,
        text: "Email not exists",
        body_response
      }
    }

    if (!await bcrypt.compare(password, user.password || '')) {
      body_response.push({ email: 'Email not exists' })
      throw {
        status: 401,
        text: "Password incorrect",
        body_response
      }
    }

    var user_without_password: TypeUser  = user
    delete user_without_password.password
    const token = await signToken(user_without_password)
    const refresh_token = await signToken(user_without_password, remember ? '60d' : '1d')

    setCookie(event, 'token', token, { maxAge: 3600, path: '/', httpOnly: true })
    setCookie(event, 'refresh_token', refresh_token, { maxAge: remember ? 86400 * 60 : 86400, path: '/', httpOnly: true })
    
    return {
      user: user_without_password,
      expiresIn: '1h',
      token,
      refresh_token
    }
  }
  catch (e: any) {
    console.log(e)
    await new Promise((res) => setTimeout(res, 1000));
    return createError({ 
      statusCode: e?.status || 500, 
      statusMessage: e?.text || 'Internal Server Error',
      data: e?.body_response || []
    })
  }
})
