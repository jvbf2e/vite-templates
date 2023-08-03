import type { ConfigEnv, UserConfig } from 'vite'

import { createViteBuild } from './build'
import { createViteCss } from './css'
import { createViteEsbuild } from './esbuild'
import { createVitePlugins } from './plugins'
import { createViteResolve } from './resolve'
import { createViteServer } from './server'

// https://vitejs.dev/config/
export default function createVite({ mode }: ConfigEnv): UserConfig {
  return {
    build: createViteBuild(),
    css: createViteCss(),
    esbuild: createViteEsbuild(),
    plugins: createVitePlugins(mode),
    resolve: createViteResolve(),
    server: createViteServer(),
  }
}
