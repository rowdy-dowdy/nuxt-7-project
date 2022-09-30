// stores/counter.js
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('tiktok_video', {
  state: () => {
    return { 
      video_playing: '/api/storage/videos/DvHe9DU5.mp4'
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    // async changeVolume(data: number) {
    //   if (data >= 0 || data <= 1) {
    //     this.volume = data
    //   }
    // },
  },
})
