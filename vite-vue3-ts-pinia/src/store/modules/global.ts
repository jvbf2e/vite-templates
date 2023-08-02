import { defineStore } from 'pinia'

import type { GlobalState } from './global.d'

export const useGlobalStore = defineStore({
  id: 'global',
  state: (): GlobalState => ({
    path: 'Index',
    language: 'zh',
    token: null,
    settings: {
      isLanguage: false,
      isTheme: false,
    },
    themeConfig: {
      mode: 'default',
    },
    config: {
      request: {
        pending: new Map(),
        timeout: 0,
      },
    },
  }),
  getters: {
    // 获取请求配置
    getConfigRequest: (state) => state.config.request,
    // 获取请求
    getConfigRequestPending: (state) => state.config.request.pending,
  },
  actions: {
    // 初始化
    initConfig() {
      process.env.VITE_REQUEST_TIMEOUT &&
        (this.config.request.timeout = parseInt(
          process.env.VITE_REQUEST_TIMEOUT
        ))
    },
  },
})
