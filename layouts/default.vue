<script lang="ts">
</script>

<template>
  <div class="w-full h-full table-cell">
    <RootHeader />
    <slot />
  </div>
</template>

<style>
  #__nuxt {
    @apply w-full h-[1px] min-h-screen table;
  }
</style>
