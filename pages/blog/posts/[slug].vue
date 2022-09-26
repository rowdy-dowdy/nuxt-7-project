<script setup lang="ts">
  import Swiper, { Navigation } from 'swiper'
  import 'swiper/css'

  definePageMeta({
    middleware: ["blog-post"]
  })

  // const route = useRoute()
  // console.log(route.params.slug)
  const { data: post } = await useFetch('/api/blog/posts')
  
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

  var swiper2: Swiper | null = null

  onMounted(() => {
    swiper2 = new Swiper('.slide2', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      if (swiper2)
        swiper2.destroy()
    }
  })

</script>

<template>
  <div class="">
    <!-- breadcrumb -->
    <div class="bg-blue-50 py-12">
      <BlogLayoutContainer class="text-center">
        <h3 class="text-3xl font-semibold color-2 mb-2">Lifestyle</h3>
        <p class="text-sm flex space-x-2 justify-center">
          <a href="#" class="hover:text-rose-500">VietHung Sites</a> 
          <span>/</span> 
          <span>Lifestyle</span>
        </p>
      </BlogLayoutContainer>
    </div>

    <BlogLayoutContainer>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-2/3 px-4">
          <section class="py-6">
            <div class="flex flex-wrap -mx-4">
              <!-- post item -->
              <div v-for="item in data_post" :key="item.id" class="w-full sm:w-1/2 mb-8 px-4">
                <div class="flex flex-col h-full">
                  <div class="flex-grow min-h-0 relative">
                    <div class="w-full pb-[72%]"></div>
                    <div class="absolute w-full h-full top-0 left-0">
                      <a href="" class="block w-full h-full rounded-t-lg overflow-hidden">
                        <img :src="item.image" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                      </a>
                      <a href="#" class="absolute top-4 left-4 sm:top-6 sm:left-6 btn btn-r py-1 px-3 text-sm">{{item.category}}</a>
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
                      <a href="#" class="line-clamp-3">{{item.title}}</a>
                    </h3>
                    <p class="text-sm line-clamp-3">{{item.description}}</p>
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
          <section class="py-6">
            <div class="rounded-lg border p-6">
              <div class="relative">
                <img src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/09/map-bg.png" alt="" class="absolute w-full h-full top-0 left-0 object-cover">
                <h1 class="text-4xl font-semibold color-2 text-center">Blog <span class="text-rose-500" data-v-abe7d912="">.</span></h1>
                <p class="max-w-xs mx-auto my-8 text-center text-sm">
                  Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.
                </p>
                <div class="flex space-x-3 justify-center color-2">
                  <a href="#" class="icon w-5 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5.077 9.457c0-.778.136-1.513.404-2.199a5.63 5.63 0 0 1 1.121-1.802 7.614 7.614 0 0 1 1.644-1.329 7.513 7.513 0 0 1 2.002-.844 8.57 8.57 0 0 1 2.185-.281c1.139 0 2.199.241 3.182.721a6.021 6.021 0 0 1 2.391 2.094c.614.915.919 1.95.919 3.104 0 .692-.068 1.369-.207 2.031a8.28 8.28 0 0 1-.646 1.913 6.605 6.605 0 0 1-1.082 1.617 4.723 4.723 0 0 1-1.568 1.114 4.962 4.962 0 0 1-2.045.417c-.489 0-.977-.115-1.459-.346-.482-.23-.828-.546-1.036-.951-.073.281-.173.687-.306 1.218-.128.53-.214.872-.252 1.027-.04.154-.114.411-.222.767a5.183 5.183 0 0 1-.281.769l-.344.674a7.98 7.98 0 0 1-.498.838c-.181.262-.405.575-.672.935l-.149.053-.099-.108c-.107-1.133-.162-1.811-.162-2.035 0-.663.079-1.407.235-2.233.153-.825.395-1.862.72-3.109.325-1.246.511-1.979.561-2.196-.229-.467-.345-1.077-.345-1.827 0-.599.187-1.16.562-1.688.376-.526.851-.789 1.427-.789.441 0 .783.146 1.028.439.246.292.366.66.366 1.109 0 .476-.158 1.165-.476 2.066-.318.902-.476 1.575-.476 2.022 0 .453.162.832.486 1.129a1.68 1.68 0 0 0 1.179.449c.396 0 .763-.09 1.104-.271a2.46 2.46 0 0 0 .849-.733 6.123 6.123 0 0 0 1.017-2.225c.096-.422.17-.823.216-1.2.049-.379.07-.737.07-1.077 0-1.247-.396-2.219-1.183-2.915-.791-.696-1.821-1.042-3.088-1.042-1.441 0-2.646.466-3.611 1.401-.966.932-1.452 2.117-1.452 3.554 0 .317.048.623.139.919.089.295.186.53.291.704.104.171.202.338.291.492.09.154.137.264.137.33 0 .202-.053.465-.16.79-.111.325-.242.487-.4.487-.015 0-.077-.011-.185-.034a2.21 2.21 0 0 1-.979-.605 3.17 3.17 0 0 1-.659-1.022 6.986 6.986 0 0 1-.352-1.169 4.884 4.884 0 0 1-.132-1.153z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <!-- Popular Posts -->
          <section class="py-6">
            <div class="rounded-lg border p-6">
              <h2 class="text-xl font-semibold color-2 text-center">
                Popular Posts
                <svg class="mt-2 mx-auto" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                </svg>
              </h2>

              <div class="flex flex-col space-y-4 mt-12">
                <div v-for="item, index in data_post.slice(0, 3)" :key="item.id" class="flex space-x-4 pb-4 border-b last-of-type:border-0 border-gradient">
                  <div class="flex-none w-14 h-14 relative">
                    <a href="#" class="block w-full h-full sm:w-16 sm:h-16 rounded-full overflow-hidden">
                      <img :src="item.image" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
                    </a>
                    <span class="absolute left-0 -top-2">
                      <span class="icon w-7 h-7 border-2 border-white rounded-full bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300 bg-[length:auto_200%] text-white p-0.5 text-sm font-semibold grid place-items-center">{{index+1}}</span>
                    </span>
                  </div>
                  <div class="flex-grow min-w-0">
                    <h3 class="font-semibold color-2 transition-all duration-300 hover:!text-rose-500">
                      <a href="#">{{item.title}}</a>
                    </h3>
                    <p class="mt-2 text-sm">{{format_time(item.created_at)}}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Explore Topics -->
          <section class="py-6">
            <div class="rounded-lg border p-6">
              <h2 class="text-xl font-semibold color-2 text-center">
                Explore Topics
                <svg class="mt-2 mx-auto" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                </svg>
              </h2>

              <div class="flex flex-col space-y-4 mt-12 font-medium">
                <a href="#" class="flex space-x-4 border-gradient-right-top pt-4">
                  <span class="icon text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                  </span>
                  <h4 class="color-2 hover:text-rose-500">Celebration</h4>
                  <span class="!ml-auto text-sm">(2)</span>
                </a>
                <a href="#" class="flex space-x-4 border-gradient-right-top pt-4">
                  <span class="icon text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                  </span>
                  <h4 class="color-2 hover:text-rose-500">Culture</h4>
                  <span class="!ml-auto text-sm">(2)</span>
                </a>
                <a href="#" class="flex space-x-4 border-gradient-right-top pt-4">
                  <span class="icon text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                  </span>
                  <h4 class="color-2 hover:text-rose-500">Fashion</h4>
                  <span class="!ml-auto text-sm">(1)</span>
                </a>
                <a href="#" class="flex space-x-4 border-gradient-right-top pt-4">
                  <span class="icon text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                  </span>
                  <h4 class="color-2 hover:text-rose-500">Inspiration</h4>
                  <span class="!ml-auto text-sm">(2)</span>
                </a>
                <a href="#" class="flex space-x-4 border-gradient-right-top pt-4">
                  <span class="icon text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                  </span>
                  <h4 class="color-2 hover:text-rose-500">Lifestyle</h4>
                  <span class="!ml-auto text-sm">(6)</span>
                </a>
                <a href="#" class="flex space-x-4 border-gradient-right-top pt-4">
                  <span class="icon text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                  </span>
                  <h4 class="color-2 hover:text-rose-500">Politic</h4>
                  <span class="!ml-auto text-sm">(2)</span>
                </a>
                <a href="#" class="flex space-x-4 border-gradient-right-top pt-4">
                  <span class="icon text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                  </span>
                  <h4 class="color-2 hover:text-rose-500">Trending</h4>
                  <span class="!ml-auto text-sm">(2)</span>
                </a>
              </div>
            </div>
          </section>

          <!-- Newsletter -->
          <section class="py-6">
            <div class="rounded-lg border p-6">
              <h2 class="text-xl font-semibold color-2 text-center">
                Newsletter
                <svg class="mt-2 mx-auto" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                </svg>
              </h2>

              <p class="mt-8 text-center color-2 font-normal">Join 70,000 subscribers!</p>
              <input type="text" class="mt-4 px-4 w-full py-2 text-center border bg-white focus:border-rose-500 rounded-full text-[#444]" placeholder="Email address...">
              <button class="btn btn-r mt-2 block w-full px-4 py-2.5">Sign Up</button>
              <p class="mt-6 text-sm text-center">
                By signing up, you agree to our <span class="text-rose-500">Privacy Policy</span>
              </p>
            </div>
          </section>

          <!-- Celebration -->
          <section class="py-6">
            <div class="rounded-lg border p-6">
              <h2 class="text-xl font-semibold color-2 text-center">
                Celebration
                <svg class="mt-2 mx-auto" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                </svg>
              </h2>

              <div class="mt-8">
                <div class="swiper slide2">
                  <!-- Additional required wrapper -->
                  <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div v-for="item in data_post.slice()" :key="item.id" class="swiper-slide">
                      <div class="relative w-full" style="padding-bottom: 70%;">
                        <a href="#" class="absolute block w-full h-full top-0 left-0 rounded-lg overflow-hidden">
                          <img :src="item.image" alt=""
                              class="block w-full h-full object-cover transition-all duration-500 hover:scale-110">
                        </a>
                        <div class="absolute top-4 left-4">
                          <a href="#" class="btn btn-r py-1 px-3 text-sm">{{item.category}}</a>
                        </div>
                      </div>
                      <h3 class="mt-4 text-lg sm:text-xl font-semibold color-2 hover:text-rose-400">
                        <a href="#">{{item.title}}</a>
                      </h3>
                      <div class="mt-2 flex space-x-4 items-center text-sm">
                        <a href="#" class="hover:text-rose-400">{{item.author}}</a>
                        <span class="w-1 h-1 rounded-full bg-current"></span>
                        <span>{{format_time(item.created_at)}}</span>
                      </div>
                    </div>
                  </div>

                  <!-- If we need navigation buttons -->
                  <div class="mt-6 flex justify-center space-x-3">
                    <div class="swiper-button-prev">
                      <span class="icon w-8 h-8 rounded-full border border-gray-300 hover:border-rose-500 hover:text-rose-500 p-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                      </span>
                    </div>
                    <div class="swiper-button-next">
                      <span class="icon w-8 h-8 rounded-full border border-gray-300 hover:border-rose-500 hover:text-rose-500 p-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Tag Clouds -->
          <section class="py-6">
            <div class="rounded-lg border p-6">
              <h2 class="text-xl font-semibold color-2 text-center">
                Tag Clouds
                <svg class="mt-2 mx-auto" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                </svg>
              </h2>

              <div class="mt-6 flex flex-wrap text-sm">
                <a v-for="tag in tags" href="#" class="m-2 ml-0 px-3 py-1 border rounded-full hover:text-rose-500 hover:border-rose-500">#{{tag}}</a>
              </div>
            </div>
          </section>
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