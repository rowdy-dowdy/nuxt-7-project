<script lang="ts" setup>
  import Scrollbar from 'smooth-scrollbar';
  import { useModalStore } from "~/stores/tiktok/modal";
  import { useUserStore } from '~~/stores/user';

  const modalStore = useModalStore()
  const userStore = useUserStore()

  const { data: accounts } = await useFetch(`/api/tiktok/users`)

  var tags = [
    {title: 'suthatla',type: 'tag'},
    {title: 'mackedoi',type: 'tag'},
    {title: 'sansangthaydoi',type: 'tag'},
    {title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',type: 'music'},
    {title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',type: 'music'},
    {title: 'Thiên Thần Tình Yêu - RICKY STAR',type: 'music'},
    {title: '7749hieuung',type: 'tag'},
    {title: 'genzlife',type: 'tag'},
    {title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',type: 'music'},
    {title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',type: 'music'}
  ]

  var sidebar_html = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (sidebar_html.value)
      Scrollbar.init(sidebar_html.value, {});
  })

  onUnmounted(() => {
    if (sidebar_html.value)
      Scrollbar.destroy(sidebar_html.value);
  })
</script>

<template>
  <div class="relative w-96">
    <div class="fixed w-[inherit] top-[63px] bottom-0">
      <!-- content -->
      <div ref="sidebar_html" id="left-sidebar" class="relative h-full overflow-auto py-4 -ml-4 pr-4">
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
        <div v-show="!userStore.isLogin" class="py-6 border-y ml-4 mt-2">
          <p class="text-gray-500">Log in to follow creators, like videos, and view comments.</p>
          <RouterLink :to="`/auth2/login?redirect_url=${$route.path}`" class="block w-full mt-4 border border-rose-500 rounded text-rose-500 hover:bg-rose-200 py-2.5 px-4 font-medium">Login</RouterLink>
        </div>

        <!-- Suggested accounts -->
        <div class="py-4">
          <p class="text-sm text-gray-500 font-medium pl-4">Suggested accounts</p>
          <div class="flex flex-col mt-2">
            <a 
              v-for="item in accounts" :key="item.id" href="#" 
              class="flex items-center space-x-2 p-2 ml-2 rounded hover:bg-gray-100"
              @mouseenter="($el) => modalStore.showModalUser({el: $el.target as HTMLElement, id: item.id})"
              @mouseleave="modalStore.hideModalUser()"
            >
              <img :src="item.image" :alt="item.name" class="flex-none w-8 h-8 rounded-full" loading="lazy">
              <div class="flex-grow min-w-0">
                <h3 class="font-semibold truncate flex items-center space-x-1">
                  <span>{{item.username}}</span>
                  <span class="icon w-4 h-4 rounded-full bg-sky-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                  </span>
                </h3>
                <p class="text-sm text-gray-500">{{item.name}}</p>
              </div>
            </a>

            <a href="#" class="text-sm text-rose-500 pl-4">See all</a>
          </div>
        </div>

        <!-- Discover -->
        <div class="py-4 border-y ml-4">
          <p class="text-sm text-gray-500">Discover</p>
          <div class="flex flex-wrap mt-2 text-xs">
            <a v-for="tag in tags" href="#" class="flex items-center space-x-1 max-w-full px-2 py-1 rounded-full hover:bg-gray-100 border mr-2 mb-2">
              <span class="flex-none icon">
                <svg v-if="tag.type == 'music'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z"></path></svg>
                <svg v-if="tag.type == 'tag'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z"></path></svg>
              </span>
              <span class="flex-grow min-w-0 truncate">{{tag.title}}</span>
            </a>
          </div>
        </div>

        <!-- copyright  -->
        <p class="text-xs p-4">© 2022 Việt Hùng</p>
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

  :deep(#left-sidebar:hover .scrollbar-track) {
    opacity: 1;
    transition-delay: 0s;
  }
</style>