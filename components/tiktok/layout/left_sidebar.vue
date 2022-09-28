<script lang="ts" setup>
  import Scrollbar from 'smooth-scrollbar';

  const accounts = ref([
    {
      id: 1,
      name: 'Theanh28 Entertainment',
      username: 'theanh28entertainment',
      image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664528400&x-signature=cwX9Z5Ql2V6I4XjDTRSQPSHCaMM%3D',
      followes: '7.4M',
      likes: '502.2M',
      confirmed: true
    },
    {
      id: 2,
      name: 'Tiin.vn',
      username: 'tiin.vn',
      image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1664528400&x-signature=dH6VNe5Eaq9t%2FIJt7kzaKOPGn9k%3D',
      followes: '7.4M',
      likes: '502.2M',
      confirmed: true
    },
    {
      id: 3,
      name: '🔥Đạt Villa🔥',
      username: 'datvilla94',
      image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1664528400&x-signature=f5ZIHC4sjJdsSbpX75qdokguruI%3D',
      followes: '7.4M',
      likes: '502.2M',
      confirmed: true
    },
    {
      id: 4,
      name: 'AnNhiên ❤️ BốiBối',
      username: 'annhien_boiboi',
      image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1664528400&x-signature=S0x2LvjMEyAVC1eheJOwJ4MiDFc%3D',
      followes: '7.4M',
      likes: '502.2M',
      confirmed: true
    },
    {
      id: 5,
      name: 'Mạnh Tiến Khôi 🐯',
      username: 'manhtienkhoi_',
      image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6f742a138c51cf4c6ac049ea6f6ff6b4~c5_100x100.jpeg?x-expires=1664528400&x-signature=q5iO9o0NgXa2dT%2F6VsR6QjMawqY%3D',
      followes: '7.4M',
      likes: '502.2M',
      confirmed: true
    }
  ])

  onMounted(() => {
    Scrollbar.init(document.querySelector('#left-sidebar'), {});
  })

  onUnmounted(() => {
    Scrollbar.destroy(document.querySelector('#left-sidebar'));
  })
</script>

<template>
  <div class="relative w-96">
    <div class="fixed w-[inherit] top-[63px] bottom-0">
      <!-- content -->
      <div id="left-sidebar" class="relative h-full overflow-auto py-4 -ml-4 pr-4">
        <!-- main-nav -->
        <div class="main-nav flex flex-col font-semibold text-lg">
          <RouterLink to="/tiktok" class="flex space-x-2 items-center hover:bg-gray-100 rounded px-4 py-2.5">
            <span class="icon w-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
            </span>
            <span>For you</span>
          </RouterLink>
          <a href="#" class="flex space-x-2 items-center hover:bg-gray-100 rounded px-4 py-2.5">
            <span class="icon w-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"></path><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"></path><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path></svg>
            </span>
            <span>Following</span>
          </a>
          <a href="#" class="flex space-x-2 items-center hover:bg-gray-100 rounded px-4 py-2.5">
            <span class="icon w-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zm-1.998 10H4V7h12l.001 4.999L16 12l.001.001.001 4.999z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7z"></path></svg>
            </span>
            <span>LIVE</span>
          </a>
        </div>

        <!-- user -->
        <div class="py-6 border-y ml-4 mt-2">
          <p class="text-gray-500">Log in to follow creators, like videos, and view comments.</p>
          <button class="block w-full mt-4 border border-rose-500 rounded text-rose-500 hover:bg-rose-200 py-2.5 px-4 font-medium">Login</button>
        </div>

        <!-- Suggested accounts -->
        <div class="py-4">
          <p class="text-sm text-gray-500 font-medium pl-4">Suggested accounts</p>
          <div class="flex flex-col mt-2">
            <a v-for="item in accounts" :key="item.id" href="#" class="flex items-center space-x-2 p-2 ml-2 rounded hover:bg-gray-100">
              <img :src="item.image" :alt="item.name" class="flex-none w-8 h-8 rounded-full" loading="lazy">
              <div class="flex-grow min-w-0">
                <h3 class="font-semibold truncate">{{item.username}}</h3>
                <p class="text-sm text-gray-500">{{item.name}}</p>
              </div>
            </a>

            <a href="#" class="text-sm text-rose-500 pl-4">See less</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #left-sidebar .main-nav a svg:nth-child(1) { @apply inline; }
  #left-sidebar .main-nav a svg:nth-child(2) { @apply hidden; }
  #left-sidebar .main-nav a.router-link-exact-active {
    @apply text-rose-500;
  }
  #left-sidebar .main-nav a.router-link-exact-active svg:nth-child(1) { @apply hidden; }
  #left-sidebar .main-nav a.router-link-exact-active svg:nth-child(2) { @apply inline; }
</style>