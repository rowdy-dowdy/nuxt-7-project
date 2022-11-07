// stores/counter.js
import { defineStore, skipHydrate } from 'pinia'
// import { useLocalStorage } from '@vueuse/core'

type UserInfo = {
  id: number
  username: string
  email: string
  name: string
  password: string
  image: string
}

export const useUserStore = defineStore('user', () => {
  const loaded = ref(false)
  const user = ref<UserInfo | null>(null)
  const token = ref<string | null>(null)
  const refresh_token = ref<string | null>(null)

  const changeUser = (data: any) => {
    user.value = data
  }

  const isLogin = computed(() => user.value != null)

  return {
    loaded,
    user,
    token,
    refresh_token,
    isLogin,
    changeUser
  }
})
