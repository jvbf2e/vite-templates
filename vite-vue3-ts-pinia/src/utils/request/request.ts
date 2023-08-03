import type { InternalAxiosRequestConfig } from 'axios'
import type { CustomAxiosRequestConfig } from './index.d'

import qs from 'qs'

import { cancelToken, getRequestKey } from '.'

import { useRequestState } from '@/store'

const contentTypes = {
  json: 'application/json; charset=utf-8',
  urlencoded: 'application/x-www-form-urlencoded; charset=utf-8',
  multipart: 'multipart/form-data',
}

class RequestManager {
  private init(config: CustomAxiosRequestConfig) {
    console.log(this)

    const { getConfig } = useRequestState()

    const newOptions = {
      ...getConfig,
      ...config,
      headers: {
        'Content-Type':
          (config.headers && config.headers['Content-Type']) ||
          contentTypes[getConfig.contentType],
      } as any,
    }

    newOptions.url = `/${newOptions.prefixUrl}/${config.url}`

    if (config.method === 'get') {
      newOptions.params = config.data
    } else {
      const { data } = newOptions
      if (data instanceof FormData) {
        newOptions.headers = {
          'x-requested-with': 'XMLHttpRequest',
          'cache-control': 'no-cache',
        }
      } else if (
        newOptions.headers['Content-Type'] === contentTypes.urlencoded
      ) {
        newOptions.data = qs.stringify(data)
      } else {
        Object.keys(data).forEach((item) => {
          if (
            data[item] === null ||
            data[item] === undefined ||
            data[item] === ''
          ) {
            delete data[item]
          }
        })
      }
    }

    return newOptions
  }

  // 取消重复请求
  private cancelDuplicate(config: CustomAxiosRequestConfig) {
    console.log(this)
    // 获取请求标识
    const key = getRequestKey(config)
    const { getPending, setPending } = useRequestState()
    const pending = getPending
    // 是否存在
    if (pending.has(key)) {
      const cancel = setPending('get', key)
      cancel && cancel()
      setPending('delete', key)
    }
    // 缓存
    // eslint-disable-next-line no-param-reassign
    config.cancelToken = cancelToken((cancel) => {
      setPending('set', key, cancel)
    })
  }

  // Loading
  private loadingCount() {
    console.log(this)
    const { getLoadingCount, setLoadingCount } = useRequestState()
    if (getLoadingCount === 0) {
      console.log('showLoading')
    }
    setLoadingCount('up')
  }

  // 定义一个请求拦截器的函数，用于在请求发送前执行一些操作
  public onFulfilled(config: CustomAxiosRequestConfig) {
    if (!config?.retryCount) {
      // eslint-disable-next-line no-param-reassign
      config = this.init(config)
    }

    // 是否取消重复请求
    if (config.cancelDuplicate) {
      this.cancelDuplicate(config)
    }

    // 多请求单 loading 控制
    if (config.showLoading) {
      this.loadingCount()
    }

    return config as InternalAxiosRequestConfig // 返回修改后的配置对象
  }

  // 定义一个错误拦截器的函数，用于在错误发生时执行一些操作
  public onRejected(error: any) {
    console.log(this)
    return Promise.reject(error)
  }
}

export default RequestManager
