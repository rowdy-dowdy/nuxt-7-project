// stores/counter.js
import { defineStore } from 'pinia'

export const useModelStore = defineStore('model', {
  state: () => {
    return { show: false }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    toggle(value = undefined) {
      this.show = value ? value : !this.show
    },
  },
})
