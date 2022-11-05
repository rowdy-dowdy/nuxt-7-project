<script lang="ts" setup>
  const links = ref([
    {
      path: '/admin',
      name: 'My Tasks',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path><path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path></svg>`,
    },
    {
      path: '/admin/inbox',
      name: 'Inbox',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path><circle cx="9.5" cy="11.5" r="1.5"></circle><circle cx="14.5" cy="11.5" r="1.5"></circle></svg>`,
    },
    {
      path: '/admin/projects',
      name: 'Projects',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m8 16 5.991-2L16 8l-6 2z"></path></svg>`,
    },
    {
      path: '/admin/standups',
      name: 'Standups',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>`,
    },
    {
      path: '/admin/mettings',
      name: 'Mettings',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z"></path></svg>`,
      notification: 2,
    },
    {
      path: '/admin/settings',
      name: 'Settings',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"></path></svg>`,
    },
  ])
</script>

<template>
  <div class="flex w-64 flex-col bg-gray-50 px-4">
    <div class="flex space-x-4 py-12">
      <div class="h-12 w-12 rounded-full bg-rose-600">
        <!-- <img src="" alt="" /> -->
      </div>
      <div>
        <h3 class="text-xl font-semibold">Việt Hùng</h3>
        <p class="text-sm">Sr. Web developer</p>
      </div>
    </div>

    <div>
      <p class="mb-4">Menu</p>
      <div class="flex flex-col text-gray-500">
        
        <NuxtLink v-for="(link,index) in links" :to="link.path" class="-mx-4 flex items-center space-x-3 border-y-2 border-l-4
          border-transparent px-4 py-3 hover:text-rose-500" :class="$route.fullPath == link.path ? 'border-l-rose-500 text-rose-500' : '' ">
          <span class="icon w-6 flex-none" v-html="link.svg"></span>
          <span class="min-w-0 flex-grow">{{link.name}}</span>
          <span v-if="link.notification" class="block rounded bg-rose-500 px-2 py-0.5 text-xs text-white">
            {{link.notification}}
          </span>
        </NuxtLink>
      </div>
    </div>

    <div class="mt-auto pt-6">
      <p class="mb-4">Favorites</p>
      <div class="flex flex-col text-gray-500">
        <Link href="/" class="flex items-center space-x-3 py-3">
        <span class="block h-4 w-4 rounded-full border-2 border-blue-500"></span>
        <span class="min-w-0 flex-grow truncate">Readwhale Design</span>
        </Link>
        <Link href="/" class="flex items-center space-x-3 py-3">
        <span class="block h-4 w-4 rounded-full border-2 border-red-500"></span>
        <span class="min-w-0 flex-grow truncate">Mobile App</span>
        </Link>
        <Link href="/" class="flex items-center space-x-3 py-3">
        <span class="block h-4 w-4 rounded-full border-2 border-green-500"></span>
        <span class="min-w-0 flex-grow truncate">UI Design</span>
        </Link>
      </div>

      <button class="icon mt-4 h-10 w-10 rounded-full bg-rose-500 p-2 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
        </svg>
      </button>
    </div>

    <p class="mt-auto py-6 text-sm text-gray-500">
      {{new Date().getFullYear()}} Việt Hùng Dev
    </p>
  </div>
</template>