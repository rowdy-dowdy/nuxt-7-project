<script lang="ts" setup>
  import { useModalStore } from "~~/stores/blog/modal";

  const modalStore = useModalStore()
</script>

<template>
  <div class="w-full min-h-screen flex flex-col text-[#8f9bad]">
    <BlogLayoutHeader class="flex-none" />
    
    <NuxtPage class="flex-grow" />

    <BlogLayoutFooter class="flex-none" />
    
    <div class="overlay" :class="{'!block': modalStore.$state.overplay}" @click.self="modalStore.hidden()"></div>
    <BlogLayoutModalSearch />
    <BlogLayoutModalMenu />
  </div>
</template>

<style>
  :root {
    --color-1: #8f9bad;
    --color-2: #203656;
  }

  .color-1 {
    color: #8f9bad ;
  }

  .color-2 {
    color: #203656 ;
  }

  ::selection {
    @apply text-white bg-rose-400;
  }

  .overlay {
    animation: fadeBg .3s forwards;
    @apply fixed hidden w-full h-full top-0 left-0 right-0 bottom-0 bg-white/70 z-50;
  }

  @keyframes fadeBg {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* p, span, a {
    font-weight: 300;
  } */
</style>