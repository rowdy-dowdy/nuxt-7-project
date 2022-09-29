<script lang="ts" setup>

</script>

<template>
  <div class="w-full h-full flex flex-col text-[#333]">
    <TiktokLayoutHeader class="sticky top-0 flex-none" />
    
    <NuxtPage class="flex-grow" />
    <TiktokModalUser />
  </div>
</template>

<style>
  html,body, #__nuxt {
    /* @apply w-full h-full; */
  }
</style>