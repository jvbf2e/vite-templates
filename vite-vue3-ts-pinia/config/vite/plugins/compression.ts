/**
 * @description 文件压缩
 */
import viteCompression from 'vite-plugin-compression'

export function configCompressionPlugin() {
  return viteCompression({
    verbose: true, // 是否在控制台中输出压缩结果
    disable: false,
    threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
    algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
    ext: '.gz',
    deleteOriginFile: true, // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
  })
}
