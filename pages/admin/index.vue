<script lang="ts" setup>
// definePageMeta({
//   middleware: ['auth-login']
// })
</script>

<template>
  <div class="flex h-full w-full">
    <AdminMenu />
    <div class="min-w-0 flex-grow">
      <div class="h-full w-full shadow">
        <div class="flex h-full w-full">
          <div class="min-w-0 flex-grow px-12 py-8">
            <div class="border-b"></div>
          </div>

          <!-- left sidebar home -->
          <div class="w-sm border-l px-6">left</div>
        </div>
      </div>
    </div>
  </div>
</template>