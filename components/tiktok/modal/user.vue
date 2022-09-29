<script lang="ts" setup>
  import { useModalStore } from "~/stores/tiktok/modal";

  const modalStore = useModalStore()

  const hoverModal = () => {
    modalStore.user.show = true
    modalStore.user.wait = false
  }
</script>

<template>
  <Transition name="user_modal">
    <div 
      v-if="modalStore.user.show" 
      class="fixed"
      @mouseenter="hoverModal"
      @mouseleave="modalStore.hideModalUser()"
      :style="{'left': modalStore.user.x + 'px', 'top': modalStore.user.y + 'px'}"
    >
      <div class="px-6 py-4 bg-white rounded shadow min-w-[350px]">
        <div class="flex justify-between items-center">
          <img :src="modalStore.user.info.image" alt="" class="flex-none w-12 h-12 rounded-full">
          <button class="px-6 py-2 font-semibold bg-rose-500 rounded text-white hover:bg-rose-400">Follow</button>
        </div>

        <h3 class="font-semibold truncate flex items-center space-x-1 mt-4">
          <span>{{modalStore.user.info.username}}</span>
          <span class="icon w-4 h-4 rounded-full bg-sky-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
          </span>
        </h3>
        <p class="text-sm text-gray-500">{{modalStore.user.info.name}}</p>
        
        <div class="flex justify-between items-center mt-2">
          <span><b>{{modalStore.user.info.followes}}</b> Follower</span>
          <span><b>{{modalStore.user.info.likes}}</b> Likes</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .user_modal-enter-active {
    animation: modal-in 0.5s;
  }
  .user_modal-leave-active {
    animation: modal-in 0.3s reverse;
  }

  @keyframes modal-in {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>