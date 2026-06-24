const __EnvmConfig__ = {
  small: {
    unitText: '单位：μGy/h',
    unitTextValue: 'μGy/h',
    stationTypes: ['AS', 'BS'],
    AS: [
      // AS1
      {
        stationName: 'AS1',
        // 站点 相对于地图中心点
        station_x: '-265px',
        station_y: '-830px',
        // 信息 相对于站点位置
        info_x: '34px',
        info_y: '-15px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '23px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A1INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
      // AS2
      {
        stationName: 'AS2',
        // 站点 相对于地图中心点
        station_x: '-216px',
        station_y: '-936px',
        // 信息 相对于站点位置
        info_x: '-39px',
        info_y: '-67px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '23px',
        triangle: 'bottom', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosols-and-iodine-extraction-sample-气溶胶和碘取样 ash-sampling-沉降灰取样
            pointId: 'KRS/A2INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
      // AS3
      {
        stationName: 'AS3',
        // 站点 相对于地图中心点
        station_x: '-154px',
        station_y: '-911px',
        // 信息 相对于站点位置
        info_x: '35px',
        info_y: '-15px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '23px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A3INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
      // AS4
      {
        stationName: 'AS4',
        // 站点 相对于地图中心点
        station_x: '82px',
        station_y: '-1078px',
        // 信息 相对于站点位置
        info_x: '34px',
        info_y: '-16px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '23px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A4INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
      // AS5
      {
        stationName: 'AS5',
        // 站点 相对于地图中心点
        station_x: '-30px',
        station_y: '-845px',
        // 信息 相对于站点位置
        info_x: '35px',
        info_y: '-15px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '23px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A5INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
    ],
    BS: [
      // BS1
      {
        stationName: 'BS1',
        // 站点 相对于地图中心点
        station_x: '-11px',
        station_y: '-1122px',
        // 信息 相对于站点位置
        // info_x: '-110px',
        // info_y: '-16px',
        info_x: '-40px',
        info_y: '38px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '23px',
        triangle: 'top', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B1INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
      // BS2
      {
        stationName: 'BS2',
        // 站点 相对于地图中心点
        station_x: '148px',
        station_y: '-1066px',
        // 信息 相对于站点位置
        info_x: '33px',
        info_y: '-16px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '23px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B2INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
      // BS3
      {
        stationName: 'BS3',
        // 站点 相对于地图中心点
        station_x: '216px',
        station_y: '-789px',
        // 信息 相对于站点位置
        info_x: '-38px',
        info_y: '-66px',
        // 站点名 相对于站点位置
        name_x: '36px',
        name_y: '4px',
        triangle: 'bottom', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B3INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
      // BS4
      {
        stationName: 'BS4',
        // 站点 相对于地图中心点
        station_x: '-108px',
        station_y: '-877px',
        // 信息 相对于站点位置
        info_x: '-112px',
        info_y: '-18px',
        // 站点名 相对于站点位置
        name_x: '36px',
        name_y: '4px',
        triangle: 'right', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B4INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
      // BS5
      {
        stationName: 'BS5',
        // 站点 相对于地图中心点
        station_x: '-152px',
        station_y: '-942px',
        // 信息 相对于站点位置
        info_x: '-38px',
        info_y: '-66px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '23px',
        triangle: 'bottom', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B5INSTANT',
            unit: 'μGy/h',
          },
        ],
      },
    ],
  },
  big: {
    unitText: '',
    stationTypes: ['AS', 'BS'],
    AS: [
      // AS1
      {
        stationName: 'AS1',
        // 站点 相对于地图中心点
        station_x: '-314px',
        station_y: '-420px',
        // 信息 相对于站点位置
        info_x: '33px',
        info_y: '-27px',
        // 站点名 相对于站点位置
        name_x: '0px',
        name_y: '24px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A1INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A1RAINFALL',
            unit: 'mm/h',
          },
          // {
          //   type: 'aerosol-sampling', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
          //   pointId: 'ENVM/HOURRAINFALLAS1',
          //   unit: '',
          // },
          // {
          //   type: 'rainwater-harvesting', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
          //   pointId: 'ENVM/HOURRAINFALLAS2',
          //   unit: '',
          // },
          // {
          //   type: 'gaseous-tritium-and-carbon-sampling', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
          //   pointId: 'ENVM/HOURRAINFALLAS3',
          //   unit: '',
          // },
        ],
      },
      // AS2
      {
        stationName: 'AS2',
        // 站点 相对于地图中心点
        station_x: '-233px',
        station_y: '-616px',
        // 信息 相对于站点位置
        info_x: '-96px',
        info_y: '40px',
        // 站点名 相对于站点位置
        name_x: '0px',
        name_y: '24px',
        triangle: 'bottom', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosols-and-iodine-extraction-sample-气溶胶和碘取样 ash-sampling-沉降灰取样
            pointId: 'KRS/A2INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A2RAINFALL',
            unit: 'mm/h',
          },
          // {
          //   type: 'aerosols-and-iodine-extraction-sample', // radiation-monitoring-辐射监测 aerosols-and-iodine-extraction-sample-气溶胶和碘取样 ash-sampling-沉降灰取样
          //   pointId: 'ENVM/HOURRAINFALLBS2',
          //   unit: '',
          // },
          // {
          //   type: 'ash-sampling', // radiation-monitoring-辐射监测 aerosols-and-iodine-extraction-sample-气溶胶和碘取样 ash-sampling-沉降灰取样
          //   pointId: 'ENVM/WINDDIRECTORYBS3',
          //   unit: '',
          // },
        ],
      },
      // AS3
      {
        stationName: 'AS3',
        // 站点 相对于地图中心点
        station_x: '-120px',
        station_y: '-564px',
        // 信息 相对于站点位置
        info_x: '36px',
        info_y: '-17px',
        // 站点名 相对于站点位置
        name_x: '-24px',
        name_y: '6px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A3INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A3RAINFALL',
            unit: 'mm/h',
          },
          // {
          //   type: 'aerosol-sampling', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
          //   pointId: 'ENVM/WINDSPEEDAS3',
          //   unit: '',
          // },
        ],
      },
      // AS4
      {
        stationName: 'AS4',
        // 站点 相对于地图中心点
        station_x: '293px',
        station_y: '-885px',
        // 信息 相对于站点位置
        info_x: '35px',
        info_y: '-15px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '24px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A4INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A4RAINFALL',
            unit: 'mm/h',
          },
          // {
          //   type: 'aerosol-sampling', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
          //   pointId: 'ENVM/WINDSPEEDAS4',
          //   unit: '',
          // },
          // {
          //   type: 'rainwater-harvesting', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
          //   pointId: 'ENVM/WINDSPEEDBS4',
          //   unit: '',
          // },
        ],
      },
      // AS5
      {
        stationName: 'AS5',
        // 站点 相对于地图中心点
        station_x: '100px',
        station_y: '-460px',
        // 信息 相对于站点位置
        info_x: '-96px',
        info_y: '38px',
        // 站点名 相对于站点位置
        name_x: '-28px',
        name_y: '6px',
        triangle: 'top', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A5INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/A5RAINFALL',
            unit: 'mm/h',
          },
          // {
          //   type: 'aerosol-sampling', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
          //   pointId: 'ENVM/HOURRAINFALLAS5',
          //   unit: '',
          // },
        ],
      },
    ],
    BS: [
      // BS1
      {
        stationName: 'BS1',
        // 站点 相对于地图中心点
        station_x: '-135px',
        station_y: '-1106px',
        // 信息 相对于站点位置
        info_x: '-96px',
        info_y: '40px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '24px',
        triangle: 'top', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B1INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B1RAINFALL',
            unit: 'mm/h',
          },
          // {
          //   type: 'aerosol-sampling', // radiation-monitoring-辐射监测 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
          //   pointId: 'ENVM/WINDSPEEDBS1',
          //   unit: '',
          // },
        ],
      },
      // BS2
      {
        stationName: 'BS2',
        // 站点 相对于地图中心点
        station_x: '230px',
        station_y: '-960px',
        // 信息 相对于站点位置
        info_x: '35px',
        info_y: '-20px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '24px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B2INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B2RAINFALL',
            unit: 'mm/h',
          },
        ],
      },
      // BS3
      {
        stationName: 'BS3',
        // 站点 相对于地图中心点
        station_x: '393px',
        station_y: '-328px',
        // 信息 相对于站点位置
        info_x: '-96px',
        info_y: '38px',
        // 站点名 相对于站点位置
        name_x: '-24px',
        name_y: '6px',
        triangle: 'bottom', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B3INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B3RAINFALL',
            unit: 'mm/h',
          },
        ],
      },
      // BS4
      {
        stationName: 'BS4',
        // 站点 相对于地图中心点
        station_x: '-360px',
        station_y: '-540px',
        // 信息 相对于站点位置
        info_x: '35px',
        info_y: '-20px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '24px',
        triangle: 'left', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B4INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B4RAINFALL',
            unit: 'mm/h',
          },
        ],
      },
      // BS5
      {
        stationName: 'BS5',
        // 站点 相对于地图中心点
        station_x: '-453px',
        station_y: '-695px',
        // 信息 相对于站点位置
        info_x: '-96px',
        info_y: '40px',
        // 站点名 相对于站点位置
        name_x: '9px',
        name_y: '24px',
        triangle: 'bottom', // 三角箭头的位置 top right bottom left
        attrs: [
          {
            type: 'radiation-monitoring', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B5INSTANT',
            unit: 'μGy/h',
          },
          {
            type: 'rainfall', // radiation-monitoring-辐射监测 rainfall-降雨量 aerosol-sampling-气溶胶取样 rainwater-harvesting-雨水收集 gaseous-tritium-and-carbon-sampling-气态氚和碳14取样
            pointId: 'KRS/B5RAINFALL',
            unit: 'mm/h',
          },
        ],
      },
    ],
  },
  chart: [
    {
      id: 1,
      name: 'AS1',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#17d9f8',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/A1INSTANT',
    },
    {
      id: 2,
      name: 'AS2',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#6a7fff',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/A2INSTANT',
    },
    {
      id: 3,
      name: 'AS3',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#984ecb',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/A3INSTANT',
    },
    {
      id: 4,
      name: 'AS4',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#0bcfac',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/A4INSTANT',
    },
    {
      id: 51,
      name: 'AS5',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#e34ab2',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/A5INSTANT',
    },
    {
      id: 5,
      name: 'BS1',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#1276ff',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/B1INSTANT',
    },
    {
      id: 6,
      name: 'BS2',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#e51850',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/B2INSTANT',
    },
    {
      id: 7,
      name: 'BS3',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#fe8625',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/B3INSTANT',
    },
    {
      id: 8,
      name: 'BS4',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#f4c00b',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/B4INSTANT',
    },
    {
      id: 9,
      name: 'BS5',
      stationType: 1,
      lon: 0,
      lat: 0,
      min: 0,
      max: 0,
      val: 0,
      time: '',
      envData: [],
      themeColor: '#f4c00b',
      uaGroup: 'ENV',
      uaTagStr: 'KRS/B5INSTANT',
    },
  ],
  env_alert: 120,
};
