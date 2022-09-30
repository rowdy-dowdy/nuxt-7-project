<script lang="ts" setup>
  const props = defineProps({
    path: String,
    vref: null
  })
</script>

<template>
  <div ref="vref" class="border-b py-4">
    <div class="flex items-start space-x-4">
      <a href="#" class="w-16 h-16 rounded-full border overflow-hidden">
        <img
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/60d92c57e49e87ca9bc65cdb57c48b5c~c5_100x100.jpeg?x-expires=1664618400&x-signature=Rm5P%2Fr748Ard1foiieBuRlZivt4%3D"
          alt="" class="w-full h-full object-cover">
      </a>

      <div class="flex-grow min-w-0">
        <div class="flex flex-col">
          <h3><a href="#" class="font-semibold hover:underline">vananhh0712</a>&nbsp; Nguyễn Ngọc Vân Anh</h3>
          <a href="#" class="flex items-center space-x-1 mt-2 mb-3 hover:underline">
            <span class="flex-none icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                <path
                  d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z">
                </path>
              </svg>
              <!-- <svg v-if="tag.type == 'tag'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z"></path></svg> -->
            </span>
            <span class="flex-grow min-w-0 truncate font-medium">nhạc nền - Tz.Myyyyy💫✨</span>
          </a>

          <div>
            <!-- <video class="" src=""></video> -->
            <div class="w-full flex">
              <TiktokVideo :path="path" />

              <div class="flex-none ml-4 flex flex-col justify-end space-y-2">
                <button class="text-center">
                  <span class="icon w-12 h-12 p-3 rounded-full bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                      <path
                        d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z">
                      </path>
                    </svg>
                  </span>
                  <span class="text-xs font-medium">780.7K</span>
                </button>
                <button class="text-center">
                  <span class="icon w-12 h-12 p-3 rounded-full bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM9 12a2 2 0 1 1 .001-4.001A2 2 0 0 1 9 12zm6 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 12z">
                      </path>
                    </svg>
                  </span>
                  <span class="text-xs font-medium">13.9K</span>
                </button>
                <button class="text-center">
                  <span class="icon w-12 h-12 p-3 rounded-full bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: scaleX(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);">
                      <path
                        d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z">
                      </path>
                    </svg>
                  </span>
                  <span class="text-xs font-medium">15.2K</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="flex-none rounded px-6 py-2 font-semibold border text-rose-500 border-rose-500 hover:bg-rose-200 mt-3">Follow</button>
    </div>
  </div>
</template>