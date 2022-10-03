import fs from 'node:fs'
import busboy  from 'busboy'

// async function readForm(req) {
//   const data = {}
//   await new Promise( (resolve) => {
//     const bb = busboy({ headers: req.headers })
//     bb.on('field', (key, value) => {
//       data[key] = value
//     })
//     bb.on('file', (key, file, info) => {
//       const buffer_array = []
//       file.on('data', (data) => {
//         buffer_array.push(Buffer.from(data, {'type': info.mimeType}))
//       }).on('close', () => {
//         data[key] = new File(buffer_array, info.filename, {'type': info.mimeType})
//       })
//     })
//     bb.on('close', resolve)
//     req.pipe(bb)
//   })
//   return data
// }

export default defineEventHandler(async (event) => {
  const { req } = event
  const bb = busboy({ headers: req.headers });
  console.log('1')
  try {
  bb.on('file', (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    console.log(
      `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
      filename,
      encoding,
      mimeType
    );
    file.on('data', (data) => {
      console.log(`File [${name}] got ${data.length} bytes`);
    }).on('close', () => {
      console.log(`File [${name}] done`);
    });
  });
  bb.on('field', (name, val, info) => {
    console.log(`Field [${name}]: value: %j`, val);
  });
  bb.on('close', () => {
    console.log('Done parsing form!');
  });
  req.pipe(bb);
  console.log('ok')
  return 'ok'
  }catch(e) {
    console.log(e)
    return 'no ok'
  }
  
})
