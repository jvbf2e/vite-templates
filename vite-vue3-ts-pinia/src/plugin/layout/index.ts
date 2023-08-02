import DefaultLayout from './default.vue'

import type { App } from 'vue'

const components = {
  install(app: App) {
    app.component('default-layout', DefaultLayout)
  },
}

export const setupLayout = (app: App<Element>) => {
  app.use(components)
}
