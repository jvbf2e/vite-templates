interface ServiceConfig {
  baseUrl: {
    dev: string
    pro: string
  }
  resultCode: string
  requestTimeout: number
  defaultHeaders: string
}

export const config: ServiceConfig = {
  baseUrl: {
    // 开发环境接口前缀
    dev: '/api',
    // 打包生产环境接口前缀
    pro: 'https://xxxx/api',
  },
  /**
   * 接口成功返回状态码
   */
  resultCode: '0000',
  /**
   * 接口请求超时时间
   */
  requestTimeout: 60000,
  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  defaultHeaders: 'application/json',
}
