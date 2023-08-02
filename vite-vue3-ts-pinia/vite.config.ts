import { type ConfigEnv, defineConfig } from 'vite'

import { createVite } from './config'

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => createVite(env))
