import { defineStore } from 'pinia'

import type { ContentType, RequestState } from './request.d'

export const useRequestState = defineStore({
  id: 'request',
  state: (): RequestState => ({
    timeout: 0,
    pending: new Map(),
    loadingCount: 0,
    contentType: 'json',
    prefixUrl: 'api',
    cancelDuplicate: false,
    showLoading: false,
    retry: 0,
    retryDelay: 1000,
  }),
  getters: {
    getConfig: (state) => {
      return {
        prefixUrl: state.prefixUrl,
        contentType: state.contentType,
        cancelDuplicate: state.cancelDuplicate,
        showLoading: state.showLoading,
        retry: state.retry,
        retryDelay: state.retryDelay,
      }
    },
    getPending: (state) => state.pending,
    getLoadingCount: (state) => state.loadingCount,
  },
  actions: {
    // 初始化
    init() {
      process.env.VITE_REQUEST_TIMEOUT &&
        (this.timeout = parseInt(process.env.VITE_REQUEST_TIMEOUT))
      process.env.VITE_REQUEST_RETRY &&
        (this.retry = parseInt(process.env.VITE_REQUEST_RETRY))
      process.env.VITE_REQUEST_RETRY_DELAY &&
        (this.retryDelay = parseInt(process.env.VITE_REQUEST_RETRY_DELAY))
      process.env.VITE_REQUEST_CONTENT_TYPE &&
        (this.contentType = process.env
          .VITE_REQUEST_CONTENT_TYPE as ContentType)
    },
    // 操作缓存
    setPending(type: 'get' | 'set' | 'delete', key: string, value?: any) {
      if (type === 'set') {
        return this.pending[type](key, value)
      }
      return this.pending[type](key)
    },
    // 需要 loading 请求计数
    setLoadingCount(type: 'up' | 'down') {
      if (type === 'up') {
        this.loadingCount++
      } else {
        this.loadingCount--
      }
    },
  },
})
