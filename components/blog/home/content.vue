<script lang="ts" setup>
  import { data } from './data_post';
  const format_time = (date) => new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'})

  var data_post = computed(() => data.splice(0, 4))
</script>

<template>
  <BlogLayoutContainer class="mt-10">
    <div class="flex flex-wrap self-stretch xl:flex-nowrap space-y-6 lg:space-y-0 lg:space-x-6">
      <div class="w-full xl:w-2/3">
        <h2 class="text-2xl font-semibold color-2">
          Editor's Pick
          <svg class="mt-2" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
          </svg>
        </h2>

        <div class="mt-6 rounded-lg border p-6">
          <div class="flex items-stretch space-x-6">
            <div class="w-1/2">
              <div class="flex flex-col h-full">
                <div class="flex-grow relative">
                  <div class="w-full pb-[60%]"></div>
                  <img src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/jason-briscoe-105344-unsplash-325x233.jpg" alt=""
                    class="absolute w-full h-full top-0 left-0 object-cover rounded-lg">
                  
                </div>
                <div class="mt-4 flex-none flex flex-col space-y-4">
                  <div class="flex items-center space-x-4 text-sm">
                    <img src="~/assets/img/rose.png" alt="Rose" class="w-8 h-8 rounded-full object-cover">
                    <span>Viet Hung</span>
                    <span class="w-1 h-1 bg-rose-500 rounded-full"></span>
                    <span>August 23, 2022</span>
                  </div>
                  <h3 class="text-lg font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                    <a href="#" class="line-clamp-3">Easy Ways To Learn Everything About Construction</a>
                  </h3>
                  <p class="text-sm line-clamp-3">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…</p>
                </div>
              </div>
            </div>

            <div class="w-1/2">
              <div class="flex flex-col space-y-5">
                <div v-for="item in data_post" :key="item.id" class="flex space-x-4 pb-5 border-b last-of-type:pb-0 last-of-type:border-0 border-gradient">
                  <a href="#" class="flex-none w-28 h-20 rounded-lg overflow-hidden">
                    <img :src="item.image" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                  </a>
                  <div class="flex-grow min-w-0">
                    <h3 class="font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                      <a href="#" class="line-clamp-3">{{item.title}}</a>
                    </h3>
                    <p class="mt-2 text-sm">{{format_time(item.created_at)}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="w-full xl:w-1/3">
        
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