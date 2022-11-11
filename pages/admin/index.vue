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
            <div class="border-b flex items-center flex-row-reverse focus-within:border-rose-300">
              <input type="text" name="s" class="flex-grow min-w-0 px-4 py-2 peer" placeholder="Search...">
              <span class="flex-none icon w-4 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
              </span>
            </div>
          </div>

          <!-- left sidebar home -->
          <div class="w-sm border-l px-6">left</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .peer:focus + * {
    @apply text-rose-500;
  }
</style>