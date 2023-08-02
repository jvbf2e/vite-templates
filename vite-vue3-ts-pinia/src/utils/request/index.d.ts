import type { AxiosRequestConfig } from 'axios'

export type ContentType = 'json' | 'urlencoded' | 'multipart'

export interface CustomAxiosRequestConfig<D = any>
  extends AxiosRequestConfig<D> {
  prefixUrl?: string
  contentType?: ContentType
  cancelDuplicate?: boolean
  showLoading?: boolean
  retry?: number
  retryCount?: number
  headers?: Partial<AxiosRequestHeaders>
}

export interface Result<T = any> {
  code: number
  message: string
  data: T
}
