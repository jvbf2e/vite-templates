import { resolve } from 'node:path'

export function createViteResolve() {
  return {
    alias: {
      '@': resolve(__dirname, '../../src'),
      '#': resolve(__dirname, '../../types'),
    },
  }
}
