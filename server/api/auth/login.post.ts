export default defineEventHandler((event) => {
  // const token = getCookie(event, 'token') || 0
  
  return {
    user: {
      id: 1,
      name: 'Việt Hùng',
      avatar: 'http://localhost:3000/_nuxt/assets/img/rose.png'
    },
    token: '123'
  }
})
