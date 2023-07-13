type ARFType = 'interval' | 'timeout'

type IdMap = {
  [key: symbol]: number
}

type TimerMap = {
  timeout: IdMap
  interval: IdMap
}

class RAF {
  private _timerIdMap: TimerMap
  constructor() {
    this._timerIdMap = {
      timeout: {},
      interval: {},
    }
  }
  run(type = 'interval' as ARFType, cb: () => void, interval = 16.7) {
    const now = Date.now
    let stime = now()
    let etime = stime
    //创建Symbol类型作为key值，保证返回值的唯一性，用于清除定时器使用
    const timerSymbol = Symbol()
    const loop = () => {
      this.setIdMap(timerSymbol, type, loop)
      etime = now()
      if (etime - stime >= interval) {
        if (type === 'interval') {
          stime = now()
          etime = stime
        }
        cb()
        type === 'timeout' && this.clearTimeout(timerSymbol)
      }
    }
    this.setIdMap(timerSymbol, type, loop)
    // 返回 Symbol 保证每次调用 setTimeout/setInterval 返回值的唯一性
    return timerSymbol
  }
  setIdMap(timerSymbol: symbol, type: ARFType, loop: FrameRequestCallback) {
    const id = requestAnimationFrame(loop)
    this._timerIdMap[type][timerSymbol] = id
  }
  // 实现 setTimeout 功能
  setTimeout(cb: () => void, interval?: number) {
    return this.run('timeout', cb, interval)
  }
  clearTimeout(timer: symbol) {
    cancelAnimationFrame(this._timerIdMap.timeout[timer])
  }
  // 实现setInterval功能
  setInterval(cb: () => void, interval?: number) {
    return this.run('interval', cb, interval)
  }
  clearInterval(timer: symbol) {
    cancelAnimationFrame(this._timerIdMap.interval[timer])
  }
}

export const setTimeout = (cb: () => void, interval?: number) =>
  new RAF().setTimeout(cb, interval)

export const setInterval = (cb: () => void, interval?: number) =>
  new RAF().setInterval(cb, interval)

export const clearInterval = (timer: symbol) => new RAF().clearInterval(timer)

export const clearTimeout = (timer: symbol) => new RAF().clearTimeout(timer)
