<script setup lang="ts">
  import Swiper, { Navigation, Parallax } from 'swiper'
  import 'swiper/css'
  import 'swiper/css/parallax'

  definePageMeta({
    middleware: ["blog-post"]
  })

  // const route = useRoute()
  // console.log(route.params.slug)=
  const { data: post } = await useFetch(`/api/blog/posts/slug`)
  
  const format_time = (date) => new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'})

  var tags = ref(['Audio', 'Content', 'Feature', 'Image', 'Inspiration', 'Lifestyle', 'Photo', 'Pick', 'Slide', 'Trending'])

  const swiper3_html = ref<HTMLElement | null>(null)
  var swiper3: Swiper | null = null

  onMounted(async () => {
    if (swiper3_html.value)
      swiper3 = new Swiper(swiper3_html.value, {
        loop: true,
        modules: [Navigation, Parallax],
        parallax: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  })

  onUnmounted(() => {
    if (swiper3) {
      swiper3.destroy(false)
    }
  })

</script>

<template>
  <div class="">
    <!-- breadcrumb -->
    <div class="py-6 bg-blue-50">
      <BlogLayoutContainer class="text-center">
        <p class="text-sm flex space-x-2">
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
            <h1 class="text-xl sm:text-3xl md:text-4xl font-semibold color-2">{{post.title}}</h1>
            <div class="flex items-center space-x-4 text-sm my-4">
              <a href="#"><img src="~/assets/img/rose.png" alt="Rose" class="w-8 h-8 rounded-full object-cover"></a>
              <a href="#" class="hover:text-rose-500 transition-all"><span>{{post.author}}</span></a>
              <span class="w-1 h-1 bg-rose-500 rounded-full"></span>
              <span>{{format_time(post.created_at)}}</span>
              <span class="w-1 h-1 bg-rose-500 rounded-full"></span>
              <span class="flex items-center space-x-1">
                <span class="icon w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path></svg>
                </span>
                <span>({{post.comments.length}})</span>
              </span>
            </div>

            <!-- image post galery -->
            <div ref="swiper3_html" class="swiper slide3 relative rounded-lg overflow-hidden">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div v-for="item, index in post.images" :key="index" class="swiper-slide overflow-hidden">
                  <div class="relative w-full" style="padding-bottom: 70%;">
                    <span class="absolute block w-full h-full top-0 left-0">
                      <img :src="item" alt="" data-swiper-parallax="50%"
                        class="block w-full h-full object-cover">
                    </span>
                  </div>
                </div>
              </div>

              <!-- If we need navigation buttons -->
              <div class="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <span class="icon w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-200 hover:bg-white hover:text-rose-500 p-1 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                </span>
              </div>
              <div class="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10">
                <span class="icon w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-200 hover:bg-white hover:text-rose-500 p-1 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                </span>
              </div>
            </div>

            <!-- content -->
            <div class="content clear-none mt-4 text-[0.875rem] sm:text-base" v-html="post.body"></div>
          </section>

          <section class="py-6 border-t">
            <p class="text-sm">Share this: </p>
            <div class="flex items-center space-x-3 mt-4">
              <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
              </a>
              <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
              </a>
              <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
              </a>
              <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"></path></svg>
              </a>
              <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
              </a>
              <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path></svg>
              </a>
            </div>
          </section>

          <section class="py-6">
            <div class="rounded p-6 bg-blue-50 flex justify-center flex-wrap sm:flex-nowrap space-y-6 sm:space-x-6 sm:space-y-0">
              <a href="#" class="flex-none w-24 h-24 rounded-full overflow-hidden">
                <img src="~/assets/img/rose.png" alt="" class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
              </a>
              <div class="flex-grow min-w-0 flex flex-col items-center text-center sm:items-start sm:text-left">
                <a href="#" class="text-lg sm:text-xl color-2 hover:text-rose-500 font-semibold">Viet Hung</a>
                <p class="py-2 text-sm">Hello, I’m a content writer who is fascinated by content fashion, celebrity and lifestyle. She helps clients bring the right content to the right people.</p>
                <div class="flex items-center space-x-3 mt-2">
                  <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                  </a>
                  <a href="#" class="icon w-5 h-5 color-2 hover:text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section class="py-6">
            <h2 class="text-2xl font-semibold color-2">
              Leave a Reply
              <svg class="mt-2" width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE4F70"></stop><stop offset="100%" stop-color="#FFA387"></stop></linearGradient> </defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
              </svg>
            </h2>

            <form action="" class="block rounded-lg border p-6 mt-6">
              <p class="text-sm">Your email address will not be published. Required fields are marked *</p>
              <div class="mt-6">
                <label for="comment" class="block text-sm font-medium mb-2">Comment *</label>
                <textarea name="comment" id="comment" rows="5" class="w-full border rounded-lg focus-within:border-rose-500 px-4 py-2"></textarea>
              </div>
              <div class="mt-6">
                <label for="name" class="block text-sm font-medium mb-2">Name *</label>
                <input type="text" id="name" name="name" class="w-full border rounded-lg focus-within:border-rose-500 px-4 py-2">
              </div>
              <div class="mt-6">
                <label for="email" class="block text-sm font-medium mb-2">Email *</label>
                <input type="text" id="email" name="email" class="w-full border rounded-lg focus-within:border-rose-500 px-4 py-2">
              </div>
              <div class="mt-6">
                <input type="checkbox" id="save" name="save" class="mr-2">
                <label for="save" class="text-sm">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>

              <button class="blog-btn blog-btn-r mt-6 px-6 py-2.5 text-sm">Post Comment</button>
            </form>
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

  :deep(.content) {
    @apply text-[#777];
  }
  :deep(.content *) {
    @apply tracking-wide;
  }
  :deep(.content p) {
    @apply mb-3 clear-none leading-7;
  }

  :deep(.content img + figcaption) {
    @apply text-center text-sm pt-1 pb-3;
  }

  :deep(.content h3) {
    color: var(--color-2);
    @apply text-xl sm:text-2xl md:text-3xl font-semibold my-5;
  }

  :deep(.content ul) {
    list-style-type: circle;
    @apply px-8 mb-4;
  }

  :deep(.content a) {
    @apply text-rose-500;
  }
  :deep(.content a:hover) {
    color: var(--color-2);
  }
</style>