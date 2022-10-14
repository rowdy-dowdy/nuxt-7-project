// stores/counter.js
import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const user = useLocalStorage<any>('pinia/user', null)

  const changeUser = (data: any) => {
    user.value = data
  }

  const isLogin = computed(() => user.value != null)

  return {
    user : skipHydrate(user),
    isLogin,
    changeUser
  }
})
