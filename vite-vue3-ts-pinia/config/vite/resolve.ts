import path from 'path'

import type { ObjAnyTypes } from '#/common'

export function createViteResolve() {
  const resolve = {
    alias: configAliasResolve(),
  }
  return resolve
}

function configAliasResolve() {
  const alias = {
    '@': path.resolve(__dirname, '../..', './src'),
    '#': path.resolve(__dirname, '../..', './types'),
  } as ObjAnyTypes

  return alias
}
