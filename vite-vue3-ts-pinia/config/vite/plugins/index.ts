import type { PluginOption } from 'vite'

import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { configVueComponentsPlugin } from './components'
import { configCompressionPlugin } from './compression'
import { createHtmlPlugin } from './html'
import { configImageminPlugin } from './imagemin'
import { configImagesPlugin } from './images'
import { configAutoImportPlugin } from './import'
import { configDefineOptionsPlugin } from './options'
import { configVisualizerPlugin } from './visualizer'

function getLoadEnv(mode: string, name: string, isBoolean?: boolean) {
  const NAME = `VITE_CONFIG_PLUGIN_${name}`
  if (isBoolean) {
    return loadEnv(mode, process.cwd())[NAME] === 'true'
  }
  return loadEnv(mode, process.cwd())[NAME]
}

/**
 * 创建插件
 *
 * @param viteEnv
 * @param command
 */
export function createVitePlugins(mode: string) {
  const plugins = [vue()] as PluginOption[]

  // 文件压缩
  getLoadEnv(mode, 'COMPRESSION', true) &&
    plugins.push(configCompressionPlugin())
  // ENV 设置 html
  getLoadEnv(mode, 'HTML', true) && plugins.push(createHtmlPlugin(mode))
  // 图片压缩
  getLoadEnv(mode, 'IMAGEMIN', true) && plugins.push(configImageminPlugin())
  // 自动导入图片
  getLoadEnv(mode, 'IMAGES', true) && plugins.push(configImagesPlugin())
  // 自动化组件
  getLoadEnv(mode, 'COMPONENTS', true) &&
    plugins.push(configVueComponentsPlugin())
  // 自动化方法
  getLoadEnv(mode, 'AUTO_IMPORT', true) &&
    plugins.push(configAutoImportPlugin())
  // 默认配置
  getLoadEnv(mode, 'DEFINE_OPTIONS', true) &&
    plugins.push(configDefineOptionsPlugin())
  // 打包分析
  getLoadEnv(mode, 'VISUALIZER', true) && plugins.push(configVisualizerPlugin())

  return plugins
}
