import axios from 'axios'
import { useRequestState } from '@/store'

import type { Canceler } from 'axios'
import type { CustomAxiosRequestConfig } from './index.d'

import RequestManager from './request'
import ResponseManager from './response'

const requestState = useRequestState()

const service = axios.create({
  timeout: requestState.timeout,
})

const requestManager = new RequestManager()
const responseManager = new ResponseManager()

// 请求拦截器
service.interceptors.request.use(
  requestManager.onFulfilled.bind(requestManager),
  requestManager.onRejected.bind(requestManager)
)

// 响应拦截器
service.interceptors.response.use(
  responseManager.onFulfilled.bind(responseManager),
  responseManager.onRejected.bind(responseManager, service)
)

export const getRequestKey = (config: CustomAxiosRequestConfig) => {
  return (
    config.url +
    '&' +
    config.method +
    '&' +
    JSON.stringify(config.params) +
    '&' +
    JSON.stringify(config.data)
  )
}

export const cancelToken = (executor: (cancel: Canceler) => void) =>
  new axios.CancelToken(executor)

export const post = <T = any, D = any>(
  url: string,
  data?: T,
  config?: CustomAxiosRequestConfig<T>
): Promise<D> => {
  return service.post(url, data, config)
}

export const del = <T = any, D = any>(
  url: string,
  config?: CustomAxiosRequestConfig<T>
): Promise<D> => {
  return service.delete(url, config)
}

export const put = <T = any, D = any>(
  url: string,
  data?: T,
  config?: CustomAxiosRequestConfig<T>
): Promise<D> => {
  return service.put(url, data, config)
}

export const get = <T = any, D = any>(
  url: string,
  config?: CustomAxiosRequestConfig<T>
): Promise<D> => {
  return service.get(url, config)
}
