<script lang="ts" setup>
import { useUserStore } from '~~/stores/user';
const { status, data, signIn, signOut } = useSession()

const userStore = useUserStore()

userStore.changeUser(data.value)
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
