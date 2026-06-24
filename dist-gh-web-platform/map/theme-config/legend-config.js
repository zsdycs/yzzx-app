import dayawan_dxm_source from './geo-json-source/dxm.js';
import dayawan_hdz_source from './geo-json-source/hdz.js';
import dayawan_yjjhq_source from './geo-json-source/yjjhq.js';
import dayawan_shuiku_source from './geo-json-source/shuiku.js';
import dayawan_gamajcz_source from './geo-json-source/gamajcz.js';
import dayawan_hsgamajcd_source from './geo-json-source/hsgamajcd.js';
import dayawan_matou_source from './geo-json-source/matou.js';
import dayawan_lvyou_source from './geo-json-source/lvyou.js';
import dayawan_xixiaozhan_source from './geo-json-source/xixiaozhan.js';
import dayawan_dzwl_source from './geo-json-source/dzwl.js';
import dayawan_hangxian_source from './geo-json-source/hangxian.js';
import dayawan_hjxc_source from './geo-json-source/hjxc.js';
import dayawan_cllx_wai1_source from './geo-json-source/cllx_wai1.js';
import dayawan_cllx_wai2_source from './geo-json-source/cllx_wai2.js';
import dayawan_cllx_nei_source from './geo-json-source/cllx_nei.js';
import dayawan_ji_he_dian_source from './geo-json-source/ji_he_dian.js';
import dayawan_emergency_site_source from './geo-json-source/emergency-site.js';
import dayawan_xiang_ying_zhong_xin_source from './geo-json-source/xiang_ying_zhong_xin.js';
import dayawan_lu_wang_source from './geo-json-source/lu_wang.js';
import dayawan_dem_source from './geo-json-source/dem_200_50.js';
import dayawan_traffic_control_source from './geo-json-source/traffic-control.js';
import dayawan_video_source from './geo-json-source/video.js';
// import xxxx_source from './geo-json-source/xxx.js'

window.__Dayawang_hdz__ = {
  geoName: '核电站',
  sourceId: 'dayawan_hdz_source', // sourceId
  alwaysDisplay: false, // 是否 一直在地图存在
  flyToConfig: {
    x: 114.54719,
    y: 22.600576,
    z: 15,
  },
  icon: 'hdz.png', // 图标
  layerList: [
    // 一个 source 可配置多个 layer
    {
      id: 'hdz_layer', // layerId
      // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

      type: 'symbol',
      minzoom: 9.5,
      filter: ['==', 'type', 0],
      layout: {
        visibility: 'visible',
        'text-field': '{name}', // name 字段显示在地图上的文字标签
        'text-font': ['msyh'],
        'text-size': 20,
        'text-allow-overlap': true,
        'text-anchor': 'left',
        'text-offset': [1, 0],
        'icon-allow-overlap': true,
        'icon-image': 'hdz', // 图标
        'icon-size': 1,
      },
      paint: {
        'text-color': '#ffffff',
        'text-halo-color': '#2e2e2e',
        'text-halo-width': 1,
      },
    },
    // {
    //   id: 'jizu_layer', // layerId
    //   // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

    //   type: 'symbol',
    //   minzoom: 9.5,
    //   filter: ['==', 'type', 1],
    //   layout: {
    //     visibility: 'visible',
    //     'text-field': '{name}', //name字段显示在地图上的文字标签
    //     'text-font': ['msyh'],
    //     'text-size': 20,
    //     'text-allow-overlap': true,
    //     'text-anchor': 'left',
    //     'text-offset': [1, 0],
    //     'icon-allow-overlap': true,
    //     'icon-image': 'hdz02', //图标
    //     'icon-size': 1,
    //   },
    //   paint: {
    //     'text-color': '#ffffff',
    //     'text-halo-color': '#2e2e2e',
    //     'text-halo-width': 1,
    //   },
    // },
  ],
  geoJsonSource: {
    type: 'geojson',
    // data 值为 geojson 数据
    data: dayawan_hdz_source,
  },
};

