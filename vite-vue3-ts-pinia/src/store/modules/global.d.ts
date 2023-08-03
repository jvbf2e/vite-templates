/* Global Types */

export type SettingsType = {
  // 国际化
  isLanguage: boolean
  // 主题
  isTheme: boolean
}

export type ThemeConfigType = {
  mode: 'dark' | 'light' | 'default'
}

export type ConfigType = {
  request: {
    pending: Map<any, any>
    timeout: number
  }
}

export interface GlobalState {
  // 默认路径
  path: string
  // 国际化
  language: string
  // Token
  token: string | null
  // 全局设置
  settings: SettingsType
  // 主题设置
  themeConfig: ThemeConfigType
  // 设置
  config: ConfigType
}
