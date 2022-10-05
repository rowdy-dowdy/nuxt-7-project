import fs from 'node:fs'
import formidable from 'formidable';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const options = {
  multiples: true, 
  uploadDir: './storage/videos/',
  maxFileSize: 20 * 1024 * 1024,
  keepExtensions: true,
  filter: function ({name, originalFilename, mimetype}) {
    // keep only images
    // console.log({name, originalFilename, mimetype})
    return (name == 'file') && mimetype && mimetype.includes("video");
  }
}

export default defineEventHandler(async (event) => {
  try {
    const body = await useBody(event)
    console.log(body)
    return body
    const form = formidable(options);

    const formfields: any = await new Promise((res, rej) => {
      form.on('error', err => console.log(err));
      form.parse(event.req, (err, fields, files) => {
        if (err) {
          rej(err)
          return
        }
        res(files)
      })
    })

    if (formfields && Object.keys(formfields).length === 0 && Object.getPrototypeOf(formfields) === Object.prototype) {
      throw new Error('error')
    }

    const newVideo = await prisma.videos.create({
      data: {
        path: '/api/storage/videos/' + formfields.file[0].newFilename,
        userId: 1
      }
    })

    return newVideo
  }
  catch(e) {
    return null
  }
})
