<script lang="ts" setup>
definePageMeta({
  middleware: ['auth-login']
})
</script>

<template>
  <div class="flex h-full w-full">
    <AdminMenu />
    <div class="min-w-0 flex-grow">
      <div class="h-full w-full shadow">
        <div class="flex h-full w-full">
          <div class="min-w-0 flex-grow px-12 py-8">
            <div class="flex items-center">
              <h2 class="text-xl font-semibold">Hi !</h2>
              <div class="ml-auto pl-4 text-sm text-gray-500">
                15% task completed
              </div>
              <div class="ml-4 h-2 w-32 overflow-hidden rounded-full bg-gray-200">
                <div class="h-full rounded-full bg-rose-500" style="width: 15%"></div>
              </div>
            </div>

            <div class="-mx-4 mt-8 flex flex-wrap items-stretch">
              <div class="w-1/3 px-4">
                <div class="relative h-full rounded-lg bg-rose-500 p-6">
                  <div class="absolute top-0 right-0 w-2/3">
                    <div class="icon h-full w-full text-white opacity-30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6">
                        <path d="M 0 0 L 7 0 L 7 6 C 6 6 6 5 4 3 C 3 2 1 1 0 0" />
                      </svg>
                    </div>
                  </div>

                  <div class="relative">
                    <div class="flex items-center justify-between">
                      <span class="icon w-16 rounded-lg bg-black/20 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2zm6 7.5H5v-2h6v2zm8 0h-6v-2h6v2z">
                          </path>
                        </svg>
                      </span>
                      <span class="text-sm text-white">Pambayum</span>
                    </div>

                    <h5 class="pt-6 text-3xl font-semibold text-white">
                      $280.420
                    </h5>
                    <p class="pt-4 text-gray-200">
                      Remaining money
                      <span class="text-white">Việt Hùng IT</span>
                    </p>
                    <p class="pt-4 text-sm text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                      et harum neque!
                    </p>
                  </div>
                </div>
              </div>

              <div class="w-2/3 px-4">
                <div class="relative h-full rounded-lg bg-blue-500 p-6">
                  <div class="absolute bottom-0 left-0 w-2/3">
                    <div class="icon h-full w-full text-white opacity-30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 6">
                        <path d="M 0 0 L 0 6 L 14 6 C 14 5 9 5 6 4 C 1 2 2 1 0 0" />
                      </svg>
                    </div>
                  </div>

                  <div class="relative text-white">
                    <p class="text-sm">Running Event</p>

                    <h5 class="pt-6 text-3xl font-semibold text-white">
                      Việt Hùng IT
                    </h5>

                    <p class="pt-4 text-sm">From 03 April to 02 May, 2022</p>

                    <div class="mt-4 flex space-x-4">
                      <div class="w-1/3 rounded-lg bg-purple-500/70 p-4">
                        <h5 class="text-3xl">$42.200</h5>
                        <p class="pt-2 text-sm">Disbursed Budget</p>
                      </div>
                      <div class="w-1/3 rounded-lg bg-green-500/70 p-4">
                        <h5 class="text-3xl">$32.820</h5>
                        <p class="flex items-center space-x-2 pt-2 text-sm">
                          <span>Planned</span>
                          <span class="h-1 w-1 rounded-full bg-white"></span>
                          <span class="text-green-900">Dvetennted 34%</span>
                        </p>
                      </div>
                      <div class="w-1/3 rounded-lg bg-orange-500/70 p-4">
                        <h5 class="text-3xl">$42.200</h5>
                        <p class="pt-2 text-sm">Disbursed Budget</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- left sidebar home -->
          <div class="w-96 border-l px-6">left</div>
        </div>
      </div>
    </div>
  </div>
</template>