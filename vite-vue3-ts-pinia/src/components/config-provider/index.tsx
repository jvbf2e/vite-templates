import { defineComponent } from 'vue'
import LocaleReceiver from '../locale-receiver'
import LocaleProvider, { ANT_MARK } from '../locale-provider'
import { configProviderProps } from './context'

import type { Locale } from '../locale-provider/context'

const ConfigProvider = defineComponent({
  name: 'ConfigProvider',
  inheritAttrs: false,
  compatConfig: {
    MODE: 3,
  },
  props: configProviderProps(),
  setup(props, { slots }) {
    const renderProvider = (legacyLocale: Locale) => (
      <LocaleProvider
        locale={props.locale || legacyLocale}
        ANT_MARK__={ANT_MARK}
      >
        {slots.default?.()}
      </LocaleProvider>
    )
    return () => (
      <LocaleReceiver
        children={(_, __, legacyLocale) =>
          renderProvider(legacyLocale as Locale)
        }
      />
    )
  },
})

export default ConfigProvider
