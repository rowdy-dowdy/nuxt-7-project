<script lang="ts" setup>
  import { useModelStore } from "~/stores/model";

  const store = useModelStore()
</script>

<template>
  <div class="w-full h-full text-[#8f9bad]">
    <div class="fixed" :class="{'block': store.$state.show}"></div>
    <BlogLayoutHeader />
  </div>
</template>

<style>
  :root {
    --color-1: #79889e;
    --color-2: #050505;
  }

  .color-1 {
    color: #79889e ;
  }

  .color-2 {
    color: #203656 ;
  }
</style>