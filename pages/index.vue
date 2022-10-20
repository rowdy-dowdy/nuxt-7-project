<script lang="ts" setup>
import { useUserStore } from '~~/stores/user';

const userStore = useUserStore()

const logger = async () => {
  try {
    const { user } = await Fetch2('/api/auth/me')

  } catch (error) {
    
  }
}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <h1 class="text-5xl font-semibold">Welcome</h1>
  </div>
</template>