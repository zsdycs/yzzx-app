// 全局变量
const __GLOBAL_SETTINGS__ = {
  entryPath: '/', // 入口地址
  homePagePath: '/home-page', // 首页地址
  singlePageHomePath: '/single-page/main', // 单屏首页
  title: '研制中心厂务智能管理信息平台', // 核电厂智慧核应急指挥系统
  titleDescribe: '',
  defaultThemes: 'dark', // 系统主题 默认：dark，dark-深色 light-浅色
  DrillName: '应急响应模式',
  isAbleChangeTheme: false, // 是否允许切换主题
  appStorage: window.sessionStorage, // 本地存储 @szh-fc/utils/storage-handle
  appStoragePrefix: 'platform', // 本地存储 @szh-fc/utils/storage-handle setKeyPrefixHandler
  emergencyEncyclopediaUrl: 'https://eprims/#/redirect', // 应急百科地址
  isGetFcSyncStatus: false, // 是否获取FC同步状态
  isGetKmSyncStatus: true, // 是否获取KM同步状态
  isEvalMock: false, // 核素迁移 是否使用 mock 数据
  ableSwitchToManageRoleList: [], // 可切换到 管理员 角色的角色列表 例： ['SEH7']
  // 自动设置流程数据配置
  autoSetProcessDataConfig: {
    EmNotice: '应急通告', // 应急通告 includes
    EmStateApply_defName: '应急状态申请', // 应急通告 获取表单数据的流程定义名称 【应急状态申请】 defName
    EmReport: '应急报告', // 应急报告 includes
    EmNotice_YX_defName: '应急通告表-运行控制组', // 应急报告 获取表单数据的流程定义名称 【应急通告】 defName
    EmNotice_ZHB_defName: '应急通告表-指挥部', // 应急报告 获取表单数据的流程定义名称 【应急通告】 defName
    OnSiteSupervision_defName: '华南核与辐射安全监督站核事故现场监督报告', // 华南核与辐射安全监督站核事故现场监督报告 defName
  },
  homeAnimationTime: [
    {
      label: '--',
      value: 0,
    },
    {
      label: '30s',
      value: 30000,
    },
    {
      label: '1m',
      value: 60000,
    },
    {
      label: '3m',
      value: 180000,
    },
    {
      label: '5m',
      value: 300000,
    },
  ],
  mqSyncFileTimeout: 10 * 1000, // MQ 同步文件 超时时间 10 秒
  CheckOutAppCountdownSeconds: 60, // 多长时间未响应自动退出登录，单位：秒

  isCheckMousemove: {
    // 是否检测鼠标移动，长时间未移动自动退出登录
    flag: false,
    time: 10 * 60 * 1000, // 10分钟 = 10 * 60 * 1000 毫秒
  },

  ...__URL__,

  mainHandlerDefaultPath: '/main-handler/exec', // 触发器默认请求路径
  mainAppURL: {
    manage: 'https://nempm',
    platform: 'https://nemp',
  },
  subAppURL: {
    unit: 'https://nemp/unit',
    standard: 'https://nemp/standard',
    wflow: 'https://nemp/wflow',
    extSamg: 'https://nemp/ext-samg',
    serviceMonitoring: 'https://nempmd:9999/dash/main?dashView=1',
    insight: 'http://localhost:9222',
    ext3d3p: 'https://10.15.9.207:8444/#/outreportView',
    // wflow.heyingji.com.cn
    // standard.heyingji.com.cn
    // platform.heyingji.com.cn
    // manage.heyingji.com.cn
    // unit.heyingji.com.cn
  },
  notRegisterSubApp: ['unit', 'extSamg', 'serviceMonitoring', 'insight', 'ext3d3p'], // 不注册到主应用的子应用

  oidcConfig: {
    authority: 'https://nempid4b:51110',
    client_id: 'gh_web_platform',
    redirect_uri: 'https://nemp/#/callback',
    post_logout_redirect_uri: 'https://nemp',
    response_type: 'code',
    scope: 'openid profile userName szh-urp szh-notify szh-et szh-dt szh-dr szh-dh szh-bigevent',
    response_mode: 'query',
  },
  login4AConfig: {
    isLogin4A: true, // 是否启用4A登录

    loginUrl: 'https://uap.cgnpc.com.cn/authcenter/getOauth2Authorize', // 4A 登录地址
    clientId: 'IEMP_DYW', // 客户端ID
    responseType: 'code', // 响应类型(默认:code)
    redirectUri: 'https://nemp/#/callback', // 回调地址
    tokenUri: 'https://nempa/main/login/getOauth2Token', // 获取 token 地址
    logoutUri: 'https://nempa/main/login/logout', // 退出登录 地址
    loginType: 'front', // 登录类型(默认:front)
    storage: 'localStorage', // 存储方式(默认:localStorage)
    isShowLog: false, // 是否显示日志
  },
  SystemName: {
    sysData: 'SYS_DATA', // 系统 SYS_DATA
  },
  uploadConsequenceAssessment: '/static-file/后果评价模板.xlsx',

  homePageMenu: [],

  singlePageMenu: [
    {
      meta: {
        title: '生产保障',
        fontSize: '20px',
      },
      children: [
        {
          optionCode: 'single-page-laundry-system',
          meta: {
            title: '洗衣系统',
          },
        },
        {
          optionCode: 'single-page-hvac-system',
          meta: {
            title: '暖通系统',
          },
        },
        {
          optionCode: 'single-page-water-supply-system',
          meta: {
            title: '给水系统',
          },
        },
        {
          optionCode: 'single-page-elevator-system',
          meta: {
            title: '电梯系统',
          },
        },
      ],
    },
    {
      meta: {
        title: '供配电系统',
        fontSize: '20px',
      },
      children: [
        {
          optionCode: 'single-page-low-voltage-distribution-system',
          meta: {
            title: '高低压配电系统',
          },
        },
        {
          optionCode: 'single-page-emergency-power-supply-system',
          meta: {
            title: '应急供电系统',
          },
        },
      ],
    },
    {
      meta: {
        title: '气体供应',
        fontSize: '20px',
      },
      children: [
        {
          optionCode: 'single-page-hydrogen-system',
          meta: {
            title: '氢气系统',
          },
        },
        {
          optionCode: 'single-page-nitrogen-system',
          meta: {
            title: '氮气系统',
          },
        },
        {
          optionCode: 'single-page-compressed-air-system',
          meta: {
            title: '压空系统',
          },
        },
        {
          optionCode: 'single-page-public-gas-system',
          meta: {
            title: '公用气体系统',
          },
        },
      ],
    },
    {
      optionCode: 'single-page-main',
      meta: {
        title: '首页',
      },
    },
    {
      meta: {
        title: '水处理系统',
        fontSize: '20px',
      },
      children: [
        {
          optionCode: 'single-page-equipment-cooling-water-system',
          meta: {
            title: '设备冷却水',
          },
        },
        {
          optionCode: 'single-page-deionized-water-system',
          meta: {
            title: '去离子水系统',
          },
        },
        {
          optionCode: 'single-page-non-radioactive-sewage-treatment-system',
          meta: {
            title: '污水（非放）处理',
            fontSize: '18px',
          },
        },
      ],
    },
    {
      meta: {
        title: '环保与辐射',
        fontSize: '20px',
      },
      children: [
        {
          optionCode: 'single-page-radioactive-waste-system',
          meta: {
            title: '放射性三废',
          },
        },
        {
          optionCode: 'single-page-environmental-monitoring-system',
          meta: {
            title: '环境监测系统',
          },
        },
        {
          optionCode: 'single-page-radiation-protection-system',
          meta: {
            title: '辐射防护系统',
          },
        },
        {
          optionCode: 'single-page-nuclear-criticality-system',
          meta: {
            title: '核临界系统',
          },
        },
      ],
    },
    {
      meta: {
        title: '安防监控',
        fontSize: '20px',
      },
      children: [
        {
          optionCode: 'single-page-fire-detection-alarm-system',
          meta: {
            title: '火灾探测报警',
          },
        },
        {
          optionCode: 'single-page-video-monitoring-system',
          meta: {
            title: '视频监控系统',
          },
        },
      ],
    },
  ],
};
