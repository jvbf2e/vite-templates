/* Request Types */
export type ContentType = 'json' | 'urlencoded' | 'multipart'

export interface RequestState {
  timeout: number
  pending: Map<string, any>
  loadingCount: number
  contentType: ContentType
  prefixUrl: string
  cancelDuplicate: boolean
  showLoading: boolean
  retry: number
  retryDelay: number
}
