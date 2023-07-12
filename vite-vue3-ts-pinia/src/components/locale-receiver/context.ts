import type { PropType, VNodeTypes } from 'vue'

export interface Locale {
  locale: string
}

export interface LocaleInterface {
  [key: string]: any
}

export interface LocaleReceiverContext {
  antLocale?: LocaleInterface
}

export type LocaleComponentName = Extract<keyof Locale, 'locale'>

export const localeReceiverProps = () => ({
  componentName: String as PropType<LocaleComponentName>,
  defaultLocale: {
    type: [Object, Function],
  },
  children: {
    type: Function as PropType<
      (locale: any, localeCode?: string, fullLocale?: object) => VNodeTypes
    >,
  },
})
