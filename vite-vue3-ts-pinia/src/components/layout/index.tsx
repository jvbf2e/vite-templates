import { Transition, defineComponent } from 'vue'
import { layoutProps } from './context'
import { useGlobalStore } from '@/store/modules/global'

import LoadingView from '@/views/loading/index.vue'
import MobileView from '@/views/mobile/index.vue'
import PCView from '@/views/pc/index.vue'

const Layout = defineComponent({
  name: 'Layout',
  inheritAttrs: false,
  compatConfig: {
    MODE: 3,
  },
  props: layoutProps(),
  setup(props) {
    return () => (
      <>
        <Transition name="fade">
          {useGlobalStore().loading.visible ? <LoadingView /> : null}
        </Transition>
        {props.type === 'pc' ? <PCView /> : <MobileView />}
      </>
    )
  },
})

export default Layout
