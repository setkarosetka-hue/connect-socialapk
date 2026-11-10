
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 360,
        minHeight: 600,
        title: 'Connect',
        icon: path.join(__dirname, 'connect-icon-512.png'),
        autoHideMenuBar: true,
        backgroundColor: '#f4f5fb',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadURL('https://setkarosetka-hue.github.io/connect-social/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});
