import type { PropType } from 'vue'

export type LayoutType = 'pc' | 'moblie'

export const layoutProps = () => ({
  type: {
    type: String as PropType<LayoutType>,
    default: 'pc',
  },
})
