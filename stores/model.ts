// stores/counter.js
import { defineStore } from 'pinia'

export const useModelStore = defineStore('model', {
  state: () => {
    return { 
      overplay: false,
      menu: false 
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    toggleMenu(value = undefined) {
      let show = value != undefined ? value : !this.menu
      this.overplay = show
      this.menu = show
    },
    hidden() {
      this.overplay = false
      this.menu = false
    }
  },
})
