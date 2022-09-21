<script lang="ts" setup>
  import { useSlots } from 'vue'

  const slots = useSlots()
  const props = defineProps({
    to: {
      type: String,
      default: '#'
    }
  })
  let show = ref(false)
</script>

<template>
  <li class="item">
    <div class="link" :class="{'active': show}">
      <NuxtLink :to="to">
        <slot />
      </NuxtLink>
      
      <span class="menu-arrow icon -mr-2" v-if="slots.dropdown" @click="show = !show">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
      </span>
    </div>
    
    <BlogLayoutDropdown :show="show" v-if="slots.dropdown">
      <slot name="dropdown" />
    </BlogLayoutDropdown>
  </li>
</template>