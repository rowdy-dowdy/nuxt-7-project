<script setup lang="ts">
  definePageMeta({
    middleware: ["blog-category"]
    
  })

  const route = useRoute()
  
  // When accessing /posts/1, route.params.id will be 1
  console.log(route.params.slug)
</script>

<template>i</template>