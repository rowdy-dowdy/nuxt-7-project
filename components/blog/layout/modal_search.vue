<script lang="ts" setup>
  import { useModelStore } from "~/stores/model";

  const modelStore = useModelStore()

  const closeModalSearch = (e) => {
    if (e.key == "Escape" && modelStore.search) {
      // console.log(modelStore.search)
      modelStore.toggleSearch(false)
    }
  }
  onMounted(() => {
    window.addEventListener('keydown', closeModalSearch)

    return () => {
      window.removeEventListener('keydown', closeModalSearch)
    }
  })
</script>

<template>
  <div id="modalSearch" class="hidden fixed top-0 left-0 w-full h-full bg-white z-50 items-center" :class="{'!flex': modelStore.search}">
    <div class="absolute right-4 top-4">
      <span class="icon w-8 cursor-pointer" @click="modelStore.toggleSearch()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </span>
    </div>

    <div class="mt-[-10%] w-full max-w-2xl mx-auto px-4 color-2">
      <h5 class="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Press ESC to close</h5>
      <div class="mt-6 flex space-x-2">
        <input type="text" class="flex-grow min-w-0 px-6 py-3 border bg-white focus:border-rose-500 rounded-full text-[#444]" placeholder="Search and press enter ...">
        <button class="flex-none blog-btn blog-btn-r px-8 py-3">
          <span class="icon w-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #modalSearch {
    animation: scaleSearch .3s forwards;
  }

  @keyframes scaleSearch {
    0% { scale: 0; }
    100% { scale: 1; }
  }
</style>