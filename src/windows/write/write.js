const { BrowserWindow } = require('electron')

function createWriteWindow (isDev) {
    let writeWindow = new BrowserWindow({
        backgroundColor: '#25282C',
        title: 'Write Stream',
        width: 800,
        height: 625,
        resizable: isDev,
        icon: './assets/icons/icon.png'
    })

    if (isDev) {
        writeWindow.webContents.openDevTools()
    }

    writeWindow.loadFile(`${__dirname}/write.html`)
    writeWindow.setMenu(null)

    // External links open in browser rather than in app
    writeWindow.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        require('electron').shell.openExternal(url);
    })

    writeWindow.on('ready', () => {
        writeWindow = null
    })
}

module.exports = createWriteWindow