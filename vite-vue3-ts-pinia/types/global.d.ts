declare global {
  interface Window {
    electronAPI?: any // 全局变量名
  }

  type AxiosMethod = 'POST' | 'GET' | 'HEAD' | 'DELETE' | 'PUT'

  interface AxiosConfig {
    url?: string
    params?: any
    data?: any
    method?: AxiosMethod
    headersType?: string
  }

  interface IResponse<T = any> {
    code: string
    data: T extends any ? T : T & any
  }

  type AxiosHeaders =
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
}

declare const window: any

export {}
