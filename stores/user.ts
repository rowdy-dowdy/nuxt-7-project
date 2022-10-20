// stores/counter.js
import { defineStore, skipHydrate } from 'pinia'
// import { useLocalStorage } from '@vueuse/core'

type UserInfo = {
  id: number
  username: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<UserInfo | null>(null)

  const changeUser = (data) => {
    user.value = data
  }

  const isLogin = computed(() => user.value != null)

  return {
    user : user,
    isLogin,
    changeUser
  }
})
