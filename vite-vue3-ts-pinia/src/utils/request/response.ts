import type { AxiosInstance } from 'axios'
import type { CustomAxiosRequestConfig, Result } from './index.d'

import { getRequestKey } from '.'

import { useRequestState } from '@/store'

class ResponseManager {
  // 取消重复请求
  private cancelDuplicate(config: CustomAxiosRequestConfig) {
    console.log(this)
    // 获取请求标识
    const key = getRequestKey(config)
    const { setPending } = useRequestState()
    setPending('delete', key)
  }

  // Loading
  private loadingCount() {
    console.log(this)
    const { getLoadingCount, setLoadingCount } = useRequestState()
    setLoadingCount('down')
    if (getLoadingCount === 0) {
      console.log('hideLoading')
    }
  }

  // 状态码
  private handleCode(data: Result) {
    console.log(this)
    // 根据状态码操作
    console.log(data)
  }

  // 失败时重新发起请求
  private retryRequest(error: any, service: AxiosInstance) {
    console.log(this)
    // 获取请求配置
    const { config } = error
    // 判断是否需要请求失败重试
    if (config.retry) {
      // 获取该请求的重试次数
      let retryCount = (config.retryCount as number) || 0
      // 如果重试次数小于设定的次数，则重新发起请求
      if (retryCount < config.retry) {
        retryCount += 1
        config.retryCount = retryCount // 将重试次数保存到配置中，方便下次获取
        const retryDelay = error.config.retryDelay || 1000 // 获取重试延迟时间，默认为1000毫秒
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(service(config)) // 重新发起请求，并返回一个promise对象
          }, retryDelay)
        })
      }
    }
    return Promise.reject(error) // 如果不需要重试或者超过重试次数，则直接返回一个拒绝状态的promise对象
  }

  // 定义一个响应拦截器的函数，用于在响应返回后执行一些操作
  public onFulfilled(response: any) {
    console.log(response)
    // 取消重复请求
    if (response.config.cancelDuplicate) {
      this.cancelDuplicate(response.config)
    }

    // 多请求单 loading 控制
    if (response.config.showLoading) {
      this.loadingCount()
    }

    // 状态码
    if (response.data.code !== 0) {
      this.handleCode(response.data)
    }

    return response // 返回响应数据
  }

  // 定义一个错误拦截器的函数，用于在错误发生时执行一些操作
  public onRejected(service: AxiosInstance, error: any) {
    // 取消重复请求
    if (error.config.cancelDuplicate) {
      this.cancelDuplicate(error.config)
    }

    // 多请求单 loading 控制
    if (error.config.showLoading) {
      this.loadingCount()
    }

    return this.retryRequest(error, service)
  }
}

export default ResponseManager
