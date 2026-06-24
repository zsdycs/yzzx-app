const { app, BrowserWindow } = require('electron');
const { startServer } = require('./main');

let mainWindow;
let serverRef;

function createMainWindow(url) {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 900,
    minWidth: 1024,
    minHeight: 720,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(url);

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') {
      return;
    }

    if (input.key === 'F11') {
      event.preventDefault();
      mainWindow.setFullScreen(!mainWindow.isFullScreen());
      return;
    }

    if (input.key === 'Escape' && mainWindow.isFullScreen()) {
      event.preventDefault();
      mainWindow.setFullScreen(false);
    }
  });
}

app.whenReady().then(() => {
  const { server, url } = startServer({ openBrowser: false });
  serverRef = server;
  createMainWindow(url);
});

app.on('window-all-closed', () => {
  if (serverRef) {
    serverRef.close();
  }

  if (process.platform !== 'darwin') {
    app.quit();
  }
});
