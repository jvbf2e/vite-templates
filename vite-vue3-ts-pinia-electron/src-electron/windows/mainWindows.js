const path = require('path')
const windowStateKeeper = require('electron-window-state')
const isDev = require('electron-is-dev')

const { LOAD_URL } = require('./config.js')

const mainWinURL = isDev ? `http://localhost:5173/#/` : `${LOAD_URL}#`

const createMainWindow = (BrowserWindow) => {
  // 默认窗口尺寸
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
  })

  const win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    transparent: true,
    backgroundColor: '#00000000',
    focusable: true,
    show: false,
    frame: false,
    resizable: false,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: true,
      // 渲染器进程到主进程通信 定义预加载的界面ts
      preload: path.resolve(__dirname, '../modules/preload/main.js'),
    },
  })

  // 加载页面地址 线上内网可切换地址
  win.loadURL(mainWinURL)

  // 管理客户端尺寸位置记忆插件
  mainWindowState.manage(win)

  // 开发者工具
  win.webContents.openDevTools()

  // 优雅打开界面
  win.on('ready-to-show', () => {
    win.show()
  })

  global.mainWindow = win
}

module.exports = {
  createMainWindow,
}
