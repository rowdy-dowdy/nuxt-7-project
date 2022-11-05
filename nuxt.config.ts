// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    // '@nuxtjs/tailwindcss',
    'nuxt-windicss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    'virtual:windi.css',
    '@/assets/css/tailwind.css',
    // 'virtual:windi-devtools',
  ]
})
