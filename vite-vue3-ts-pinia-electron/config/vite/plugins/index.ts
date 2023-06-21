import vue from '@vitejs/plugin-vue'

import type { PluginOption } from 'vite'

export function createVitePlugins() {
  const plugins = [vue()] as PluginOption[]

  return plugins
}
