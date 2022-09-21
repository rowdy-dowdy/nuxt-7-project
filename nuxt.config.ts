// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    // 'nuxt-windicss',
    '@pinia/nuxt',
  ],
  plugins: ['~/plugins/vue-collapse.ts'],
  // windicss: {
  //   analyze: {
  //     analysis: {
  //       interpretUtilities: false,
  //     },
  //     // see https://github.com/unjs/listhen#options
  //     server: {
  //       port: 4444,
  //       open: true,
  //     }
  //   }
  // }
})
