<script lang="ts" setup>
import { menu as data_menu } from "./data_menu";
let show = ref(false)

const menu = ref(data_menu)
</script>

<template>
  <div class="fixed left-0 top-0 bottom-0 transition-all duration-300 transform" :class="{'-translate-x-full': !show}" style="z-index: 999999;">
    <div class="relative h-full bg-gray-900 py-4 flex flex-col space-y-4 items-center z-10">
      <div class="flex-grow flex flex-col space-y-4 px-2 overflow-y-auto">
        <NuxtLink to="/" class="bg-purple-600 text-white rounded-lg cursor-pointer">
          <span class="icon w-12 h-12 p-2">
            <svg width="41.6" height="67.2" viewBox="0 0 37 67.2" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke-width="0.25mm" style="fill: currentColor;"><path d="M 12.6 67.2 Q 9.7 67.2 8.2 65.65 A 4.576 4.576 0 0 1 7.231 64.073 Q 6.708 62.703 6.7 60.663 A 16.205 16.205 0 0 1 6.7 60.6 A 33.057 33.057 0 0 1 7.619 52.96 A 37.262 37.262 0 0 1 7.9 51.85 A 63.8 63.8 0 0 1 10.321 44.663 A 72.647 72.647 0 0 1 11.1 42.8 A 130.083 130.083 0 0 1 15.856 33.308 A 162.634 162.634 0 0 1 19.8 26.55 A 160.888 160.888 0 0 1 27.139 15.617 A 138.216 138.216 0 0 1 30.6 11.1 Q 27.2 11.6 23.15 11.95 Q 19.1 12.3 15.15 12.45 Q 11.756 12.579 9.063 12.597 A 128.179 128.179 0 0 1 8.2 12.6 Q 6 12.6 4.5 12.45 A 9.957 9.957 0 0 1 3.223 12.242 Q 2.502 12.073 1.9 11.8 Q 0.407 11.093 0.087 8.902 A 9.048 9.048 0 0 1 0 7.6 A 14.595 14.595 0 0 1 0.247 4.858 A 11.196 11.196 0 0 1 1.05 2.3 A 6.751 6.751 0 0 1 1.573 1.348 Q 2.475 0 3.7 0 A 2.427 2.427 0 0 1 3.907 0.01 Q 4.156 0.031 4.5 0.1 Q 4.981 0.196 6.019 0.478 A 72.206 72.206 0 0 1 6.1 0.5 Q 10.1 1.5 14 1.8 A 100.03 100.03 0 0 0 18.609 2.043 A 127.454 127.454 0 0 0 22.5 2.1 A 105.987 105.987 0 0 0 26.334 2.034 Q 28.394 1.959 30.2 1.8 A 1372.607 1372.607 0 0 0 31.819 1.656 Q 34.125 1.45 35.7 1.3 A 85.897 85.897 0 0 1 36.435 1.198 Q 37.913 1 38.4 1 A 2.417 2.417 0 0 1 40.215 1.811 A 3.979 3.979 0 0 1 40.7 2.45 Q 41.286 3.394 41.49 4.189 A 3.258 3.258 0 0 1 41.6 5 Q 41.6 6.2 40.8 7.4 Q 34.7 16.1 29.5 24.95 A 165.538 165.538 0 0 0 25.938 31.313 Q 24.258 34.485 22.945 37.359 A 84.363 84.363 0 0 0 21.5 40.7 Q 20.3 43.8 19.65 46.5 Q 19 49.2 19 51.5 A 13.136 13.136 0 0 0 19.065 52.847 Q 19.133 53.507 19.273 54.059 A 5.444 5.444 0 0 0 19.6 55 Q 20.2 56.3 20.9 57.4 Q 21.4 58.3 21.8 59.05 A 3.328 3.328 0 0 1 22.175 60.203 A 3.147 3.147 0 0 1 22.2 60.6 Q 22.2 61.9 21 63.45 A 8.513 8.513 0 0 1 19.363 65.041 A 11.808 11.808 0 0 1 17.65 66.1 A 9.795 9.795 0 0 1 14.833 67.018 A 13.151 13.151 0 0 1 12.6 67.2 Z" vector-effect="non-scaling-stroke"/></g></svg>
          </span>
        </NuxtLink>

        <span class="flex-none block w-full h-[1px] bg-white"></span>

        <NuxtLink v-for="item in menu" :key="item.id" :to="item.link" class="bg-teal-600 text-white rounded-lg cursor-pointer" @click="show = false">
          <span class="icon w-12 h-12 p-2" v-html="item.svg">
          </span>
        </NuxtLink>
      </div>

      <div class="flex-none">
        <div class="w-8 h-8 bg-white rounded-lg cursor-pointer" @click="show = false">
          <span class="icon w-full h-full p-2">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z"></path><path d="M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"></path></svg>
          </span>
        </div>
      </div>
      
    </div>

    <div class="absolute left-full bottom-2 bg-gray-900 p-2 rounded-r-md transition-all duration-300 transform"
      :class="{'-translate-x-full': show}"
    >
      <div class="w-6 h-6 bg-white rounded-lg cursor-pointer" @click="show = true">
        <span class="icon w-full h-full p-1">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path><path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path></svg>
        </span>
      </div>
    </div>
  </div>
</template>