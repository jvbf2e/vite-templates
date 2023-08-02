/**
 * @description 自动导入
 */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import {
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from 'unplugin-vue-components/resolvers'

export function configAutoImportPlugin() {
  return AutoImport({
    // 需要去解析的文件
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
    dts: 'types/auto-imports.d.ts',
    // 生成相应的自动导入json文件。
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true,
    },
    resolvers: [],
  })
}

export function configVueComponentsPlugin() {
  return Components({
    dirs: ['src/components'],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    resolvers: [VueUseComponentsResolver(), VueUseDirectiveResolver()],
    dts: 'types/components.d.ts',
    extensions: ['vue'],
    directoryAsNamespace: false,
    deep: true,
  })
}
