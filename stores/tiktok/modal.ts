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

export const useModalStore = defineStore('tiktok_modal', {
  state: () => {
    return { 
      user: {
        show: false,
        wait: false,
        x: null as number,
        y: null as number,
        info: null as TiktokUser
      }
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async showModalUser({el, id}: {el:HTMLElement | null, id: number | null}) {
      if (!el) return

      this.user.info = await $fetch(`/api/tiktok/users/${id}`)

      // if (this.user.wait) return

      let position = el.getBoundingClientRect()

      this.user.x    = position.left
      this.user.y    = position.bottom
      this.user.show = true
      this.user.wait = false
    },

    async hideModalUser() {
      this.user.wait = true

      await new Promise((res,rej) => {
        setTimeout(() => {
          res(false)
        }, 500);
      })

      if (this.user.wait)
        this.user.show = false
      
      this.user.wait = false
    },
  },
})
