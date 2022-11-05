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
    const decoded = await event.context.auth

    if (!decoded) {
      throw {
        status: 401, 
        text: 'Unauthorized'
      }
    }

    var user = await prisma.user.findUnique({
      where: {
        id: decoded.id
      },
      select: {
        id: true,
        email: true,
        name: true,
        username: true,
        image: true,
        created_at: true,
        updated_at: true
      }
    })
    
    return {
      user
    }
  }
  catch (e: any) {
    return createError({ 
      statusCode: e?.status || 500, 
      statusMessage: e?.text || 'Internal Server Error',
      data: e?.body_response || []
    })
  }
})
