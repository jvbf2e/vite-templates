import type { PropType } from 'vue'
import type { Locale } from '../locale-provider/context'

export const configProviderProps = () => ({
  prefixCls: String,
  locale: {
    type: Object as PropType<Locale>,
    default: undefined,
  },
})
