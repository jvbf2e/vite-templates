/**
 * @description 自动导入
 */
import Components from 'unplugin-vue-components/vite'
import {
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from 'unplugin-vue-components/resolvers'

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
