import type { ObjAnyTypes } from '#/common'

export function wrapperEnv(options: ObjAnyTypes) {
  if (!options) return {}

  const rst: ObjAnyTypes = {}

  for (const key in options) {
    let val = options[key]

    if (['true', 'false'].includes(val)) {
      val = val === 'true'
    }

    if (key === 'VITE_PROXY' && val) {
      try {
        val = JSON.parse(val.replace(/'/g, '"'))
      } catch (error) {
        console.error(error)
        val = ''
      }
    }

    rst[key] = val

    if (typeof key === 'string') {
      process.env[key] = val
    } else if (typeof key === 'object') {
      process.env[key] = JSON.stringify(val)
    }
  }

  return rst
}
