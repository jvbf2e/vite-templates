import { createApp } from 'vue'

// 引入全局页面
import App from './App.vue'
// 引入全局样式
import '@/styles/index.scss'
// 引入状态管理
import { store } from '@/store'
// 引入路由管理
import { router } from '@/router'

const setupAll = async () => {
  const app = createApp(App)
  app.use(store)
  app.use(router)
  app.mount('#app')
}

setupAll()
