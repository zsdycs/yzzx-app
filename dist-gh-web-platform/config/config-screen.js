const __ConfigScreenConfig__ = {
  screenList: [
    /////////////////////////// '1', '2', '3', '4', '5', '6' 号机组使用 ///////////////////////////
    {
      dispName: '机组图',
      dispImgId: '机组图',

      description: '',
      classType: 1,
      applyUnitNo: ['1', '2', '3', '4', '5', '6'],
    },
    /////////////////////////// '1', '2', '3', '4', '5', '6' 号机组使用 ///////////////////////////
    {
      // dispName: '机组总图',
      dispNameData: {
        dark: '一回路概貌图',
        white: '一回路概貌图',
      },
      dispImgId: 'KOO001YLD-DYW',
      parentDispImgId: '机组图',
      description: 'CHECK',
      classType: 1,
      applyUnitNo: ['1', '2'],
    },
    {
      // dispName: '机组总图',
      dispNameData: {
        dark: '一回路概貌图',
        white: '一回路概貌图',
      },
      dispImgId: 'KOO001YLD-L1、2',
      parentDispImgId: '机组图',
      description: '',
      classType: 1,
      applyUnitNo: ['3', '4'],
    },
    {
      // dispName: '机组总图',
      dispNameData: {
        dark: '一回路概貌图',
        white: '一回路概貌图',
      },
      dispImgId: 'KOO001YLD-L3、4',
      parentDispImgId: '机组图',
      description: '',
      classType: 1,
      applyUnitNo: ['5', '6'],
    },
    {
      // dispName: '二回路总图',
      dispNameData: {
        dark: '二回路概貌图',
        white: '二回路概貌图',
      },
      dispImgId: 'KOO002YLD-DYW',
      parentDispImgId: '机组图',
      description: '',
      classType: 1,
      applyUnitNo: ['1', '2'],
    },
    {
      // dispName: '二回路总图',
      dispNameData: {
        dark: '二回路概貌图',
        white: '二回路概貌图',
      },
      dispImgId: 'KOO002YLD-L1、2',
      parentDispImgId: '机组图',
      description: '',
      classType: 1,
      applyUnitNo: ['3', '4'],
    },
    {
      // dispName: '二回路总图',
      dispNameData: {
        dark: '二回路概貌图',
        white: '二回路概貌图',
      },
      dispImgId: 'KOO002YLD-L3、4',
      parentDispImgId: '机组图',
      description: '',
      classType: 1,
      applyUnitNo: ['5', '6'],
    },
    {
      // dispName: '电气总图',
      dispNameData: {
        dark: '电气总图',
        white: '电气总图',
      },
      dispImgId: 'KOO003YLD-DYW',
      parentDispImgId: '机组图',
      description: '',
      classType: 1,
      applyUnitNo: ['1', '2'],
    },
    {
      // dispName: '电气总图',
      dispNameData: {
        dark: '电气总图',
        white: '电气总图',
      },
      dispImgId: 'KOO003YLD-L1、2',
      parentDispImgId: '机组图',
      description: '',
      classType: 1,
      applyUnitNo: ['3', '4'],
    },
    {
      // dispName: '电气总图',
      dispNameData: {
        dark: '电气总图',
        white: '电气总图',
      },
      dispImgId: 'KOO003YLD-L3、4',
      parentDispImgId: '机组图',
      description: '',
      classType: 1,
      applyUnitNo: ['5', '6'],
    },
  ],
  displaysPath: '/standard/ht-storage/displays/DYW/',
  htDisplaysPath: 'displays/DYW/',
  htAccidentSandTableScreenDisplaysPath: 'displays/ZGH_WQK/dark',
  accidentSandTableScreenName: 'EDF', // 事故沙盘组态图名称
  // 安全总图
  SafetyOverview: {
    htDisplaysPath: 'displays/DYW/AQZT',
    screenList: [
      { dispImgId: 'AQZT-DYW', screenType: 'single', applyUnitNo: ['1', '2'] },
      { dispImgId: 'AQZT-L1、2', screenType: 'single', applyUnitNo: ['3', '4'] },
      { dispImgId: 'AQZT-L3、4', screenType: 'single', applyUnitNo: ['5', '6'] },
      { dispImgId: 'AQZT-D-DYW', screenType: 'dual', applyUnitNo: ['1', '2'] },
      { dispImgId: 'AQZT-D-L1、2', screenType: 'dual', applyUnitNo: ['3', '4'] },
      { dispImgId: 'AQZT-D-L3、4', screenType: 'dual', applyUnitNo: ['5', '6'] },
    ],
  },
  selectedUnitNo: '1', // 默认选中的机组号 unitList[].no
  powerStationId: 18, // 默认 电厂 ID
  sysDataName: 'SYS_DATA', // 默认 SYS_DATA
  unitList: [
    {
      id: 1,
      name: '1#',
      no: '1',
      isStop: false,
    },
    {
      id: 2,
      name: '2#',
      no: '2',
      isStop: false,
    },
    {
      id: 3,
      name: '3#',
      no: '3',
      isStop: false,
    },
    {
      id: 4,
      name: '4#',
      no: '4',
      isStop: false,
    },
    {
      id: 9,
      name: '5#',
      no: '5',
      isStop: false,
    },
    {
      id: 10,
      name: '6#',
      no: '6',
      isStop: false,
    },
  ],
};
