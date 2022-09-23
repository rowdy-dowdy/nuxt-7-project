<script lang="ts" setup>
  import { useModelStore } from "~/stores/model";

  const modelStore = useModelStore()
</script>

<template>
  <div class="w-full h-full text-[#8f9bad]">
    <BlogLayoutHeader />
    
    <BlogHomeFeatured />
    <BlogHomeContent />

    <BlogLayoutFooter />
    
    <div class="overlay" :class="{'!block': modelStore.$state.overplay}" @click.self="modelStore.hidden()"></div>
    <BlogLayoutModalMenu />
  </div>
</template>

<style>
  :root {
    --color-1: #79889e;
    --color-2: #203656;
  }

  .color-1 {
    color: #79889e ;
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

  p, span {
    font-weight: 300;
  }
</style>