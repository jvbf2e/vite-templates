import type { App } from 'vue'
import { createPinia } from 'pinia'

export * from './modules/global'
export * from './modules/request'

export const store = createPinia()

export const setupStore = (app: App<Element>) => {
  app.use(store)
}
