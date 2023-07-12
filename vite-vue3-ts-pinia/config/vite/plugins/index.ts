import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import type { PluginOption } from 'vite'

export function createVitePlugins() {
  const plugins = [vue(), vueJsx()] as PluginOption[]

  return plugins
}
