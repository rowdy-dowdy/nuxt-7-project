import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import { removeSpace } from '~/utils/validator'
import { signToken } from '~/utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    const body = await useBody(event)

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
        image: true
      }
    })

    if (!user) {
      throw {
        status: 404,
        text: "Email not exists"
      }
    }

    if (!await bcrypt.compare(password, user.password || '')) {
      throw {
        status: 401,
        text: "Password incorrect"
      }
    }

    delete user.password

    const token = await signToken(user)
    const refresh_token = await signToken(user, remember ? '60d' : '1d')

    setCookie(event, 'token', token, { maxAge: 3600, path: '/' })
    setCookie(event, 'refresh_token', refresh_token, { maxAge: remember ? 86400 * 60 : 86400, path: '/', httpOnly: true })
    
    return {
      user,
      expiresIn: '1h',
      token,
      refresh_token
    }
  }
  catch (e: any) {
    return createError({ 
      statusCode: e?.status || 500, 
      statusMessage: e?.text || 'Internal Server Error'
    })
  }
})
