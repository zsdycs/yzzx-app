const mapToolBar = [
  {
    id: 'view',
    icon: 'icon ne-icons-manping',
    title: '全图',
    parameter: {
      center: [121.3778, 36.7011],
      zoom: 11.5,
    },
  },
  {
    id: 'pan',
    icon: 'icon ne-icons-transform',
    title: '平移',
  },
  {
    id: 'switch',
    icon: 'fa fa-globe',
    title: '地图切换',
    child: [
      {
        id: 'basic',
        icon: '',
        img: '/images/icon/biaozhun.png',
        isImg: true,
        title: '标准',
        parameter: {
          name: 'basic',
          style: 'china_basic',
        },
      },
      {
        id: 'blove',
        icon: '',
        isImg: true,
        img: '/images/icon/shense.png',
        title: '深色',
        parameter: {
          name: 'blove',
          style: 'china_blove',
        },
      },
      {
        id: 'gray',
        icon: '',
        isImg: true,
        img: '/images/icon/yinxiang.png',
        title: '影像',
        parameter: {
          name: 'gray',
          style: 'china_img',
        },
      },
      {
        id: 'china_img_new',
        icon: '',
        img: '/images/icon/yinxiang.png',
        isImg: true,
        title: '影像新',
        parameter: {
          name: 'china_img_new',
          style: 'china_img_new',
        },
      },
      {
        id: 'brighthillshade',
        icon: '',
        img: '/images/icon/brighthillshade.png',
        isImg: true,
        title: '地形',
        parameter: {
          name: 'china_brighthillshade',
          style: 'china_brighthillshade',
        },
      },
    ],
  },
  {
    id: 'surveyingAndMappingMap',
    icon: 'icon ne-icons-caog',
    title: '测绘图',
    child: [
      {
        id: '大亚湾核电场区平面图',
        icon: '',
        img: '',
        isImg: false,
        title: '大亚湾核电场区平面图',
        parameter: {
          name: 'DaYaWanHeDianChangQuPingMianTu',
        },
      },
      {
        id: '食入计划区图',
        icon: '',
        isImg: false,
        img: '',
        title: '食入计划区图',
        parameter: {
          name: 'ShiRuJiHuaQuTu',
        },
      },
      {
        id: '烟羽计划区图',
        icon: '',
        isImg: false,
        img: '',
        title: '烟羽计划区图',
        parameter: {
          name: 'YanYuJiHuaQuTu',
        },
      },
    ],
  },
  {
    id: 'measure',
    icon: 'icon ne-icons-mesure',
    title: '量算',
    child: [
      {
        id: 'measure_distance',
        icon: 'icon ne-icons-jlcx',
        title: '距离量算',
        parameter: {
          measure: 'distance',
        },
      },
      {
        id: 'measure_sea',
        icon: 'icon ne-icons-jlcx',
        title: '海里距离',
        parameter: {
          measure: 'seamile',
        },
      },
      {
        id: 'measure_circle',
        icon: 'icon ne-icons-circle-select',
        title: '圆形量算',
        parameter: {
          measure: 'circle',
        },
      },
      {
        id: 'measure_rectangle',
        icon: 'icon ne-icons-rectangle-select',
        title: '矩形量算',
        parameter: {
          measure: 'rectangle',
        },
      },
      {
        id: 'measure_polygon',
        icon: 'icon ne-icons-duobianxing',
        title: '多边形量算',
        parameter: {
          measure: 'polygon',
        },
      },
      {
        id: 'measure_angle',
        icon: 'icon ne-icons-jdcx',
        title: '角度量算',
        parameter: {
          measure: 'angle',
        },
      },
      {
        id: 'measure_sector',
        icon: 'icon ne-icons-sxcx',
        title: '扇形量算',
        parameter: {
          measure: 'sector',
        },
      },
    ],
  },
  {
    id: 'draw_board',
    icon: 'icon ne-icons-paint',
    title: '白板',
  },
  {
    id: 'plotting',
    icon: 'icon ne-icons-edit',
    title: '标绘',
  },
  // {
  //   id: 'bookmark',
  //   icon: 'icon ne-icons-rectangle-2',
  //   title: '书签',
  // },
  {
    id: 'screenshot',
    icon: 'icon ne-icons-jietu',
    title: '截图',
  },
  // {
  //   id: 'query',
  //   icon: 'icon ne-icons-bigger',
  //   title: '资源查询',
  // },
  {
    id: 'clear',
    icon: 'icon ne-icons-delete',
    title: '清空',
  },
];
