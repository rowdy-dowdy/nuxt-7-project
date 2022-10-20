import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { signToken } from '~/utils/jwt'
import { verifyToken } from '~/utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    const refresh_token = getCookie(event, 'refresh_token') || null

    var decoded = null

    if (refresh_token) {
      decoded = verifyToken(refresh_token);
    }

    if (!decoded) {
      throw {
        status: 404,
        text: "refresh_token dose not exit"
      }
    }

    var user = await prisma.user.findUnique({
      where: {
        id: decoded?.id
      },
      select: {
        id: true,
        email: true,
        name: true,
        username: true,
        image: true
      }
    })

    if (!user) {
      throw {
        status: 404,
        text: "User not exists"
      }
    }

    const token = await signToken(user)
    // const refresh_token = await signToken(user, remember ? '60d' : '1d')

    setCookie(event, 'token', token, { maxAge: 3600, path: '/', httpOnly: true })
    // setCookie(event, 'refresh_token', refresh_token, { maxAge: remember ? 86400 * 60 : 86400, path: '/', httpOnly: true })
    
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
