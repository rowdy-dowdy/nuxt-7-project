// stores/counter.js
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', {
  state: () => {
    return { 
      volume: useLocalStorage('pinia/app/volume', 1)
    }
  },
  hydrate(state, initialState) {
    // in this case we can completely ignore the initial state since we
    // want to read the value from the browser
    state.volume = useLocalStorage('pinia/app/volume', 1) // khong phai loi
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async changeVolume(data: number) {
      if (data >= 0 || data <= 1) {
        this.volume = data
      }
    },
  },
})
