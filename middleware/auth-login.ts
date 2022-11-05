import { useUserStore } from "~~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()

  if (!userStore.isLogin) {
    return navigateTo('/auth2/login?redirect_url=' + to.fullPath)
  }
})
