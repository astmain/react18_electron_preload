const {app, BrowserWindow} = require('electron')

function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        // width: 1800, height: 900, x: -1800 - 100, y: 100,    //家里
        width: 1800, height: 1000, x: 1900 + 100, y: 10,     //公司
        webPreferences: {

            nodeIntegration: true,//

            sandbox: false,
            allowRunningInsecureContent: true, // HTTPS 页面中, Electron 应用程序会允许加载和运行 HTTP 资源(如脚本、插件等)
            webviewTag: true, // 是否使用<webview>标签 在一个独立的 frame 和进程里显示外部 web 内容
            webSecurity: false, // 禁用web安全同源策略,可以跨域发送ajax
            contextIsolation: false,///
            // preload: require('path').join(__dirname, 'preload.js'),//预加载脚本
        }
    })

    // 加载 index.html
    // win.loadFile('index.html')
    win.loadURL(`http://127.0.0.1:5566`, {userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.215 Safari/537.36'})
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // 在 macOS 上，当单击 dock 图标并且没有其他窗口打开时，
        // 通常在应用程序中重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 除了 macOS 外，当所有窗口都关闭的时候退出程序。
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})