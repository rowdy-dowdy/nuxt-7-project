import fs from 'node:fs'
import { sendStream } from 'h3'

export default defineEventHandler((event) => {
  const path = event.context.params._

  return sendStream(event, fs.createReadStream('./storage/' + path))
})
