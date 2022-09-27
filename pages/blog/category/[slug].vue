<script setup lang="ts">
  import Swiper, { Navigation } from 'swiper'
  import 'swiper/css'

  definePageMeta({
    middleware: ["blog-category"]
  })

  // const route = useRoute()
  // console.log(route.params.slug)
  const { data: posts } = await useFetch('/api/blog/posts')
  
  const format_time = (date) => new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'})

  var tags = ref(['Audio', 'Content', 'Feature', 'Image', 'Inspiration', 'Lifestyle', 'Photo', 'Pick', 'Slide', 'Trending'])

  var blog_loading = ref(false)
  watch(
    blog_loading,
    v => {
      if (v)
        setTimeout(() => {
          blog_loading.value = false
        }, 700);
    }
  )
</script>

<template>
  <div class="">
    <!-- breadcrumb -->
    <div class="bg-blue-50 py-12">
      <BlogLayoutContainer class="text-center">
        <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold color-2 mb-2">Lifestyle</h3>
        <p class="text-sm flex space-x-2 justify-center">
          <a href="#" class="hover:text-rose-500">VietHung Sites</a> 
          <span>/</span> 
          <span>Lifestyle</span>
        </p>
      </BlogLayoutContainer>
    </div>

    <BlogLayoutContainer>
      <div class="flex flex-wrap -mx-4 mt-8">
        <div class="w-full lg:w-2/3 px-4">
          <section class="py-6">
            <div class="flex flex-wrap -mx-4">
              <!-- post item -->
              <div v-for="item in posts" :key="item.id" class="w-full sm:w-1/2 mb-8 px-4">
                <div class="flex flex-col h-full">
                  <div class="flex-grow min-h-0 relative">
                    <div class="w-full pb-[72%]"></div>
                    <div class="absolute w-full h-full top-0 left-0">
                      <RouterLink :to="'/blog/posts/' + item.slug" class="block w-full h-full rounded-t-lg overflow-hidden">
                        <img :src="item.image" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                      </RouterLink>
                      <a href="#" class="absolute top-4 left-4 sm:top-6 sm:left-6 blog-btn blog-btn-r py-1 px-3 text-sm">{{item.category}}</a>
                      <span class="absolute right-4 sm:right-6 bottom-0 translate-y-1/2 ">
                        <span class="icon w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300 bg-[length:auto_200%] text-white p-2.5 shadow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><circle cx="7.499" cy="9.5" r="1.5"></circle><path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"></path><path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"></path></svg>
                        </span>
                      </span>
                    </div>
      
                  </div>
                  <div class="flex-none flex flex-col space-y-4 rounded-b-lg border p-4 sm:p-6">
                    <div class="flex items-center space-x-4 text-sm">
                      <a href="#"><img src="~/assets/img/rose.png" alt="Rose" class="w-8 h-8 rounded-full object-cover"></a>
                      <a href="#" class="hover:text-rose-500 transition-all"><span>{{item.author}}</span></a>
                      <span class="w-1 h-1 bg-rose-500 rounded-full"></span>
                      <span>{{format_time(item.created_at)}}</span>
                    </div>
                    <h3 class="text-lg font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                      <RouterLink :to="'/blog/posts/' + item.slug" class="line-clamp-3">{{item.title}}</RouterLink>
                    </h3>
                    <p class="text-sm line-clamp-3">{{item.description}}</p>
                    <div class="flex justify-between mt-4 pt-4 border-t">
                      <a href="#" class="icon w-6 h-6 hover:text-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg>
                      </a>
                      <a href="#" class="icon w-6 h-6 hover:text-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- load more -->
            <div class="mt-6 py-6 flex items-center justify-center border-b">
              <button
                class="px-8 py-2.5 rounded-full border text-sm hover:border-rose-500 hover:text-rose-500 transition-colors flex items-center space-x-2"
                @click.prevent="blog_loading = true"
              >
                <span class="hidden icon w-4 h-4 animate-spin" :class="{'!block': blog_loading}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><circle cx="12" cy="20" r="2"></circle><circle cx="12" cy="4" r="2"></circle><circle cx="6.343" cy="17.657" r="2"></circle><circle cx="17.657" cy="6.343" r="2"></circle><circle cx="4" cy="12" r="2.001"></circle><circle cx="20" cy="12" r="2"></circle><circle cx="6.343" cy="6.344" r="2"></circle><circle cx="17.657" cy="17.658" r="2"></circle></svg>
                </span>
                <span>Load more</span>
              </button>
            </div>
          </section>
        </div>

        <div class="w-full lg:w-1/3 px-4">
          <BlogLayoutLeftSidebar />
        </div>
      </div>
    </BlogLayoutContainer>
  </div>
</template>

<style scoped>
  .border-gradient-left-top {
    @apply border-t;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left top, #c2c2c2, #fff);
  }
</style>