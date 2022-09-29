import { useModalStore } from "~~/stores/blog/modal";

export default defineNuxtRouteMiddleware((to, from) => {
  const modalStore = useModalStore()

  // if (categories.findIndex(v => v === to.params.slug) < 0) {
  //   return navigateTo('/blog')
  // }
})
