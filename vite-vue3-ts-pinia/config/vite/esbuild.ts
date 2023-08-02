import type { ESBuildOptions } from 'vite'

export function createViteEsbuild(): ESBuildOptions {
  return {
    // 删除 console.log
    pure: ['console.log', 'debugger'],
    // 删除 debugger
    drop: ['debugger'],
  }
}
