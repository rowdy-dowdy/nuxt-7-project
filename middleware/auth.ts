import { useModelStore } from "~/stores/model";

export default defineNuxtRouteMiddleware((to, from) => {
  const modelStore = useModelStore()

  // if (categories.findIndex(v => v === to.params.slug) < 0) {
  //   return navigateTo('/blog')
  // }
})
