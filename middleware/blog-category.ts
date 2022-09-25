export default defineNuxtRouteMiddleware((to, from) => {
  const categories = ['lifestyle', 'news', 'culture']

  if (categories.findIndex(v => v === to.params.slug) < 0) {
    return navigateTo('/blog')
  }
})
