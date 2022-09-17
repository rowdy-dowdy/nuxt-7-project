// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    // "@nuxtjs/axios",
    // '@nuxtjs/auth-next',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.API_URL || ' http://localhost:3000/api/',
  //   },
  // },
  // axios: {
  //   baseURL: process.env.API_URL || ' http://localhost:3000/api/',
  //   debug: process.env.DEBUG || false,
  //   proxyHeaders: false,
  //   credentials: false,
  // },
  // auth: {
  //   // Options
  //   redirect: {
  //     login: '/login',
  //     logout: '/',
  //     home: '/'
  //   }
  // }
})
