import { type App } from 'vue'

import router from './router'

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (_to, _from, next) => {
  // * 在跳转路由之前，清除所有的请求
  next()
})

router.afterEach(() => {
  // NProgress.done()
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