// 大亚湾
window.__Dayawang_ConfigList__ = [
  // 核电站
  {
    geoName: '核电站',
    sourceId: 'dayawan_hdz_source', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.54719,
      y: 22.600576,
      z: 15,
    },
    icon: 'hdz.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'hdz_layer', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        maxzoom: 14,
        filter: ['==', 'type', 0],
        layout: {
          visibility: 'visible',
          'text-field': '{name}', // name 字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-allow-overlap': true,
          'icon-image': 'hdz', // 图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
      {
        id: 'hdz_font_layer', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 14,
        filter: ['==', 'type', 1],
        layout: {
          visibility: 'visible',
          'text-field': '{name}', //name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-allow-overlap': true,
          'icon-image': 'hdz02', //图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_hdz_source,
    },
  },
  // 计划区
  {
    geoName: '计划区',
    sourceId: 'yjjhq', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.542,
      y: 22.5988,
      z: 11.5,
    },
    icon: 'jhq.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'yjjhq_10', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        minzoom: 7,
        filter: ['==', 'type', '10km'],
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-dasharray': [3, 2, 1, 2, 3],
          'line-color': 'hsl(203, 92%, 47%)',
          'line-width': 4,
        },
      },
      {
        id: 'yjjhq_label_10km', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        filter: ['==', 'type', 'label_10km'],
        layout: {
          visibility: 'visible',
          'text-field': '{text}',
          'text-font': ['msyh'],
          'text-size': 23,
          'text-allow-overlap': true,
          'text-anchor': 'center',
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': 'hsl(203, 92%, 47%)',
          'text-halo-width': 1,
        },
      },
      {
        id: 'yjjhq_50', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        minzoom: 7,
        filter: ['==', 'type', '50km'],
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-dasharray': [3, 2, 1, 2, 3],
          'line-color': '#ffff00',
          'line-width': 4,
        },
      },
      {
        id: 'yjjhq_label_50km', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 7,
        filter: ['==', 'type', 'label_50km'],
        layout: {
          visibility: 'visible',
          'text-field': '{text}',
          'text-font': ['msyh'],
          'text-size': 23,
          'text-allow-overlap': true,
          'text-anchor': 'center',
        },
        paint: {
          'text-color': '#ffff00',
          'text-halo-color': 'hsl(203, 92%, 47%)',
          'text-halo-width': 1,
        },
      },
      {
        id: 'yjjhq_5', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        minzoom: 7,
        filter: ['==', 'type', '5km'],
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-dasharray': [3, 2, 1, 2, 3],
          'line-color': 'hsl(0, 96%, 51%)',
          'line-width': 4,
        },
      },
      {
        id: 'yjjhq_label_5km', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        filter: ['==', 'type', 'label_5km'],
        layout: {
          visibility: 'visible',
          'text-field': '{text}',
          'text-font': ['msyh'],
          'text-size': 23,
          'text-allow-overlap': true,
          'text-anchor': 'center',
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': 'hsl(0, 96%, 51%)',
          'text-halo-width': 0.8,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_yjjhq_source,
    },
  },
  // 大气辐射监测站 环境监测站
  {
    geoName: '环境监测站',
    sourceId: 'gamajcz', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.54242,
      y: 22.59317,
      z: 12,
    },
    icon: 'GammaDose.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'gamajcz', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        layout: {
          visibility: 'visible',
          'text-field': '{name}', // name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'gamajc', // 图标
          'icon-allow-overlap': true,
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_gamajcz_source,
    },
  },
  // 海上辐射监测站
  {
    geoName: '海上环境监测站',
    sourceId: 'hsgamajcd', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.58792,
      y: 22.59629,
      z: 12.5,
    },
    icon: 'Seafirst.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'hsgamajcd', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        layout: {
          visibility: 'visible',
          'text-field': '{name}', //name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'haishangjc', //图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_hsgamajcd_source,
    },
  },
  // 应急响应中心 zhzx wujiaoxing
  {
    geoName: '应急响应中心',
    sourceId: 'xiang_ying_zhong_xin', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.53855,
      y: 22.60102,
      z: 14.5,
    },
    icon: 'command.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'xiang_ying_zhong_xin1', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        filter: ['==', 'name', '应急指挥中心'],
        layout: {
          visibility: 'visible',
          'text-field': '{name}',
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'zhzx',
          'icon-size': 1,
          'icon-allow-overlap': true,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#000000',
          'text-halo-width': 1,
        },
      },
      {
        id: 'xiang_ying_zhong_xin2', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        filter: ['==', 'name', '应急行动中心'],
        layout: {
          visibility: 'visible',
          'text-field': '{name}',
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'wujiaoxing',
          'icon-size': 1,
          'icon-allow-overlap': true,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#000000',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_xiang_ying_zhong_xin_source,
    },
  },
  // 应急集合点
  {
    geoName: '应急集合点',
    sourceId: 'ji_he_dian', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.53855,
      y: 22.60102,
      z: 14.5,
    },
    icon: 'rally-green.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'yingJiJiHeDian', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        filter: ['==', 'type', '应急集合点'],
        layout: {
          visibility: 'visible',
          'text-field': '{name}',
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'jijiedian-green',
          'icon-size': 1,
          'icon-allow-overlap': true,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#000000',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_ji_he_dian_source,
    },
  },
  // 应急场所
  {
    geoName: '应急场所',
    sourceId: 'emergency_site', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.53855,
      y: 22.60102,
      z: 14.5,
    },
    icon: 'rally.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'emergencySite', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        // filter: ['==', 'type', '应急集合点'],
        layout: {
          visibility: 'visible',
          'text-field': '{name}',
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'jijiedian',
          'icon-size': 1,
          'icon-allow-overlap': true,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#000000',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_emergency_site_source,
    },
  },
  // 交通管制
  {
    geoName: '交通管制',
    sourceId: 'dayawan_traffic_control_source', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.5415,
      y: 22.60226,
      z: 14,
    },
    icon: 'traffic-control.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      // 撤离路线-背景
      {
        id: 'traffic_control_cheliuxian_layer_border', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#fff',
          'line-width': 8,
        },
      },
      // 撤离路线
      {
        id: 'traffic_control_cheliuxian_layer', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#038000',
          'line-width': 6,
        },
      },
      // 红绿灯
      {
        id: 'traffic_control_traffic_light_layer', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        // minzoom: 9.5,
        filter: ['==', 'type', '红绿灯'],
        layout: {
          visibility: 'visible',
          'text-field': '{type}', // name 字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-allow-overlap': true,
          'icon-image': 'traffic-light', // 图标
          'icon-size': 1.5,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
      // 保安/技控点
      {
        id: 'traffic_control_baoan_layer', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        // minzoom: 9.5,
        filter: ['==', 'type', '保安/技控点'],
        layout: {
          visibility: 'visible',
          'text-field': '{type}', // name 字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-allow-overlap': true,
          'icon-image': 'baoan_dian', //图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1.5,
        },
      },
      // 警控点
      {
        id: 'traffic_control_jingkongdian_layer', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        // minzoom: 9.5,
        filter: ['==', 'type', '警控点'],
        layout: {
          visibility: 'visible',
          'text-field': '{type}', // name 字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-allow-overlap': true,
          'icon-image': 'jingkongdian', //图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1.5,
        },
      },
      // 管控区域
      {
        id: 'traffic_control_guankongquyu_layer', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        // minzoom: 9.5,
        filter: ['==', 'type', '管控区域'],
        layout: {
          visibility: 'visible',
          'text-field': '{type}', // name 字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-allow-overlap': true,
          'icon-image': 'guankongquyu', //图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1.5,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_traffic_control_source,
    },
  },
  // 洗消站
  {
    geoName: '洗消站',
    sourceId: 'xixiaozhan', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.45557,
      y: 22.6293,
      z: 12,
    },
    icon: 'DecontaminationStation.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'xixiaozhan', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        layout: {
          visibility: 'visible',
          'text-field': '{name}', //name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'xixiaozhan', //图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_xixiaozhan_source,
    },
  },
  // 场内撤离路线
  {
    geoName: '场内撤离路线',
    sourceId: 'cllx_nei', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.53855,
      y: 22.60102,
      z: 14.5,
    },
    icon: 'chelnei.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'cllx_nei_border', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#fff',
          'line-width': 8,
        },
      },
      {
        id: 'cllx_nei', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#00FF00',
          'line-width': 6,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_cllx_nei_source,
    },
  },
  // 场外撤离路线1
  {
    geoName: '场外撤离路线1',
    sourceId: 'cllx_wai1', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.49571,
      y: 22.62974,
      z: 12.5,
    },
    icon: 'cheliwai1.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'cllx_wai1_border', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#fff',
          'line-width': 8,
        },
      },
      {
        id: 'cllx_wai1', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#e0e046',
          'line-width': 6,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_cllx_wai1_source,
    },
  },
  // 场外撤离路线1
  {
    geoName: '场外撤离路线2',
    sourceId: 'cllx_wai2', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.49571,
      y: 22.62974,
      z: 12.5,
    },
    icon: 'cheliwai2.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'cllx_wai2_border', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#fff',
          'line-width': 8,
        },
      },
      {
        id: 'cllx_wai2', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#ff5500',
          'line-width': 6,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_cllx_wai2_source,
    },
  },
  // 陆上巡测线路
  {
    geoName: '陆上巡测线路',
    sourceId: 'hjxc', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.49492,
      y: 22.5944,
      z: 12,
    },
    icon: 'XUCE.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'hjxc_border', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#fff',
          'line-width': 8,
        },
      },
      {
        id: 'hjxc_a', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        filter: ['==', 'name', 'A线'],
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#00b0f0',
          'line-width': 6,
        },
      },
      {
        id: 'hjxc_b', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        filter: ['==', 'name', 'B线'],
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#92d050',
          'line-width': 6,
        },
      },
      {
        id: 'hjxc_c', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        filter: ['==', 'name', 'C线'],
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#00b050',
          'line-width': 6,
        },
      },
      {
        id: 'hjxc_d', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        filter: ['==', 'name', 'D线'],
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#cf0000',
          'line-width': 6,
        },
      },
      {
        id: 'xclx_label', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        layout: {
          'text-field': '{name}',
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-max-width': 20,
          'symbol-placement': 'line',
        },
        paint: {
          'text-color': '#fff',
          'text-halo-color': '#000',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_hjxc_source,
    },
  },
  // 保护区围栏
  {
    geoName: '保护区围栏',
    sourceId: 'dzwl', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.54977,
      y: 22.60185,
      z: 15,
    },
    icon: 'dianxm.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'dzwl', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        minzoom: 7,
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-dasharray': [2, 2],
          'line-color': '#468be0',
          'line-width': 4,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_dzwl_source,
    },
  },
  // 路网
  {
    geoName: '路网',
    sourceId: 'lu_wang', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.54781,
      y: 22.60192,
      z: 14.5,
    },
    icon: 'gnqh.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'lu_wang_border', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
        },
        paint: {
          'line-color': '#000',
          'line-width': 7,
        },
      },
      {
        id: 'lu_wang', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        layout: {
          visibility: 'visible',
        },
        paint: {
          'line-color': '#FFE68E',
          'line-width': 5,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_lu_wang_source,
    },
  },
  // 水库分布
  {
    geoName: '水库分布',
    sourceId: 'shuiku', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.54271,
      y: 22.5896,
      z: 11.5,
    },
    icon: 'shuiku.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'shuiku', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        layout: {
          visibility: 'visible',
          'text-field': '{name}', //name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true, //文字允许压盖，不会避让
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-allow-overlap': true,
          'icon-image': 'shuiku{property}', //图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_shuiku_source,
    },
  },
  // 码头
  {
    geoName: '码头',
    sourceId: 'matou', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.46633,
      y: 22.57789,
      z: 12,
    },
    icon: 'matou.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'matou', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        layout: {
          visibility: 'visible',
          'text-field': '{name}', //name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'rf_matou', //图标
          'icon-size': 0.5,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_matou_source,
    },
  },
  // 旅游区
  {
    geoName: '旅游区',
    sourceId: 'lvyou', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.5164,
      y: 22.56596,
      z: 12,
    },
    icon: 'lvyouqu.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'lvyou', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        layout: {
          visibility: 'visible',
          'text-field': '{name}\r\n{number}', //name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'lvyouqu', //图标
          'icon-size': 1,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_lvyou_source,
    },
  },
  // 航线
  {
    geoName: '航线',
    sourceId: 'hangxian', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.5331,
      y: 22.7494,
      z: 8,
    },
    icon: 'hangx.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'hangxian', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'line',
        minzoom: 7,
        filter: ['==', '$type', 'LineString'],
        layout: {
          visibility: 'visible',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#00ff00',
          'line-opacity': 0.5,
          'line-width': 4,
        },
      },
      {
        id: 'jichang', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 7,
        filter: ['==', '$type', 'Point'],
        layout: {
          visibility: 'visible',
          'text-field': '{name}', //name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 20,
          'text-allow-overlap': true,
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-image': 'rf_jichang', //图标
          'icon-size': 0.5,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_hangxian_source,
    },
  },
  {
    geoName: '视频监控',
    sourceId: 'video', // sourceId
    alwaysDisplay: false, // 是否 一直在地图存在
    flyToConfig: {
      x: 114.52755,
      y: 22.59587,
      z: 18,
    },
    icon: 'VideoMonitoring.png', // 图标
    layerList: [
      // 一个 source 可配置多个 layer
      {
        id: 'video', // layerId
        // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

        type: 'symbol',
        minzoom: 9.5,
        layout: {
          visibility: 'visible',
          'text-field': '{name}', //name字段显示在地图上的文字标签
          'text-font': ['msyh'],
          'text-size': 8,
          'text-allow-overlap': true, //文字允许压盖，不会避让
          'text-anchor': 'left',
          'text-offset': [1, 0],
          'icon-allow-overlap': true,
          'icon-image': 'shipinjk', //图标
          'icon-size': 0.5,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#2e2e2e',
          'text-halo-width': 1,
        },
      },
    ],
    geoJsonSource: {
      type: 'geojson',
      // data 值为 geojson 数据
      data: dayawan_video_source,
    },
  },

  // -------------------------- 例子【用于复制】 --------------------------
  // // xxxx
  // {
  //     geoName: 'xxxx',
  //     sourceId: 'xxxx', // sourceId
  //     alwaysDisplay: false, // 是否 一直在地图存在
  //     flyToConfig: {
  //         x: 114.53855,
  //         y: 22.60102,
  //         z: 14.5,
  //     },
  //     icon: 'xxxx.png', // 图标
  //     layerList: [
  //         // 一个 source 可配置多个 layer
  //         {
  //             id: 'xxxx', // layerId
  //             // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

  //             "type": "line",
  //             "layout": {
  //                 "visibility": "visible",
  //                 "line-cap": "round"
  //             },
  //             "paint": {
  //                 "line-color": "#fff",
  //                 "line-width": 8
  //             }
  //         },
  //     ],
  //     geoJsonSource: {
  //         type: 'geojson',
  //         // data 值为 geojson 数据
  //         data: xxxx_source
  //     }
  // }
];

