<script lang="ts" setup>
  useHead({
    title: 'Việt Hùng - 7 Project',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'My 7 front end web projects' }
    ]
  })

  const nuxtApp = useNuxtApp()

  nuxtApp.hook("page:finish", () => {
    window.scrollTo(0, 0)
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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

  input, textarea, button {
    @apply focus:outline-none;
  }
</style>