const express = require('express');
const path = require('path');
const { exec } = require('child_process');

function startServer(options = {}) {
  const port = Number(options.port) || 18080;
  const shouldOpenBrowser = options.openBrowser !== false;
  const app = express();

  // 静态资源目录（pkg打包会内置）
  // __dirname 在exe运行时会指向解压临时目录
  const staticPath = path.join(__dirname, 'dist-gh-web-platform');
  app.use(express.static(staticPath));

  // 兜底路由，SPA前端刷新404修复
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });

  const server = app.listen(port, () => {
    const url = `http://127.0.0.1:${port}`;
    console.log(`服务已启动：${url}`);
    console.log('请勿关闭此窗口，关闭程序将停止运行');

    if (shouldOpenBrowser) {
      if (process.platform === 'win32') {
        exec(`start "" "${url}"`);
      } else {
        console.log('当前为非 Windows 平台，请手动访问：' + url);
      }
    }
  });

  return { server, url: `http://127.0.0.1:${port}` };
}

if (require.main === module) {
  startServer({ openBrowser: true });
}

module.exports = { startServer };