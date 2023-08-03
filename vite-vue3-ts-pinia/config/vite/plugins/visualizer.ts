/**
 * @description 打包分析
 */
import visualizer from 'rollup-plugin-visualizer'

export function configVisualizerPlugin() {
  return visualizer()
}
