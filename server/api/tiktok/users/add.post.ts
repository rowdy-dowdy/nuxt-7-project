import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const user = await prisma.user.create({
    data: {
      email: body.email,
      image: body.image,
      username: body.username,
      password: body.password,
      name: body.name
    }
  })

  return user
})
