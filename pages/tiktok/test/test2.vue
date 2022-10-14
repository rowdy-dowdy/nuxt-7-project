<script lang="ts" setup>
import { useUserStore } from "~~/stores/user";

definePageMeta({
  middleware: ['auth']
})

const userStore = useUserStore()

const changeUser = () => {
  userStore.changeUser(null)
  console.log(userStore.user)
}
</script>

<template>
  <div>
    <p>click</p>
    <button @click.prevent="changeUser()">click</button>
  </div>
</template>