import { useUserStore } from "~~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const userStore = useUserStore()
  
    if (!userStore.isLogin) {
      return navigateTo('/auth2/login?redirect_url=' + to.fullPath)
    }
  }
})
