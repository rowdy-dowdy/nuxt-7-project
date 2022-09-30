<script setup lang="ts">
  const {data: videos} = useFetch('/api/tiktok/videos')
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