/**
 * @description 默认选项
 */
import defineOptions from 'unplugin-vue-define-options/vite'

export function configDefineOptionsPlugin() {
  return defineOptions({
    version: 3,
  })
}
