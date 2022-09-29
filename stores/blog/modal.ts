// stores/counter.js
import { defineStore } from 'pinia'

export const useModalStore = defineStore('blog_modal', {
  state: () => {
    return { 
      overplay: false,
      menu: false,
      search: false
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    toggleMenu(value = undefined) {
      let show = value != undefined ? value : !this.menu
      this.overplay = show
      this.menu = show
      
      document.body.style.overflow = show ? 'hidden' : 'initial'
    },
    toggleSearch(value = undefined) {
      let show = value != undefined ? value : !this.search
      this.overplay = show
      this.search = show
      
      document.body.style.overflow = show ? 'hidden' : 'initial'
    },
    hidden() {
      this.overplay = false
      this.menu = false
      this.search = false

      document.body.style.overflow = 'initial'
    }
  },
})
