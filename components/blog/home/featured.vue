<script lang="ts" setup>
  import { data } from './data_post';

  var tab = ref(1)
  var loading = ref(false)

  const changeTab = async (v: number) => {
    loading.value = true

    await new Promise((res,rej) => {
      setTimeout(() => {
        res(true)
      }, 500);
    })

    loading.value = false
    tab.value = v
  }

  const format_time = (date) => new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'})

  var data_post = computed(() => data.splice(0, 4))
</script>

<template>
  <BlogLayoutContainer>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-2/3">
        <div class="px-4">
          <div class="relative w-full h-full rounded-lg overflow-hidden group">
            <div class="w-full" style="padding-bottom: 70%;"></div>
            <a href="#" class="absolute block w-full h-full top-0 left-0">
              <img src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/grant-ritchie-1154815-unsplash-750x540.jpg" alt=""
                class="block w-full h-full object-cover transition-all duration-500 group-hover:scale-110">
              <div class="absolute w-full h-full top-0 left-0 bg-[#2f568e]/60"></div>
            </a>
            <div class="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col justify-end items-start space-y-2 sm:space-y-4 md:space-y-6 text-white">
              <a href="#" class="btn btn-r py-1 px-3 text-sm">Inspiration</a>
              <h3 class="text-xl sm:text-3xl md:text-4xl font-semibold">
                <a href="#">5 Easy Ways You Can Turn Future Into Success</a>
              </h3>
              <div class="flex space-x-4 items-center text-sm text-gray-300">
                <a href="#" class="hover:text-rose-400">Katen Doe</a>
                <span class="w-1 h-1 rounded-full bg-current"></span>
                <span>August 20, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/3 mt-4 lg:mt-0">
        <div class="px-4">
          <div class="w-full h-full flex flex-col rounded-lg border px-6">
            <div class="flex-none flex space-x-2 mt-8 text-sm">
              <a href="#" class="flex-1 py-3 px-3 text-center border rounded-full"
                :class="{'bg-gradient-to-r from-rose-500 to-rose-400 text-white !border-0' : tab == 1}"
                @click.prevent="changeTab(1)"
              >Popular</a>
              <a href="#" class="flex-1 py-3 px-3 text-center border rounded-full"
                :class="{'bg-gradient-to-r from-rose-500 to-rose-400 text-white !border-0' : tab == 2}"
                @click.prevent="changeTab(2)"
              >Recent</a>
            </div>
            <div class="flex-grow min-h-0 relative mt-10">
              <div class="flex flex-col space-y-4">
                <div v-for="item in data_post" :key="item.id" class="flex space-x-4 pb-4 border-b last-of-type:border-0 border-gradient">
                  <a href="#" class="flex-none w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                    <img :src="item.image" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                  </a>
                  <div class="flex-grow min-w-0">
                    <h3 class="font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                      <a href="#">{{item.title}}</a>
                    </h3>
                    <p class="mt-2 text-sm">{{format_time(item.created_at)}}</p>
                  </div>
                </div>
              </div>
              <div class="absolute w-full h-full top-0 left-0 bg-white/70 grid invisible pointer-events-none opacity-0 transition-all place-items-center"
                :class="{'!visible !pointer-events-auto !opacity-100': loading}">
                <div class="icon w-12 h-12 text-rose-500 animate-spin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BlogLayoutContainer>
</template>

<style scoped>
  .border-gradient {
    border-image-slice: 1;
    border-image-source: linear-gradient(to left bottom, #c2c2c2, #fff);
  }
</style>