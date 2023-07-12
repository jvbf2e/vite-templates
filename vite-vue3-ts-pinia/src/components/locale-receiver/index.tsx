import { computed, defineComponent, inject } from 'vue'
import { localeReceiverProps } from './context'
import defaultLocaleData from './default'

import type { LocaleInterface, LocaleReceiverContext } from './context'

const LocaleReceiver = defineComponent({
  name: 'LocaleReceiver',
  inheritAttrs: false,
  compatConfig: {
    MODE: 3,
  },
  props: localeReceiverProps(),
  setup(props, { slots }) {
    const localeData = inject<LocaleReceiverContext>('localeData', {})
    const locale = computed(() => {
      const { componentName = 'global', defaultLocale } = props
      const locale =
        defaultLocale ||
        (defaultLocaleData as LocaleInterface)[componentName || 'global']
      const { antLocale } = localeData
      const localeFromContext =
        componentName && antLocale ? antLocale[componentName] : {}
      return {
        ...(typeof locale === 'function' ? locale() : locale),
        ...(localeFromContext || {}),
      }
    })
    const localeCode = computed(() => {
      const { antLocale } = localeData
      const localeCode = antLocale && antLocale.locale
      // Had use LocaleProvide but didn't set locale
      if (antLocale && antLocale.exist && !localeCode) {
        return defaultLocaleData.locale
      }
      return localeCode
    })
    return () => {
      const children = props.children || slots.default
      const { antLocale } = localeData
      return children?.(locale.value, localeCode.value, antLocale)
    }
  },
})

export default LocaleReceiver
