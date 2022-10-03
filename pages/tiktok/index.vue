<script setup lang="ts">
  import { useTiktokStore } from "~/stores/tiktok/tiktok";
  import { useVideoStore } from "~/stores/tiktok/video";
  import { useVirtualList, useInfiniteScroll } from "@vueuse/core";

  const  {data: videos } = useFetch('/api/tiktok/videos')

  const tiktokStore = useTiktokStore()
  const videoStore = useVideoStore()

  const nextVideo = () => {
    let index = videos.value.findIndex(v => v.path == videoStore.video_playing)

    // neu video dang phat chua phai video cuoi cung
    if (index >= 0 && index < videos.value.length - 1) {
      videoStore.next_will_video = videos.value[index + 1].path
    }
  }

  const prevVideo = () => {
    let index = videos.value.findIndex(v => v.path == videoStore.video_playing)

    // neu video dang phat khong phai dau tien
    if (index > 0 && index < videos.value.length) {
      videoStore.next_will_video = videos.value[index - 1].path
    }
  }

  const eventKeydownVideo = (e) => {
    if (e.key == "ArrowDown") {
      nextVideo()
    }
    else if (e.key == "ArrowUp") {
      prevVideo()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', eventKeydownVideo)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', eventKeydownVideo)
  })
</script>

<template>
  <TiktokLayoutContainer>
    <div class="h-full flex flex-wrap space-x-12">
      <div class="flex-none">
        <TiktokLayoutLeftSidebar />
      </div>
      <div class="flex-grow min-w-0">
        <div class="flex flex-col mt-4">
          <TiktokItem v-for="video in videos" :key="video.id" :path="video.path" />
        </div>
      </div>
    </div>
  </TiktokLayoutContainer>
</template>