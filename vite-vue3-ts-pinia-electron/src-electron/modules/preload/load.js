const { contextBridge, ipcRenderer } = require('electron')

const isShowLogin = async (content) => {
  let result = await ipcRenderer.invoke('on-isshowlogin-event', content)
}

contextBridge.exposeInMainWorld('electronAPI', {
  isShowLogin,
  ipcRenderer,
})
