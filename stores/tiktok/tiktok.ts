// stores/counter.js
import { defineStore, skipHydrate } from 'pinia'
import { useEyeDropper, useLocalStorage } from '@vueuse/core'
import { useVideoStore } from "~/stores/tiktok/video";

export const useTiktokStore = defineStore('tiktok', () => {
  const videoStore = useVideoStore()

  const defaultObserver = () => {
    var temp_observer = ref<IntersectionObserver | null>(null)
  
    if (process.client) {
      // console.log('client')
      temp_observer.value = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            console.log('in the view', (entry.target as HTMLElement).dataset.path);
            videoStore.video_playing = (entry.target as HTMLElement).dataset.path
          } 
          else {
            console.log('out of view');
          }
        });
      }, {threshold: .5});
    }
  
    return temp_observer
  }

  const observer = defaultObserver()


  return {
    observer: skipHydrate(observer)
  }
})
