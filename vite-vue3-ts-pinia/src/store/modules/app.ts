import { defineStore } from 'pinia'

interface AppState {
  loading: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      loading: false,
    }
  },
  actions: {},
})
