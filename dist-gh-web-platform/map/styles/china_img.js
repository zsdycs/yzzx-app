const china_img = {
  version: 8,
  sources: {
    arcgisonline: {
      type: 'raster',
      tiles: [
        // 在线 影像
        // https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
        // gtolserver 影像
        // https://nempa/gtolserver/map/chinamap/arcgisonline/{z}/{x}/{y}.png
        // gtolserver 深色
        // https://nempa/gtolserver/map/chinamap/blove/{z}/{x}/{y}.png
        // gtolserver 浅色
        // https://nempa/gtolserver/map/chinamap/bright/{z}/{x}/{y}.png
        'https://nempa/gtolserver/map/chinamap/arcgisonline/{z}/{x}/{y}.png',
      ],
      tileSize: 256,
    },
    gtol_arcgisonline: {
      type: 'raster',
      tiles: ['https://nempa/gtolserver/map/chinamap/arcgisonline/{z}/{x}/{y}.png'],
      tileSize: 256,
    },
    tianditu_cia: {
      type: 'raster',
      tiles: ['https://nempa/gtolserver/map/chinamap/tianditucia/{z}/{x}/{y}.png'],
      tileSize: 256,
    },
    source_blove: {
      type: 'raster',
      tiles: ['https://nempa/gtolserver/map/chinamap/blove/{z}/{x}/{y}.png'],
      tileSize: 256,
    },
    source_bright: {
      type: 'raster',
      tiles: ['https://nempa/gtolserver/map/chinamap/bright/{z}/{x}/{y}.png'],
      tileSize: 256,
    },
    tileinfo: {
      type: 'raster',
      tiles: ['https://nempa/gtolserver/map/gtolserver/tiimg/{z}/{x}/{y}.png'],
      tileSize: 256,
    },
    dl_bright: {
      type: 'raster',
      tiles: ['https://nempa/gtolserver/map/dl/bright/{z}/{x}/{y}.png'],
      tileSize: 256,
    },
  },
  sprite: 'https://nempa/gtolserver/map/chinamap/markings/res/sprite',
  glyphs: 'https://nempa/gtolserver/map/chinamap/markings/fonts/{fontstack}/{range}.pbf',
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': '#01131d',
      },
    },
    {
      id: 'layer_bg',
      type: 'raster',
      source: 'arcgisonline',
      minzoom: 0,
      maxzoom: 22,
    },
    {
      id: 'layer_tianditu_cia',
      type: 'raster',
      source: 'tianditu_cia',
      minzoom: 0,
      maxzoom: 22,
    },
  ],
};

window.__mapStyle_china_img = china_img;
