// stores/counter.js
import { defineStore } from 'pinia'

type TiktokUser = {
  id: number;
  name: string;
  username: string;
  image: string;
  followes: string;
  likes: string;
  confirmed: boolean;
}

type TiktokStore = {
  show: boolean,
  wait: boolean,
  x: number,
  y: number,
  info: TiktokUser | null
}

export const useModalStore = defineStore('tiktok_modal', () => {
  const user = ref<TiktokStore>({
    show: false,
    wait: false,
    x: null as unknown as number,
    y: null as unknown as number,
    info: null
  })

  var show_timeout: ReturnType<typeof setTimeout>
  var hide_timeout: ReturnType<typeof setTimeout>

  const showModalUser = ({el, id}: {el:HTMLElement | null, id: number | null}) => {
    user.value.wait = true

    clearTimeout(show_timeout)
    clearTimeout(hide_timeout)
    show_timeout = setTimeout(async () => {
      if (!el || !user.value.wait) return

      const data = await $fetch(`/api/tiktok/users/${id}`)
      user.value.info = data
      // if (user.value.wait) return

      let position = el.getBoundingClientRect()

      user.value.x    = position.left
      user.value.y    = position.bottom
      user.value.show = true
      user.value.wait = false
    }, 300);
  }

  const hoverModal = () => {
    clearTimeout(hide_timeout)
    user.value.show = true
    user.value.wait = false
  }

  const hideModalUser = async () => {
    clearTimeout(hide_timeout)
    // clearTimeout(show_timeout)
    hide_timeout = setTimeout(() => {
      user.value.show = false
      
      if (user.value.wait) {
        user.value.wait = false
      }
    }, 100)
  }

  return {
    user,
    showModalUser,
    hoverModal,
    hideModalUser
  }
})
