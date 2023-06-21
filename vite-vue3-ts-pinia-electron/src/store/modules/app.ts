import { defineStore } from 'pinia'

interface AppState {
  count: number
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
