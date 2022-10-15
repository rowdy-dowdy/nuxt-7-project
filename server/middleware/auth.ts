import { verifyToken } from '~/utils/jwt'

export default defineEventHandler((event) => {
  let token = getCookie(event, 'token') || null

  if (token) {
    const decoded = verifyToken(token);
    event.context.auth = decoded
  }
})