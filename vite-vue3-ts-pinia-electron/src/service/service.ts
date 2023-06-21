import Axios from 'axios'

import { config } from './config'

import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

const env = import.meta.env.VITE_API_BASEPATH as 'pro' | 'dev'

export const PATH_URL = config.baseUrl[env]

// 创建axios实例
const service: AxiosInstance = Axios.create({
  baseURL: PATH_URL,
  timeout: config.requestTimeout, // 请求超时时间
})

// Request 拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    console.error(error)
    Promise.reject(error)
  }
)

// Response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.config.responseType === 'blob') {
      // 如果是文件流，直接过
      return response
    } else {
      return response.data
    }
  },
  (error: AxiosError) => {
    console.error(error)
    Promise.reject(error)
  }
)

export { service }
