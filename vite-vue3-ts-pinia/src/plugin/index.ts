import { createApp } from 'vue'

// 引入全局页面
import App from './App.vue'
// 引入全局样式
import './styles/index.scss'
// 引入状态管理
import { setupStore } from '@/store'
// 引入路由管理
import { setupRouter } from './router'
// 引入布局管理
import { setupLayout } from './layout'

const createVue = async () => {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  setupLayout(app)
  app.mount('#jvbf2e')
}

export default createVue
