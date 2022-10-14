<script lang="ts" setup>
import { useUserStore } from "~~/stores/user";
const userStore = useUserStore()

const changeUser = () => {
  userStore.changeUser({
    name: 'Viet Hung'
  })
}
</script>

<template>
  <div>
    <NuxtLink to="/tiktok/test/test2">auth</NuxtLink>
    <button @click.prevent="changeUser()">login</button>
    <NuxtPage />
  </div>
</template>