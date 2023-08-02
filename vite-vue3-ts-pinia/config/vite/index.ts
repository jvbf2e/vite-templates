import { resolve } from 'node:path'

import type { ConfigEnv, UserConfig } from 'vite'

import { createViteBuild } from './build'
import { createViteCss } from './css'
import { createViteEsbuild } from './esbuild'
import { createVitePlugins } from './plugins'
import { createViteResolve } from './resolve'
import { createViteServer } from './server'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    root: resolve(__dirname, '../../'),
    build: createViteBuild(),
    css: createViteCss(),
    esbuild: createViteEsbuild(),
    plugins: createVitePlugins(mode),
    resolve: createViteResolve(),
    server: createViteServer(),
  }
}
