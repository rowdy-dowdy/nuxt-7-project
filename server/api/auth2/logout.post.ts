export default defineEventHandler(async (event) => {
  try {
    setCookie(event, 'token', '', { expires: new Date(0)})
    setCookie(event, 'refresh_token', '', { expires: new Date(0) })
    
    return {
      'message': 'Logout Success'
    }
  }
  catch (e: any) {
    return createError({ 
      statusCode: e?.status || 500, 
      statusMessage: e?.text || 'Internal Server Error'
    })
  }
})
