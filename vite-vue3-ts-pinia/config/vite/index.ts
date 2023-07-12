import { loadEnv } from 'vite'

import { wrapperEnv } from '../utils'
import { createViteBuild } from './build'
import { createViteCss } from './css'
import { createVitePlugins } from './plugins'
import { createViteResolve } from './resolve'
import { createViteServer } from './server'

import type { ConfigEnv, UserConfig } from 'vite'

export function createVite({ mode }: ConfigEnv): UserConfig {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)

  const { VITE_PUBLIC_PATH } = viteEnv

  return {
    base: VITE_PUBLIC_PATH || '/',
    build: createViteBuild(),
    css: createViteCss(),
    define: {
      'process.env': viteEnv,
    },
    plugins: createVitePlugins(),
    resolve: createViteResolve(),
    server: createViteServer(),
  }
}
