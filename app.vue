<script lang="ts" setup>
import { client } from 'process';
import { useUserStore } from './stores/user';

useHead({
  title: 'Việt Hùng - 7 Project',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  // charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My 7 front end web projects' }
  ]
})

// const { data: user } = await useFetch('/api/auth/me')
// console.log(user.value)
// console.log('app')
const userStore = useUserStore()
const loaded = userStore.loaded
// if (process.client) {
//   console.log('app client')
//   try {
//     const { user } = await Fetch2('/api/auth/me')

//     const userStore = useUserStore()
//     userStore.changeUser(user)
//   } catch (error) {
//     console.log(error)
//   } finally {
//     loading.value = false
//   }
// }
</script>

<template>
  <RootLoading v-if="loaded" />
  <LazyNuxtLayout v-else>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </LazyNuxtLayout>
</template>

<style>
  @font-face {
    font-family: "Poppins";
    src: url("~/assets/fonts/poppins/Poppins-Regular.otf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url("~/assets/fonts/poppins/Poppins-Italic.otf") format("truetype");
    font-weight: 500;
    font-style: italic;
  }

  /* bold */
  @font-face {
    font-family: "Poppins";
    src: url("~/assets/fonts/poppins/Poppins-Bold.otf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url("~/assets/fonts/poppins/Poppins-BoldItalic.otf") format("truetype");
    font-weight: bold;
    font-style: italic;
  }

  /* light */
  @font-face {
    font-family: "Poppins";
    src: url("~/assets/fonts/poppins/Poppins-Light.otf");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url("~/assets/fonts/poppins/Poppins-LightItalic.otf");
    font-weight: 400;
    font-style: italic;
  }

  html {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    scroll-behavior: smooth;
  }

  input, textarea, button, [contenteditable] {
    @apply focus:outline-none;
  }
</style>