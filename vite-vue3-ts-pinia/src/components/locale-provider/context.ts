import type { PropType } from 'vue'

export interface Locale {
  locale: string
}

export const localeProviderProps = () => ({
  locale: {
    type: Object as PropType<Locale>,
  },
  ANT_MARK__: String,
})
