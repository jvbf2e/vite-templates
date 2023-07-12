import { acceptHMRUpdate, defineStore } from 'pinia'

interface loadingTypes {
  visible: boolean
  message?: string
}

export const useGlobalStore = defineStore({
  id: 'GlobalStore',
  state: () => ({
    loading: {
      visible: false,
      message: 'Loading...',
    } as loadingTypes,
  }),
  getters: {
    getLoadingMessage(state) {
      return state.loading.message
    },
  },
  actions: {
    setLoading(visible: boolean, message?: string) {
      this.loading.visible = visible
      message && (this.loading.message = message)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
