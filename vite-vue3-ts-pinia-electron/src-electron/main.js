const { app, BrowserWindow } = require('electron')

const { InitController } = require('./modules/controller/main.js')
const { createLoadWindow } = require('./windows/loadWindows')
const { createLoginWindow } = require('./windows/loginWindows')

app.whenReady().then(() => {
  createLoadWindow(BrowserWindow)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createLoginWindow(BrowserWindow)
    }
  })

  // 初始化监听事件
  InitController(app)
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 客户端聚焦
app.on('browser-window-focus', () => {
  // 初始化快捷键
  console.log('browser-window-focus')
})

// 客户端失去焦点
app.on('browser-window-blur', () => {
  // 注销快捷键
  console.log('browser-window-blur')
})

app.on('will-quit', () => {
  // 注销快捷键
})
