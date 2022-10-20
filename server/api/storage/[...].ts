import fs from 'node:fs'
import { sendStream } from 'h3'

export default defineEventHandler((event) => {
  const path = event.context.params._

  if (!fs.existsSync('./storage/' + path)) {
    if (path.split('/')[0] == 'images') {
      return sendStream(event, fs.createReadStream('./storage/images/not-found-image.jpg'))
    }
    else if (path.split('/')[0] == 'videos') {
    }
  }
  return sendStream(event, fs.createReadStream('./storage/' + path))
})
