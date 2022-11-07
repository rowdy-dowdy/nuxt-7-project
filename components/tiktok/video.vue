<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { useAppStore } from "~/stores/app";
  import { useVideoStore } from "~/stores/tiktok/video";
  const props = defineProps({
    path: String
  })

  const appStore = useAppStore()
  const videoStore = useVideoStore()
  const { volume } = storeToRefs(appStore)
  const { video_playing, muted } = storeToRefs(videoStore)

  const video = ref<HTMLVideoElement | null>(null)

  const playing_video = ref(false)
  const togleVideo = (data = undefined) => {
    if (!video.value) return
    // toggle video
    if (video.value.paused) {
      video.value.play();
      playing_video.value = true
      videoStore.video_playing = props.path || ""
    }
    else {
      video.value.pause()
      playing_video.value = false
    }
  }

  watch(volume, v => {
    muted.value = (v == 0)
    if (video.value) {
      video.value.volume = v
    }
  })

  watch(video_playing, v => {
    if (!video.value) return

    if (v != props.path && video.value) {
      video.value.pause()
    }
    else {
      video.value.play();
      playing_video.value = true
    }
  })

  const volume_show = ref(false)
  var moveout_volume = false // di chuyen ra khoi nut volume hay chua
  var change_volume = false  // co dang thay doi volume hay khong

  const showVolume = () => {
    moveout_volume = false
    volume_show.value = true
  }

  const closeVolume = () => {
    moveout_volume = true
    if (!change_volume)
      volume_show.value = false
  }

  var line_volume = ref<HTMLElement | null>(null)

  const clickVolume = (e: MouseEvent) => {
    let rect = (e.target as HTMLElement).getBoundingClientRect();
    let y = e.clientY - rect.top;  // y position within the element.
    let percen = Math.round(((rect.height - y) / rect.height) * 100) / 100
    
    appStore.changeVolume(percen)
  }

  const moveVolume = (e: MouseEvent) => {
    if (!line_volume.value) return

    let rect = line_volume.value.getBoundingClientRect();
    let y = e.clientY - rect.top;  // y position within the element.
    let percen = Math.round(((rect.height - y) / rect.height) * 100) / 100

    appStore.changeVolume(percen < 0 ? 0 : percen > 1 ? 1 : percen)
  }

  const downChildVolume = () => {
    change_volume = true
    window.addEventListener('mousemove', moveVolume)
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', moveVolume)
      change_volume = false
      if (moveout_volume)
        volume_show.value = false
    })
  }

  onMounted(() => {
    if (video.value) {
      video.value.volume = volume.value
    }

  })
</script>

<template>
  <div class="relative w-max max-w-[650px] max-h-[60vh] rounded overflow-hidden group">
    <div class="w-full h-full aspect-[56.25/100] bg-gray-100 max-w-[inherit] max-h-[inherit]">
      <video ref="video" :data-src="path" alt="" class="video-item max-w-[inherit] max-h-[inherit]" loop :muted="muted"></video>
    </div>

    <a href="#" class="absolute w-full h-full top-0 left-0"></a>

    <div class="absolute left-5 right-5 bottom-6 flex items-center justify-between text-white pointer-events-none">
      <span 
        @click="togleVideo()"
        class="icon w-10 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-auto">
        <svg v-if="!playing_video" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M7 6v12l10-6z"></path></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>
      </span>

      <ClientOnly>
        <div 
          @mouseenter="showVolume"
          @mouseleave="closeVolume"
          class="volume relative pointer-events-auto"
          :class="{'opacity-0 group-hover:opacity-100 pointer-events-auto': !muted}"
        >
          <span class="icon w-6 cursor-pointer peer" @click.prevent="muted = !muted">
            <svg v-if="muted" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path><path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z"></path></svg>
          </span>

          <Transition name="volume_show">
            <div v-if="volume_show" class="volume_line absolute left-1/2 bottom-full -translate-x-1/2">
              <div class="p-3 rounded-full bg-black/30">
                <div
                  ref="line_volume"
                  class="relative w-2 px-[3px] h-14 cursor-pointer -scale-y-100"
                  @click.self="clickVolume"
                >
                  <div class="w-full h-full bg-white pointer-events-none"></div>
                  <div
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white cursor-pointer"
                    :style="{'top': muted ? '0%' : volume * 100 + '%'}"
                    @mousedown="downChildVolume"
                  ></div>
                </div>
              </div>
              <div class="w-full h-2 bg-transparent"></div>
            </div>
          </Transition>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
  .volume_show-enter-active {
    animation: modal-in 0.3s;
  }
  .volume_show-leave-active {
    animation: modal-in 0.3s reverse;
  }

  @keyframes modal-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>