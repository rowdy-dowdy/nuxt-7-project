<template>
  <BlogLayoutContainer class="flex flex-col justify-center items-center">
    <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold color-2">404 Not Found</h3>
    <p class="py-6 text-sm">Oops, the page you are looking for does not exist.</p>
    <button 
      class="blog-btn blog-btn-r px-8 py-2.5 text-sm flex space-x-2"
      @click.prevent="handleError"
      >
      <span class="icon text-white w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
      </span>
      <span>Return Home</span>
    </button>
  </BlogLayoutContainer>
</template>
<script setup lang="ts">
  // default props available on error.vue
  const props = defineProps({
    error: Object,
  });
  
  // customise 404 message from script section
  // const error = useError();
  // console.log(props.error, 'eror blog')
  
  // clear error and redirect to home page
  const handleError = () => clearError({ redirect: '/blog' });
  </script>
  