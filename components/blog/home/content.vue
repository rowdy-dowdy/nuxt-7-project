<script lang="ts" setup>
  import Swiper, { Navigation } from 'swiper'
  import 'swiper/css'

  const format_time = (date: number) => new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'})

  const { data: posts } = await useFetch('/api/blog/posts')

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

  const slide1_html = ref<HTMLElement | null>(null)
  var swiper: Swiper | null = null

  onMounted(() => {
    if (slide1_html.value)
      swiper = new Swiper(slide1_html.value, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
          640 : {
            slidesPerView: 2,
            spaceBetween: 30
          },
        }
      });
  })
</script>

<template>
  <BlogLayoutContainer class="mt-4">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-2/3 px-4">
        <!-- Editor's Pick -->
        <section class="py-6">
          <h2 class="text-2xl font-semibold color-2">
            Editor's Pick
            <svg class="mt-2" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
            </svg>
          </h2>
          <div class="mt-6 rounded-lg border p-6">
            <div class="flex flex-wrap sm:flex-nowrap items-stretch sm:space-x-6">
              <div class="w-full sm:w-1/2">
                <div class="flex flex-col h-full">
                  <div class="flex-grow min-h-0 relative">
                    <div class="w-full pb-[72%]"></div>
                    <div class="absolute w-full h-full top-0 left-0">
                      <RouterLink to="/blog/posts/1" class="block w-full h-full rounded-lg overflow-hidden">
                        <img src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/jason-briscoe-105344-unsplash-325x233.jpg" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                      </RouterLink>
                      <a href="#" class="absolute top-4 left-4 sm:top-6 sm:left-6 blog-btn blog-btn-r py-1 px-3 text-sm">Lifestyle</a>
                      <span class="absolute right-4 sm:right-6 bottom-0 transform translate-y-1/2 ">
                        <span class="icon w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300 bg-[length:auto_200%] text-white p-2.5 shadow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><circle cx="7.499" cy="9.5" r="1.5"></circle><path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"></path><path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"></path></svg>
                        </span>
                      </span>
                    </div>
      
                  </div>
                  <div class="mt-4 flex-none flex flex-col space-y-4">
                    <div class="flex items-center space-x-4 text-sm">
                      <a href="#"><img src="~/assets/img/rose.png" alt="Rose" class="w-8 h-8 rounded-full object-cover"></a>
                      <a href="#" class="hover:text-rose-500 transition-all"><span>Viet Hung</span></a>
                      <span class="w-1 h-1 bg-rose-500 rounded-full"></span>
                      <span>August 23, 2022</span>
                    </div>
                    <h3 class="text-lg font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                      <RouterLink to="/blog/posts/1" class="line-clamp-3">Easy Ways To Learn Everything About Construction</RouterLink>
                    </h3>
                    <p class="text-sm line-clamp-3">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…</p>
                  </div>
                </div>
              </div>
              <div class="w-full sm:w-1/2 mt-10 sm:mt-0">
                <div v-if="posts" class="flex flex-col space-y-5">
                  <div v-for="item in posts.slice(0,4)" :key="item.id" class="flex space-x-4 pb-5 border-b last-of-type:pb-0 last-of-type:!border-0 border-gradient-left-bot">
                    <RouterLink :to="`/blog/posts/` + item.slug" class="flex-none w-28 h-20 rounded-lg overflow-hidden">
                      <img :src="item.image" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                    </RouterLink>
                    <div class="flex-grow min-w-0">
                      <h3 class="font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                        <RouterLink :to="`/blog/posts/` + item.slug" class="line-clamp-3">{{item.title}}</RouterLink>
                      </h3>
                      <p class="mt-2 text-sm">{{format_time(item.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- banner -->
        <section class="py-6">
          <img src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/ad-750.png" alt="" class="w-full rounded-lg">
        </section>

        <!-- Trending -->
        <section class="py-6">
          <h2 class="text-2xl font-semibold color-2">
            Trending
            <svg class="mt-2" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
            </svg>
          </h2>
          <div class="mt-6 rounded-lg border p-6">
            <div class="flex flex-wrap sm:flex-nowrap items-stretch sm:space-x-6">
              <div class="w-full sm:w-1/2">
                <div class="flex flex-col h-full">
                  <div class="flex-grow min-h-0 relative">
                    <div class="w-full pb-[72%]"></div>
                    <div class="absolute w-full h-full top-0 left-0">
                      <RouterLink to="/blog/posts/1" class="block w-full h-full rounded-lg overflow-hidden">
                        <img src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/drop-the-label-movement-608463-unsplash-325x233.jpg" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                      </RouterLink>
                      <a href="#" class="absolute top-6 left-6 blog-btn blog-btn-r py-1 px-3 text-sm">Fashion</a>
                      <span class="absolute right-6 bottom-0 transform translate-y-1/2 ">
                        <span class="icon w-12 h-12 rounded-full bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300 bg-[length:auto_200%] text-white p-2.5 shadow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"></path></svg>
                        </span>
                      </span>
                    </div>
      
                  </div>
                  <div class="mt-4 flex-none flex flex-col space-y-4">
                    <div class="flex items-center space-x-4 text-sm">
                      <a href="#"><img src="~/assets/img/rose.png" alt="Rose" class="w-8 h-8 rounded-full object-cover"></a>
                      <a href="#" class="hover:text-rose-500 transition-all"><span>Viet Hung</span></a>
                      <span class="w-1 h-1 bg-rose-500 rounded-full"></span>
                      <span>August 23, 2022</span>
                    </div>
                    <h3 class="text-lg font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                      <RouterLink to="/blog/posts/1" class="line-clamp-3">Facts About Business That Will Help You Success</RouterLink>
                    </h3>
                    <p class="text-sm line-clamp-3">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…</p>
                  </div>
                </div>
              </div>
              <div class="w-full sm:w-1/2 mt-10 sm:mt-0">
                <div class="flex flex-col h-full">
                  <div class="flex-grow min-h-0 relative">
                    <div class="w-full pb-[72%]"></div>
                    <div class="absolute w-full h-full top-0 left-0">
                      <RouterLink to="/blog/posts/1" class="block w-full h-full rounded-lg overflow-hidden">
                        <img src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/grant-ritchie-1154815-unsplash-325x233.jpg" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                      </RouterLink>
                      <a href="#" class="absolute top-6 left-6 blog-btn blog-btn-r py-1 px-3 text-sm">Inspiration</a>
                      <span class="absolute right-6 bottom-0 transform translate-y-1/2 ">
                        <span class="icon w-12 h-12 rounded-full bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300 bg-[length:auto_200%] text-white p-2.5 shadow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29-2.204-.051-4.251.736-5.816 2.256A7.933 7.933 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306 5.977 5.977 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z"></path><path d="M7 12h2v8H7zm8 0h2v8h-2z"></path></svg>
                        </span>
                      </span>
                    </div>
      
                  </div>
                  <div class="mt-4 flex-none flex flex-col space-y-4">
                    <div class="flex items-center space-x-4 text-sm">
                      <a href="#"><img src="~/assets/img/rose.png" alt="Rose" class="w-8 h-8 rounded-full object-cover"></a>
                      <a href="#" class="hover:text-rose-500 transition-all"><span>Viet Hung</span></a>
                      <span class="w-1 h-1 bg-rose-500 rounded-full"></span>
                      <span>August 23, 2022</span>
                    </div>
                    <h3 class="text-lg font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                      <RouterLink to="/blog/posts/1" class="line-clamp-3">5 Easy Ways You Can Turn Future Into Success</RouterLink>
                    </h3>
                    <p class="text-sm line-clamp-3">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap items-stretch -mx-5">
              <template v-if="posts">
                <div v-for="item in posts.slice(0,4)" :key="item.id" class="w-full sm:w-1/2 px-5 mt-5">
                  <div class="flex space-x-4 pt-5 border-t last-of-type:pb-0 border-gradient-left-top">
                    <RouterLink :to="`/blog/posts/` + item.slug" class="flex-none w-28 h-20 rounded-lg overflow-hidden">
                      <img :src="item.image" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                    </RouterLink>
                    <div class="flex-grow min-w-0">
                      <h3 class="font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                        <RouterLink :to="`/blog/posts/` + item.slug" class="line-clamp-3">{{item.title}}</RouterLink>
                      </h3>
                      <p class="mt-2 text-sm">{{format_time(item.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </section>

        <!-- Inspiration -->
        <section class="py-6">
          <h2 class="text-2xl font-semibold color-2">
            Inspiration
            <svg class="mt-2" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
            </svg>
          </h2>
          <div class="mt-6">
            <!-- Slider main container -->
            <div ref="slide1_html" class="swiper slide1">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <template v-if="posts">
                  <div v-for="item in posts.slice(0,4)" :key="item.id" class="swiper-slide">
                    <div class="relative w-full h-full rounded-lg overflow-hidden group">
                      <div class="w-full" style="padding-bottom: 70%;"></div>
                      <RouterLink :to="`/blog/posts/` + item.slug" class="absolute block w-full h-full top-0 left-0">
                        <img :src="item.image" alt=""
                          class="block w-full h-full object-cover transition-all duration-500 group-hover:scale-110">
                        <div class="absolute w-full h-full top-0 left-0 bg-[#203656]/60"></div>
                      </RouterLink>
                      <div class="absolute bottom-6 left-6 right-6 flex flex-col justify-end items-start space-y-4 text-white">
                        <a href="#" class="blog-btn blog-btn-r py-1 px-3 text-sm">{{item.category}}</a>
                        <h3 class="text-lg sm:text-xl font-semibold">
                          <RouterLink :to="`/blog/posts/` + item.slug">{{item.title}}</RouterLink>
                        </h3>
                        <div class="flex space-x-4 items-center text-sm text-gray-300">
                          <a href="#" class="hover:text-rose-400">{{item.author}}</a>
                          <span class="w-1 h-1 rounded-full bg-current"></span>
                          <span>{{format_time(item.created_at)}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </section>

        <!-- Latest Posts -->
        <section class="py-6">
          <h2 class="text-2xl font-semibold color-2">
            Latest Posts
            <svg class="mt-2" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
            </svg>
          </h2>
          <div class="mt-6 rounded-lg border p-6">
            <div class="flex flex-col space-y-6">
              <!-- item -->
              <template v-if="posts">
                <div v-for="item in posts.slice(0,5)" :key="item.id" class="flex flex-wrap sm:flex-nowrap space-x-4 pb-6 border-gradient-left-bot">
                  <div class="flex-none w-full sm:w-1/3 relative">
                    <div class="w-full pb-[72%]"></div>
                    <div class="absolute w-full h-full top-0 left-0">
                      <RouterLink :to="`/blog/posts/` + item.slug" class="block w-full h-full rounded-lg overflow-hidden">
                        <img :src="item.image" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                      </RouterLink>
                      <span class="absolute top-4 left-4">
                        <span class="icon w-8 h-8 p-2 rounded-full bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300 bg-[length:auto_200%] text-white shadow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"></path></svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="flex-grow min-w-0 flex flex-col mt-6 sm:mt-0">
                    <div class="flex flex-col space-y-4">
                      <div class="flex items-center space-x-4 text-sm">
                        <a href="#"><img src="~/assets/img/rose.png" alt="Rose" class="w-8 h-8 rounded-full object-cover"></a>
                        <a href="#" class="hover:text-rose-500 transition-all">{{item.author}}</a>
                        <span class="w-1 h-1 bg-rose-500 rounded-full"></span>
                        <span>{{format_time(item.created_at)}}</span>
                      </div>
                      <h3 class="text-lg sm:text-xl font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                        <RouterLink :to="`/blog/posts/` + item.slug" class="line-clamp-3">{{item.title}}</RouterLink>
                      </h3>
                      <p class="text-sm line-clamp-2">{{item.description}}</p>
                    </div>
                    <div class="flex justify-between mt-auto py-2">
                      <a href="#" class="icon w-6 h-6 hover:text-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg>
                      </a>
                      <a href="#" class="icon w-6 h-6 hover:text-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <!-- load more -->
            <div class="mt-6 flex items-center justify-center">
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
          </div>
        </section>
      </div>

      <div class="w-full lg:w-1/3 px-4">
        <BlogLayoutLeftSidebar />
      </div>
    </div>
  </BlogLayoutContainer>
</template>

<style scoped>
  .border-gradient-left-bot {
    @apply border-b;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left bottom, #c2c2c2, #fff);
  }
  .border-gradient-left-top {
    @apply border-t;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left top, #c2c2c2, #fff);
  }
  .border-gradient-right-top {
    @apply border-t;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right top, #c2c2c2, #fff);
  }
</style>