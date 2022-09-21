<script lang="ts" setup>
  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <ul class="dropdown-menu" v-collapse="show">
    <slot />
  </ul>
</template>