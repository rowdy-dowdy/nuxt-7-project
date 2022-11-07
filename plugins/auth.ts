import { useUserStore } from "~~/stores/user"

export default defineNuxtPlugin( async (nuxtApp) => {
  if (process.client) {
    // const userStore = useUserStore()
    // try {
    //   const { user } = await Fetch2('/api/auth/me')
  
    //   userStore.changeUser(user)
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   userStore.loaded = true
    // }
  }
});