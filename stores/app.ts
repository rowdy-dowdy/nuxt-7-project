// stores/counter.js
import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', () => {
  const volume = useLocalStorage('pinia/app/volume', 1)

  const changeVolume = (data: number) => {
    if (data >= 0 || data <= 1) {
      volume.value = data
    }
  }

  return {
    volume : skipHydrate(volume),
    changeVolume
  }
})
