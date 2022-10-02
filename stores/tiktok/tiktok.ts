// stores/counter.js
import { defineStore, skipHydrate } from 'pinia'
import { useEyeDropper, useLocalStorage } from '@vueuse/core'
import { useVideoStore } from "~/stores/tiktok/video";

export const useTiktokStore = defineStore('tiktok', () => {
  const videoStore = useVideoStore()

  var timeout = null

  const defaultObserver = () => {
    var temp_observer = ref<IntersectionObserver | null>(null)
  
    if (process.client) {
      // de tam thoi, neu 1 man hinh co tu 2 item tro len se hoat dong k chinh xac
      temp_observer.value = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // console.log(entry.intersectionRatio)
            clearTimeout(timeout)
            timeout = setTimeout(() => {
              videoStore.video_playing = (entry.target as HTMLElement).dataset.path
            }, 300);
          }
          // else {
          //   console.log('out', (entry.target as HTMLElement).dataset.path);
          // }
        });
      }, { threshold: 0.6});
    }
  
    return temp_observer
  }

  const observer = defaultObserver()


  return {
    observer: skipHydrate(observer)
  }
})
