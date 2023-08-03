/**
 * @description 自动导入
 */
import AutoImport from 'unplugin-auto-import/vite'

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