// DEM高程
window.__DEM_Legend__ = {
  geoName: 'DEM高程',
  sourceId: 'dem_200_50', // sourceId
  alwaysDisplay: false, // 是否 一直在地图存在
  flyToConfig: {
    x: 114.53076,
    y: 22.60271,
    z: 12,
  },
  icon: 'dem.png', // 图标
  layerList: [
    // 一个 source 可配置多个 layer
    {
      id: 'dem_line', // layerId
      // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

      type: 'line',
      layout: {
        visibility: 'visible',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#00ff00',
        'line-opacity': 0.8,
        'line-width': 1.5,
      },
    },
    {
      id: 'dem_label', // layerId
      // source: '<sourceId>', // 无需配置，自动使用最外层的 sourceId

      type: 'symbol',
      layout: {
        visibility: 'visible',
        'text-field': '{CONTOUR}',
        'text-font': ['msyh'],
        'text-size': 10,
        //"text-allow-overlap": true,
        //"text-max-width": 200,
        'symbol-spacing': 10,
        'symbol-placement': 'line',
      },
      paint: {
        'text-color': '#fff',
        'text-halo-color': '#000',
        'text-halo-width': 1,
      },
    },
  ],
  geoJsonSource: {
    type: 'geojson',
    // data 值为 geojson 数据
    data: dayawan_dem_source,
  },
};

window.__GEO_JSON_SOURCE__ = {
  dayawan_dxm_source,
  dayawan_hdz_source,
  dayawan_yjjhq_source,
  dayawan_shuiku_source,
  dayawan_gamajcz_source,
  dayawan_hsgamajcd_source,
  dayawan_matou_source,
  dayawan_lvyou_source,
  dayawan_xixiaozhan_source,
  dayawan_dzwl_source,
  dayawan_hangxian_source,
  dayawan_hjxc_source,
  dayawan_cllx_wai1_source,
  dayawan_cllx_wai2_source,
  dayawan_cllx_nei_source,
  dayawan_ji_he_dian_source,
  dayawan_emergency_site_source,
  dayawan_xiang_ying_zhong_xin_source,
  dayawan_lu_wang_source,
  dayawan_dem_source,
  dayawan_traffic_control_source,
  dayawan_video_source,
};
