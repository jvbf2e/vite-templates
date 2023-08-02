import { resolve } from 'node:path'

export function createViteResolve() {
  console.log()
  return {
    alias: {
      '@': resolve(__dirname, '../..', 'src'),
      '#': resolve(__dirname, '../..', 'src'),
    },
  }
}
