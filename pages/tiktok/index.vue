<script setup lang="ts">
  const {data: videos} = useFetch('/api/tiktok/videos')

  const observer = ref<IntersectionObserver | null>(null)

  if (process.client) {
    observer.value = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          console.log(entries)
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 1.0});
  }
  
  const itemRefs = ref([])
  const test = ref(null)
  // for convenience
  // let el = computed(() => skipUnwrap.el.value);

  // observer.observe(itemRefs);

  onMounted(() => {
    console.log(test.value)
    itemRefs.value.forEach(v => {
      // observer.value.observe(v);
      console.log(v)
    })
  })

  onUnmounted(() => {
    observer.value.disconnect()
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
          <li v-for="video in videos" ref="itemRefs">{{video.id}}</li>
          <TiktokItem vref="test" :key="videos[0].id" :path="videos[0].path"/>
          <!-- <TiktokItem v-for="video in videos" ref="test" :key="video.id" :path="video.path"/> -->
        </div>
      </div>
    </div>
  </TiktokLayoutContainer>
</template>