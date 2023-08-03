import type { App } from 'vue'
import DefaultLayout from './default.vue'

const components = {
  install(app: App) {
    app.component('DefaultLayout', DefaultLayout)
  },
}

export const setupLayout = (app: App<Element>) => {
  app.use(components)
}
