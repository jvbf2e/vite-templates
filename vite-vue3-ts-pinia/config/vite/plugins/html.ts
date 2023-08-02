/**
 * @description .env 替换 index.html
 */
import { loadEnv } from 'vite'
import { createHtmlPlugin as createHtml } from 'vite-plugin-html'

export function createHtmlPlugin(mode: string) {
  return createHtml({
    minify: true,
    /**
     * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
     * @default src/main.ts
     */
    entry: '/src/main.ts',
    // 需要注入 index.html ejs 模版的数据
    inject: {
      data: {
        // 查找 .env.test 文件里面的 VITE_PROJECT_TITLE，请以VITE_标识开头
        title: loadEnv(mode, process.cwd()).VITE_PROJECT_TITLE,
      },
    },
  })
}
