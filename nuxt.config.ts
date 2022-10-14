// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    // '@nuxtjs-alt/auth',
    // '@nuxtjs-alt/http',
    // '@nuxtjs-alt/proxy',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  // auth: {
  //   strategies: {
  //     localStorage: false,
  //     cookie: {
  //       cookie: {
  //         server: true, // by default this is set based on if nuxt ssr is enabled
  //         name: 'token',
  //       },
  //       endpoints: {
  //         csrf: false,
  //         login: {
  //           url: '/api/user/login',
  //           method: 'post'
  //         },
  //         user: {
  //           url: '/api/user/me',
  //           method: 'get'
  //         }
  //       },
  //       user: {
  //         property: {
  //           client: false,
  //           server: false
  //         },
  //         autoFetch: true
  //       }
  //     },
  //   }
  // },
  plugins: ['~/plugins/vue-collapse.ts'],
})
