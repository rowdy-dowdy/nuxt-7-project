import fs from 'node:fs'
import { v4 as uuidv4 } from 'uuid';
import busboy  from 'busboy'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/storage/videos')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uuidv4())
  }
})

const upload = multer({ storage: storage })

export default defineEventHandler((event) => {
  // const query = useQuery(event)
  const file = upload.single()

  const accounts = data
  
  return accounts
})
