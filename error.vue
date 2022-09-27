<template>
  <NuxtPage />
</template>

<script setup>

const props = defineProps({
  error: Object
})

const error = useError();
// console.log(error.value, 'error main')

const handleError = () => clearError({ redirect: '/' })
</script>
