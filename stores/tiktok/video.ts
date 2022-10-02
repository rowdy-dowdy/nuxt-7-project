// stores/counter.js
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('tiktok_video', () => {
  const video_playing = ref('')
  const next_will_video = ref('')
  const muted = ref(true)

  // const next

  return {
    video_playing,
    next_will_video,
    muted
  }
})
