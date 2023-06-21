import { config } from './config'
import { service } from './service'

import type { AxiosRequestConfig } from 'axios'

const { defaultHeaders } = config

const request = <T = any>(options: AxiosRequestConfig<T>) => {
  return service({
    headers: {
      'Content-Type': defaultHeaders,
    },
    ...options,
  })
}

export default {
  get: <T = any, R = any>(options: AxiosRequestConfig<R>) => {
    return request<R>({ method: 'get', ...options }) as unknown as T
  },
  post: <T = any, R = any>(option: AxiosRequestConfig<R>) => {
    return request<R>({ method: 'post', ...option }) as unknown as T
  },
  delete: <T = any, R = any>(option: AxiosRequestConfig<R>) => {
    return request<R>({ method: 'delete', ...option }) as unknown as T
  },
  put: <T = any, R = any>(option: AxiosRequestConfig<R>) => {
    return request<R>({ method: 'put', ...option }) as unknown as T
  },
}
