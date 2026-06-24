const __URL__ = {
  // JAVA 服务 {
  wflowURL: 'https://nempa/flow',
  recordURL: 'https://nempa/record',
  baseServiceURL: 'https://nempa/main',
  reportServiceURL: 'https://nempa/notify',
  dataTransformServiceURL: 'https://nempa/transfer',
  eventRecordURL: 'https://nempa/event',
  taskURL: 'https://nempa/task',
  fileServiceURL: 'https://nempa/file',
  hisURL: 'https://nempa/history',
  officeCallbackURL: 'https://nempa/file',
  mainHandlerURL: 'https://nempa/plugin',
  monitorURL: 'https://nempa/monitor',
  evalURL: 'https://nempa/conseval',
  fcURL: 'https://nempa/fc',
  resultURL: 'https://nempa/result',
  pointURL: 'https://nempa/point',
  integrationURL: 'https://nempa/integration',
  ealURL: 'https://nempa/eal',
  // JAVA 服务 }

  // .NET 服务 {
  id4URL: 'https://id.heyingji.com.cn:51110',
  mapURL: 'https://nempa:51130',
  tilesURL: 'https://nempa/gtolserver/map/dl/themedl/{z}/{x}/{y}.mvt', //地图瓦片路径
  uaURL: 'https://nempa:52541', // https://ua.heyingji.com.cn:52541/swagger/index.html
  // https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
  // https://mapimg.heyingji.com.cn/map/img/{z}/{y}/{x}.png
  // .NET 服务 }

  // NODE 服务 {
  mainNodeURL: 'https://nempa/node-main', // https://nempa/node-main/doc.html
  urpURL: 'https://nempa', // https://nempa/szh-urp/doc.html
  // NODE 服务 }

  echowallURL: 'https://nempo:8080',
  // http://10.1.0.90:8080 http://10.1.0.173:8080 https://nempa/echowall  https://api.dify.ai/v1

  unitWsURL: 'wss://nempa:8089/',

  opcuaWsConfig: {
    url: 'wss://nempa/ws/uaServerWs',
    // url: 'wss://nemp:62542/',
    showLog: false,
    recordPointPrefix: `__`, // 录制数据点的前缀
    mockPointPrefix: `MOCK_`, // 模拟数据点的前缀
  },

  mqttConfig: {
    appName: 'standard',
    // url: 'ws://10.1.0.155:15675/ws', // 配置此时，不配置 servers 和 transformWsUrl
    options: {
      servers: [
        { host: 'nempmd', port: 15676, protocol: 'wss' },
        // { host: 'nemp', port: 15676, protocol: 'wss' },
        // { host: '10.1.0.155', port: 15675, protocol: 'ws' },
      ],
      // transformWsUrl 方法用于在浏览器中使用 MQTT 的场景，默认情况下，MQTT 自动生成的 url 为 ws://ip:port 形式，
      // 然而服务器要求的格式是 ws://ip:port/ws，所以 MQTT 提供了此接口用于在生成 url 时自定义 url 格式
      // transformWsUrl 与 servers 并存，
      transformWsUrl: (url, opts) => {
        return opts.protocol ? url + 'ws' : url;
      },
      clean: true,
      // clientId: `mqtt_${Math.random().toString(16).substring(2, 15)}`,
      keeplive: 60,
      connectTimeout: 2000,
      uStr: 'szh',
      pStr: 'Szh,111111',
    },
  },
};
