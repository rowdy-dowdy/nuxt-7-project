<script lang="ts" setup>
  import { useModalStore } from "~~/stores/blog/modal";

  const modalStore = useModalStore()

  let header_down = ref(false)
  let header_height = ref<number>(0)

  const header = ref<HTMLElement | null>(null)

  const handleScroll = () => {
    if (header.value) {
      let top = window.scrollY
      
      header_down.value = (top > header_height.value)

      if (header_down.value) {
        header.value.style.height = header_height.value + 'px'
      } else {
        header.value.style.removeProperty("height")
      }
    }
  }

  onMounted(() => {
    if (header.value) {
      header_height.value = header.value.getBoundingClientRect().height
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })
</script>

<template>
  <header ref="header">
    <div id="header" class="relative top-0 left-0 w-full bg-white z-50" :class="{'down': header_down}">
      <BlogLayoutContainer>
        <div id="containerHeader" class="flex items-center space-x-12 py-10">
          <div class="logo flex-none color-2">
            <h1 class="text-4xl font-semibold">
              <RouterLink to="/blog">Blog <span class="text-rose-500">.</span></RouterLink>
            </h1>
          </div>

          <ul class="menu hidden lg:flex">
            <li class="item">
              <NuxtLink to="/blog">
                Home
                <span class="menu-arrow icon -mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </span>
              </NuxtLink>
              <ul class="dropdown-menu">
                <li class="item"><a href="#">Magazine</a></li>
                <li class="item"><a href="#">Personal</a></li>
                <li class="item"><a href="#">Personal Alt</a></li>
                <li class="item"><a href="#">Classic</a></li>
                <li class="item"><a href="#">Minimal</a></li>
              </ul>
            </li>
            <li class="item"><RouterLink to="/blog/category/lifestyle">Lifestyle</RouterLink></li>
            <li class="item"><RouterLink to="/blog/category/culture">Culture</RouterLink></li>
            <li class="item">
              <a href="#" to="/blog/feature">
                Feature
                <span class="menu-arrow icon -mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </span>
              </a>
              <ul class="dropdown-menu">
                <li class="item">
                  <a href="#">
                    Magazine
                    <span class="menu-arrow icon -mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                    </span>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="item"><a href="#">Magazine</a></li>
                    <li class="item"><a href="#">Personal</a></li>
                  </ul>
                </li>
                <li class="item"><a href="#">Personal</a></li>
                <li class="item"><a href="#">Personal Alt</a></li>
                <li class="item"><a href="#">Classic</a></li>
                <li class="item"><a href="#">Minimal</a></li>
              </ul>
            </li>
            <li class="item"><a href="#" to="/blog/contact">Contact</a></li>
          </ul>

          <div class="flex-auto flex items-center space-x-8 justify-end">
            <div class="hidden xl:flex space-x-3">
              <a href="#" class="icon w-5 color-2 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
              </a>
              <a href="#" class="icon w-5 color-2 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
              </a>
              <a href="#" class="icon w-5 color-2 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
              </a>
              <a href="#" class="icon w-5 color-2 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5.077 9.457c0-.778.136-1.513.404-2.199a5.63 5.63 0 0 1 1.121-1.802 7.614 7.614 0 0 1 1.644-1.329 7.513 7.513 0 0 1 2.002-.844 8.57 8.57 0 0 1 2.185-.281c1.139 0 2.199.241 3.182.721a6.021 6.021 0 0 1 2.391 2.094c.614.915.919 1.95.919 3.104 0 .692-.068 1.369-.207 2.031a8.28 8.28 0 0 1-.646 1.913 6.605 6.605 0 0 1-1.082 1.617 4.723 4.723 0 0 1-1.568 1.114 4.962 4.962 0 0 1-2.045.417c-.489 0-.977-.115-1.459-.346-.482-.23-.828-.546-1.036-.951-.073.281-.173.687-.306 1.218-.128.53-.214.872-.252 1.027-.04.154-.114.411-.222.767a5.183 5.183 0 0 1-.281.769l-.344.674a7.98 7.98 0 0 1-.498.838c-.181.262-.405.575-.672.935l-.149.053-.099-.108c-.107-1.133-.162-1.811-.162-2.035 0-.663.079-1.407.235-2.233.153-.825.395-1.862.72-3.109.325-1.246.511-1.979.561-2.196-.229-.467-.345-1.077-.345-1.827 0-.599.187-1.16.562-1.688.376-.526.851-.789 1.427-.789.441 0 .783.146 1.028.439.246.292.366.66.366 1.109 0 .476-.158 1.165-.476 2.066-.318.902-.476 1.575-.476 2.022 0 .453.162.832.486 1.129a1.68 1.68 0 0 0 1.179.449c.396 0 .763-.09 1.104-.271a2.46 2.46 0 0 0 .849-.733 6.123 6.123 0 0 0 1.017-2.225c.096-.422.17-.823.216-1.2.049-.379.07-.737.07-1.077 0-1.247-.396-2.219-1.183-2.915-.791-.696-1.821-1.042-3.088-1.042-1.441 0-2.646.466-3.611 1.401-.966.932-1.452 2.117-1.452 3.554 0 .317.048.623.139.919.089.295.186.53.291.704.104.171.202.338.291.492.09.154.137.264.137.33 0 .202-.053.465-.16.79-.111.325-.242.487-.4.487-.015 0-.077-.011-.185-.034a2.21 2.21 0 0 1-.979-.605 3.17 3.17 0 0 1-.659-1.022 6.986 6.986 0 0 1-.352-1.169 4.884 4.884 0 0 1-.132-1.153z"></path></svg>
              </a>
              <a href="#" class="icon w-5 color-2 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
              </a>
              <a href="#" class="icon w-5 color-2 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
              </a>
            </div>

            <div class="flex space-x-3">
              <a href="#" class="button-icon" @click.prevent="modalStore.toggleSearch()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
              </a>
              <a href="#" class="button-icon" @click.prevent="modalStore.toggleMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </BlogLayoutContainer>
    </div>
  </header>
</template>

<style scoped>
  #header.down {
    @apply shadow !fixed;
  }
  #header.down #containerHeader {
    @apply !py-4 transition-all duration-300;
  }

  .menu {
    @apply flex-auto items-center;
  }

  .menu .item {
    @apply relative;
  }
  .menu .item a {
    @apply flex items-center space-x-2 font-light text-sm px-5 py-2 rounded-full;
  }
  .menu .item a.router-link-exact-active {
    @apply bg-gradient-to-r from-rose-500 to-rose-400 text-white;
  }

  .menu .item .dropdown-menu {
    color: var(--color-1);
    animation: growOut .3s ease-in-out forwards;
    transform-origin: top center;
    box-shadow: 0 8px 20px rgba(32,54,86,.2);
    min-width: 170px;
    @apply hidden absolute top-full left-0 rounded bg-white font-light w-max;
  }
  .menu .item:hover > .dropdown-menu {
    @apply block;
  }

  .menu .item .menu-arrow {
    @apply w-5 h-5 ml-auto;
  }

  .dropdown-menu::after {
    content: "";
    display: block;
    height: 0;
    width: 0 !important;
    position: absolute;
    top: -10px;
    left: 40px;
    border-left: 8px solid transparent;
      border-left-color: transparent;
      border-left-style: solid;
      border-left-width: 8px;
    border-right: 8px solid transparent;
      border-right-color: transparent;
      border-right-style: solid;
      border-right-width: 8px;
    border-bottom: 10px solid #fff;
      border-bottom-color: rgb(255, 255, 255);
      border-bottom-style: solid;
      border-bottom-width: 10px;
  }

  .dropdown-menu .item a {
    @apply px-6 py-3 transition-all duration-300 hover:pl-8 hover:pr-4 hover:text-rose-500 border-b border-gray-100  rounded-none;
  }

  .menu .item .dropdown-menu .dropdown-menu {
    transform-origin: center left;
    @apply left-full top-0;
  }

  .menu .item .dropdown-menu .menu-arrow {
    @apply -rotate-90;
  }

  @keyframes growOut {
    0% {
      transform:scale(0)
    }
    80% {
      transform:scale(1.1)
    }
    100% {
      transform:scale(1)
    }
  }

  .button-icon {
    @apply block w-10 h-10 rounded-full bg-gradient-to-b from-rose-300 via-rose-500 to-rose-300 bg-[length:auto_200%] hover:bg-[bottom_center] text-white p-2.5 shadow transition-all duration-300;
  }

  .button-icon svg {
    @apply w-full h-full !fill-current;
  }
</style>