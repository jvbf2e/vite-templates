import { defineComponent, provide, reactive, watch } from 'vue'
import { localeProviderProps } from './context'

export const ANT_MARK = 'internalMark'

const LocaleProvider = defineComponent({
  name: 'LocaleProvider',
  inheritAttrs: false,
  compatConfig: {
    MODE: 3,
  },
  props: localeProviderProps(),
  setup(props, { slots }) {
    const state = reactive({
      antLocale: {
        ...props.locale,
        exist: true,
      },
      ANT_MARK__: ANT_MARK,
    })
    provide('localeData', state)
    watch(
      () => props.locale,
      () => {
        state.antLocale = {
          ...props.locale,
          exist: true,
        } as any
      },
      { immediate: true }
    )
    return () => slots.default?.()
  },
})

export default LocaleProvider
