const path = require('path')
const isDev = require('electron-is-dev')

const { LOAD_URL } = require('./config.js')

const loginWinURL = isDev
  ? `http://localhost:5173/#/login`
  : `${LOAD_URL}#login`

const createLoginWindow = (BrowserWindow) => {
  const win = new BrowserWindow({
    // 'x': mainWindowState.x,
    // 'y': mainWindowState.y,
    width: 826,
    height: 528,
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
      preload: path.resolve(__dirname, '../modules/preload/login.js'),
    },
  })

  // 加载页面地址 线上内网可切换地址
  win.loadURL(loginWinURL)

  // 开发者工具
  win.webContents.openDevTools()

  // 优雅打开界面
  win.on('ready-to-show', () => {
    win.show()
  })
}

module.exports = {
  createLoginWindow,
}
