const __Unit_core_parameter_config__ = {
  ModelNameList: [
    '综合',
    '一回路系统',
    '一回路辅助及监测系统',
    '专设安全系统',
    '二回路给水及蒸汽系统',
    '安全壳及通风、放射性监测',
  ],
  ModelDataSourceList: [
    // 综合 大亚湾核电站
    {
      modelName: '综合',
      powerName: '大亚湾核电站', // 大亚湾核电站 岭澳核电站
      no: 1,
      powerUnitId: 1,
      nodes: [
        // {
        //   dispName: 'KPS305EU',
        //   description: '堆芯最大压力',
        //   value: '15.5',
        //   unit: 'MPa',
        //   nodeId: {
        //     kns: 'TODO',
        //     dcs: 'TODO',
        //     SIMULATOR: 'TODO',
        //   },
        // },
        [
          {
            dispName: 'RIC504VE',
            description: '堆芯饱和裕度',
            value: '***',
            // value: '11.5',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RIC504VE',
              dcs: 'D1/D1RIC504VE',
              SIMULATOR: 'MD1/D1RIC504VE',
            },
          },
        ],
        [
          {
            dispName: 'KPS162VE',
            description: '顶盖饱和裕度（A列）',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1KPS162VE',
              dcs: 'D1/D1KPS162VE',
              SIMULATOR: 'MD1/D1KPS162VE',
            },
          },
          {
            dispName: 'KPS163VE',
            description: '顶盖饱和裕度（B列）',
            value: '***',
            // value: '11.5',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1KPS163VE',
              dcs: 'D1/D1KPS163VE',
              SIMULATOR: 'MD1/D1KPS163VE',
            },
          },
          {
            dispName: 'KPS308EU',
            description: '压力容器液位（A列）',

            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'D1/D1RIC510VE',
              dcs: 'D1/D1RIC510VE',
              SIMULATOR: 'MD1/D1RIC510VE',
            },
          },
          {
            dispName: 'RIC610VE',
            description: '压力容器液位（B列）',
            value: '***',
            // value: '11.5',
            unit: '%',
            nodeId: {
              kns: 'D1/D1RIC610VE',
              dcs: 'D1/D1RIC610VE',
              SIMULATOR: 'MD1/D1RIC610VE',
            },
          },
        ],
      ],
    },
    {
      modelName: '综合',
      powerName: '大亚湾核电站', // 大亚湾核电站 岭澳核电站
      no: 2,
      powerUnitId: 2,
      nodes: [
        // {
        //   dispName: 'KPS305EU',
        //   description: '堆芯最大压力',
        //   value: '15.5',
        //   unit: 'MPa',
        //   nodeId: {
        //     kns: 'TODO',
        //     dcs: 'TODO',
        //     SIMULATOR: 'TODO',
        //   },
        // },
        [
          {
            dispName: 'RIC504VE',
            description: '堆芯饱和裕度',
            value: '***',
            // value: '11.5',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RIC504VE',
              dcs: 'D2/D2RIC504VE',
              SIMULATOR: 'MD1/D1RIC504VE',
            },
          },
        ],
        [
          {
            dispName: 'KPS162VE',
            description: '顶盖饱和裕度（A列）',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2KPS162VE',
              dcs: 'D2/D2KPS162VE',
              SIMULATOR: 'MD1/D1KPS162VE',
            },
          },
          {
            dispName: 'KPS163VE',
            description: '顶盖饱和裕度（B列）',
            value: '***',
            // value: '11.5',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2KPS163VE',
              dcs: 'D2/D2KPS163VE',
              SIMULATOR: 'MD1/D1KPS163VE',
            },
          },
          {
            dispName: 'KPS308EU',
            description: '压力容器液位（A列）',

            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'D2/D2RIC510VE',
              dcs: 'D2/D2RIC510VE',
              SIMULATOR: 'MD1/D1RIC510VE',
            },
          },
          {
            dispName: 'RIC610VE',
            description: '压力容器液位（B列）',
            value: '***',
            // value: '11.5',
            unit: '%',
            nodeId: {
              kns: 'D2/D2RIC610VE',
              dcs: 'D2/D2RIC610VE',
              SIMULATOR: 'MD1/D1RIC610VE',
            },
          },
        ],
      ],
    },
    // 综合 岭澳核电站
    {
      modelName: '综合',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 1,
      powerUnitId: 3,
      nodes: [
        // {
        //   dispName: 'KPS305EU',
        //   description: '堆芯最大压力',
        //   value: '***',
        // value: '15.5',
        //   unit: 'MPa',
        // },
        [
          {
            dispName: 'RIC009VE',
            description: '堆芯饱和裕度',
            value: '***',
            // value: '11.5',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RIC009VE',
              dcs: 'L1/L1RIC009VE',
              SIMULATOR: 'ML1/L1RIC009VE',
            },
          },
        ],
        [
          {
            dispName: 'KPS162VE',
            description: '顶盖饱和裕度(A列)',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1KPS162VE',
              dcs: 'L1/L1KPS162VE',
              SIMULATOR: 'ML1/L1KPS162VE',
            },
          },
          {
            dispName: 'KPS163VE',
            description: '顶盖饱和裕度(B列)',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1KPS163VE',
              dcs: 'L1/L1KPS163VE',
              SIMULATOR: 'ML1/L1KPS163VE',
            },
          },
          {
            dispName: 'KPS308EU',
            description: '压力容器液位(A列)',
            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'L1/L1RIC510VE',
              dcs: 'L1/L1RIC510VE',
              SIMULATOR: 'ML1/L1RIC510VE',
            },
          },
          {
            dispName: 'KPS308EU',
            description: '压力容器液位(B列)',
            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'L1/L1RIC610VE',
              dcs: 'L1/L1RIC610VE',
              SIMULATOR: 'ML1/L1RIC610VE',
            },
          },
        ],
      ],
    },
    {
      modelName: '综合',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 2,
      powerUnitId: 4,
      nodes: [
        // {
        //   dispName: 'KPS305EU',
        //   description: '堆芯最大压力',
        //   value: '***',
        // value: '15.5',
        //   unit: 'MPa',
        // },
        [
          {
            dispName: 'RIC009VE',
            description: '堆芯饱和裕度',
            value: '***',
            // value: '11.5',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RIC009VE',
              dcs: 'L2/L2RIC009VE',
              SIMULATOR: 'ML1/L1RIC009VE',
            },
          },
        ],
        [
          {
            dispName: 'KPS162VE',
            description: '顶盖饱和裕度(A列)',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2KPS162VE',
              dcs: 'L2/L2KPS162VE',
              SIMULATOR: 'ML1/L1KPS162VE',
            },
          },
          {
            dispName: 'KPS163VE',
            description: '顶盖饱和裕度(B列)',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2KPS163VE',
              dcs: 'L2/L2KPS163VE',
              SIMULATOR: 'ML1/L1KPS163VE',
            },
          },
          {
            dispName: 'KPS308EU',
            description: '压力容器液位(A列)',
            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'L2/L2RIC510VE',
              dcs: 'L2/L2RIC510VE',
              SIMULATOR: 'ML1/L1RIC510VE',
            },
          },
          {
            dispName: 'KPS308EU',
            description: '压力容器液位(B列)',
            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'L2/L2RIC610VE',
              dcs: 'L2/L2RIC610VE',
              SIMULATOR: 'ML1/L1RIC610VE',
            },
          },
        ],
      ],
    },
    {
      modelName: '综合',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 3,
      powerUnitId: 5,
      nodes: [
        // {
        //   dispName: 'KPS305EU',
        //   description: '堆芯最大压力',
        //   value: '***',
        // value: '15.5',
        //   unit: 'MPa',
        // },
        [
          {
            dispName: 'RIC127KM',
            description: '堆芯饱和裕度',
            value: '***',
            // value: '11.5',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RIC127KMX_XQ01',
              dcs: 'L3/3RIC127KMX_XQ01',
              SIMULATOR: 'ML3/3RIC127KMX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RIC123KM',
            description: '顶盖饱和裕度（A列）',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RIC123KMX_XQ01',
              dcs: 'L3/3RIC123KMX_XQ01',
              SIMULATOR: 'ML3/3RIC123KMX_XQ01',
            },
          },
          {
            dispName: 'RIC123KM',
            description: '顶盖饱和裕度（B列）',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RIC223KMX_XQ01',
              dcs: 'L3/3RIC223KMX_XQ01',
              SIMULATOR: 'ML3/3RIC223KMX_XQ01',
            },
          },
          {
            dispName: 'RIC128KM',
            description: '压力容器液位(A列)',
            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'L3/3RIC128KMX_XQ01',
              dcs: 'L3/3RIC128KMX_XQ01',
              SIMULATOR: 'ML3/3RIC128KMX_XQ01',
            },
          },
          {
            dispName: 'RIC228KM',
            description: '压力容器液位(B列)',
            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'L3/3RIC228KMX_XQ01',
              dcs: 'L3/3RIC228KMX_XQ01',
              SIMULATOR: 'ML3/3RIC228KMX_XQ01',
            },
          },
        ],
      ],
    },
    {
      modelName: '综合',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 4,
      powerUnitId: 6,
      nodes: [
        // {
        //   dispName: 'KPS305EU',
        //   description: '堆芯最大压力',
        //   value: '***',
        // value: '15.5',
        //   unit: 'MPa',
        // },
        [
          {
            dispName: 'RIC127KM',
            description: '堆芯饱和裕度',
            value: '***',
            // value: '11.5',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RIC127KMX_XQ01',
              dcs: 'L4/4RIC127KMX_XQ01',
              SIMULATOR: 'ML3/3RIC127KMX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RIC123KM',
            description: '顶盖饱和裕度（A列）',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RIC123KMX_XQ01',
              dcs: 'L4/4RIC123KMX_XQ01',
              SIMULATOR: 'ML3/3RIC123KMX_XQ01',
            },
          },
          {
            dispName: 'RIC123KM',
            description: '顶盖饱和裕度（B列）',
            value: '***',
            // value: '52.2',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RIC223KMX_XQ01',
              dcs: 'L4/4RIC223KMX_XQ01',
              SIMULATOR: 'ML3/3RIC223KMX_XQ01',
            },
          },
          {
            dispName: 'RIC128KM',
            description: '压力容器液位(A列)',
            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'L4/4RIC128KMX_XQ01',
              dcs: 'L4/4RIC128KMX_XQ01',
              SIMULATOR: 'ML3/3RIC128KMX_XQ01',
            },
          },
          {
            dispName: 'RIC228KM',
            description: '压力容器液位(B列)',
            value: '***',
            // value: '109.0 ',
            unit: '%',
            nodeId: {
              kns: 'L4/4RIC228KMX_XQ01',
              dcs: 'L4/4RIC228KMX_XQ01',
              SIMULATOR: 'ML3/3RIC228KMX_XQ01',
            },
          },
        ],
      ],
    },
    // 一回路系统 大亚湾核电站
    {
      modelName: '一回路系统',
      powerName: '大亚湾核电站',
      no: 1,
      powerUnitId: 1,
      nodes: [
        [
          {
            dispName: 'RCP037MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'D1/D1RCP037MP',
              dcs: 'D1/D1RCP037MP',
              SIMULATOR: 'MD1/D1RCP037MP',
            },
          },
          {
            dispName: 'RCP039MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'D1/D1RCP039MP',
              dcs: 'D1/D1RCP039MP',
              SIMULATOR: 'MD1/D1RCP039MP',
            },
          },
        ],
        [
          {
            dispName: 'RCP007MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1RCP007MN',
              dcs: 'D1/D1RCP007MN',
              SIMULATOR: 'MD1/D1RCP007MN',
            },
          },
          {
            dispName: 'RCP008MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1RCP008MN',
              dcs: 'D1/D1RCP008MN',
              SIMULATOR: 'MD1/D1RCP008MN',
            },
          },
          {
            dispName: 'RCP011MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1RCP011MN',
              dcs: 'D1/D1RCP011MN',
              SIMULATOR: 'MD1/D1RCP011MN',
            },
          },
        ],
        [
          {
            dispName: 'RCP009MT',
            description: 'PZR汽相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RCP009MT',
              dcs: 'D1/D1RCP009MT',
              SIMULATOR: 'MD1/D1RCP009MT',
            },
          },
          {
            dispName: 'RCP010MT',
            description: 'PZR液相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RCP010MT',
              dcs: 'D1/D1RCP010MT',
              SIMULATOR: 'MD1/D1RCP010MT',
            },
          },
          {
            dispName: 'RCP024MP',
            description: 'PZR泄压箱压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'D1/D1RCP024MP',
              dcs: 'D1/D1RCP024MP',
              SIMULATOR: 'MD1/D1RCP024MP',
            },
          },
        ],
        [
          {
            dispName: 'RCP090MT',
            description: 'PORV1泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RCP090MT',
              dcs: 'D1/D1RCP090MT',
              SIMULATOR: 'MD1/D1RCP090MT',
            },
          },
          {
            dispName: 'RCP091MT',
            description: 'PORV2泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RCP091MT',
              dcs: 'D1/D1RCP091MT',
              SIMULATOR: 'MD1/D1RCP091MT',
            },
          },
          {
            dispName: 'RCP092MT',
            description: 'PORV3泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RCP092MT',
              dcs: 'D1/D1RCP092MT',
              SIMULATOR: 'MD1/D1RCP092MT',
            },
          },
        ],
        [
          {
            dispName: 'RCP120MT',
            description: '001PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RCP120MT',
              dcs: 'D1/D1RCP120MT',
              SIMULATOR: 'MD1/D1RCP120MT',
            },
          },
          {
            dispName: 'RCP220MT',
            description: '002PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RCP220MT',
              dcs: 'D1/D1RCP220MT',
              SIMULATOR: 'MD1/D1RCP220MT',
            },
          },
          {
            dispName: 'RCP320MT',
            description: '003PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1RCP320MT',
              dcs: 'D1/D1RCP320MT',
              SIMULATOR: 'MD1/D1RCP320MT',
            },
          },
        ],
        {
          dispName: 'RCP028MT',
          description: '一环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1RCP028MT',
            dcs: 'D1/D1RCP028MT',
            SIMULATOR: 'MD1/D1RCP028MT',
          },
        },
        {
          dispName: 'RCP029MT',
          description: '一环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1RCP029MT',
            dcs: 'D1/D1RCP029MT',
            SIMULATOR: 'MD1/D1RCP029MT',
          },
        },
        {
          dispName: 'RCP043MT',
          description: '二环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1RCP043MT',
            dcs: 'D1/D1RCP043MT',
            SIMULATOR: 'MD1/D1RCP043MT',
          },
        },
        {
          dispName: 'RCP044MT',
          description: '二环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1RCP044MT',
            dcs: 'D1/D1RCP044MT',
            SIMULATOR: 'MD1/D1RCP044MT',
          },
        },
        {
          dispName: 'RCP055MT',
          description: '三环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1RCP055MT',
            dcs: 'D1/D1RCP055MT',
            SIMULATOR: 'MD1/D1RCP055MT',
          },
        },
        {
          dispName: 'RCP056MT',
          description: '三环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1RCP056MT',
            dcs: 'D1/D1RCP056MT',
            SIMULATOR: 'MD1/D1RCP056MT',
          },
        },
      ],
    },
    {
      modelName: '一回路系统',
      powerName: '大亚湾核电站',
      no: 2,
      powerUnitId: 2,
      nodes: [
        [
          {
            dispName: 'RCP037MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'D2/D2RCP037MP',
              dcs: 'D2/D2RCP037MP',
              SIMULATOR: 'MD1/D1RCP037MP',
            },
          },
          {
            dispName: 'RCP039MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'D2/D2RCP039MP',
              dcs: 'D2/D2RCP039MP',
              SIMULATOR: 'MD1/D1RCP039MP',
            },
          },
        ],
        [
          {
            dispName: 'RCP007MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2RCP007MN',
              dcs: 'D2/D2RCP007MN',
              SIMULATOR: 'MD1/D1RCP007MN',
            },
          },
          {
            dispName: 'RCP008MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2RCP008MN',
              dcs: 'D2/D2RCP008MN',
              SIMULATOR: 'MD1/D1RCP008MN',
            },
          },
          {
            dispName: 'RCP011MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2RCP011MN',
              dcs: 'D2/D2RCP011MN',
              SIMULATOR: 'MD1/D1RCP011MN',
            },
          },
        ],
        [
          {
            dispName: 'RCP009MT',
            description: 'PZR汽相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RCP009MT',
              dcs: 'D2/D2RCP009MT',
              SIMULATOR: 'MD1/D1RCP009MT',
            },
          },
          {
            dispName: 'RCP010MT',
            description: 'PZR液相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RCP010MT',
              dcs: 'D2/D2RCP010MT',
              SIMULATOR: 'MD1/D1RCP010MT',
            },
          },
          {
            dispName: 'RCP024MP',
            description: 'PZR泄压箱压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'D2/D2RCP024MP',
              dcs: 'D2/D2RCP024MP',
              SIMULATOR: 'MD1/D1RCP024MP',
            },
          },
        ],
        [
          {
            dispName: 'RCP090MT',
            description: 'PORV1泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RCP090MT',
              dcs: 'D2/D2RCP090MT',
              SIMULATOR: 'MD1/D1RCP090MT',
            },
          },
          {
            dispName: 'RCP091MT',
            description: 'PORV2泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RCP091MT',
              dcs: 'D2/D2RCP091MT',
              SIMULATOR: 'MD1/D1RCP091MT',
            },
          },
          {
            dispName: 'RCP092MT',
            description: 'PORV3泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RCP092MT',
              dcs: 'D2/D2RCP092MT',
              SIMULATOR: 'MD1/D1RCP092MT',
            },
          },
        ],
        [
          {
            dispName: 'RCP120MT',
            description: '001PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RCP120MT',
              dcs: 'D2/D2RCP120MT',
              SIMULATOR: 'MD1/D1RCP120MT',
            },
          },
          {
            dispName: 'RCP220MT',
            description: '002PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RCP220MT',
              dcs: 'D2/D2RCP220MT',
              SIMULATOR: 'MD1/D1RCP220MT',
            },
          },
          {
            dispName: 'RCP320MT',
            description: '003PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2RCP320MT',
              dcs: 'D2/D2RCP320MT',
              SIMULATOR: 'MD1/D1RCP320MT',
            },
          },
        ],
        {
          dispName: 'RCP028MT',
          description: '一环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2RCP028MT',
            dcs: 'D2/D2RCP028MT',
            SIMULATOR: 'MD1/D1RCP028MT',
          },
        },
        {
          dispName: 'RCP029MT',
          description: '一环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2RCP029MT',
            dcs: 'D2/D2RCP029MT',
            SIMULATOR: 'MD1/D1RCP029MT',
          },
        },
        {
          dispName: 'RCP043MT',
          description: '二环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2RCP043MT',
            dcs: 'D2/D2RCP043MT',
            SIMULATOR: 'MD1/D1RCP043MT',
          },
        },
        {
          dispName: 'RCP044MT',
          description: '二环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2RCP044MT',
            dcs: 'D2/D2RCP044MT',
            SIMULATOR: 'MD1/D1RCP044MT',
          },
        },
        {
          dispName: 'RCP055MT',
          description: '三环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2RCP055MT',
            dcs: 'D2/D2RCP055MT',
            SIMULATOR: 'MD1/D1RCP055MT',
          },
        },
        {
          dispName: 'RCP056MT',
          description: '三环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2RCP056MT',
            dcs: 'D2/D2RCP056MT',
            SIMULATOR: 'MD1/D1RCP056MT',
          },
        },
      ],
    },
    {
      modelName: '一回路系统',
      powerName: '岭澳核电站',
      no: 1,
      powerUnitId: 3,
      nodes: [
        [
          {
            dispName: 'RCP037MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L1/L1RCP037MP',
              dcs: 'L1/L1RCP037MP',
              SIMULATOR: 'ML1/L1RCP037MP',
            },
          },
          {
            dispName: 'RCP039MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L1/L1RCP039MP',
              dcs: 'L1/L1RCP039MP',
              SIMULATOR: 'ML1/L1RCP039MP',
            },
          },
        ],
        [
          {
            dispName: 'RCP007MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1RCP007MN',
              dcs: 'L1/L1RCP007MN',
              SIMULATOR: 'ML1/L1RCP007MN',
            },
          },
          {
            dispName: 'RCP008MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1RCP008MN',
              dcs: 'L1/L1RCP008MN',
              SIMULATOR: 'ML1/L1RCP008MN',
            },
          },
          {
            dispName: 'RCP011MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1RCP011MN',
              dcs: 'L1/L1RCP011MN',
              SIMULATOR: 'ML1/L1RCP011MN',
            },
          },
        ],
        [
          {
            dispName: 'RCP009MT',
            description: 'PZR汽相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RCP009MT',
              dcs: 'L1/L1RCP009MT',
              SIMULATOR: 'ML1/L1RCP009MT',
            },
          },
          {
            dispName: 'RCP010MT',
            description: 'PZR液相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RCP010MT',
              dcs: 'L1/L1RCP010MT',
              SIMULATOR: 'ML1/L1RCP010MT',
            },
          },
          {
            dispName: 'RCP024MP',
            description: 'PZR泄压箱压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L1/L1RCP024MP',
              dcs: 'L1/L1RCP024MP',
              SIMULATOR: 'ML1/L1RCP024MP',
            },
          },
        ],
        [
          {
            dispName: 'RCP090MT',
            description: 'PORV1泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RCP090MT',
              dcs: 'L1/L1RCP090MT',
              SIMULATOR: 'ML1/L1RCP090MT',
            },
          },
          {
            dispName: 'RCP091MT',
            description: 'PORV2泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RCP091MT',
              dcs: 'L1/L1RCP091MT',
              SIMULATOR: 'ML1/L1RCP091MT',
            },
          },
          {
            dispName: 'RCP092MT',
            description: 'PORV3泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RCP092MT',
              dcs: 'L1/L1RCP092MT',
              SIMULATOR: 'ML1/L1RCP092MT',
            },
          },
        ],
        [
          {
            dispName: 'RCP120MT',
            description: '001PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RCP120MT',
              dcs: 'L1/L1RCP120MT',
              SIMULATOR: 'ML1/L1RCP120MT',
            },
          },
          {
            dispName: 'RCP220MT',
            description: '002PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RCP220MT',
              dcs: 'L1/L1RCP220MT',
              SIMULATOR: 'ML1/L1RCP220MT',
            },
          },
          {
            dispName: 'RCP320MT',
            description: '003PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RCP320MT',
              dcs: 'L1/L1RCP320MT',
              SIMULATOR: 'ML1/L1RCP320MT',
            },
          },
        ],
        {
          dispName: 'RCP028MT',
          description: '一环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L1/L1RCP028MT',
            dcs: 'L1/L1RCP028MT',
            SIMULATOR: 'ML1/L1RCP028MT',
          },
        },
        {
          dispName: 'RCP029MT',
          description: '一环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L1/L1RCP029MT',
            dcs: 'L1/L1RCP029MT',
            SIMULATOR: 'ML1/L1RCP029MT',
          },
        },
        {
          dispName: 'RCP043MT',
          description: '二环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L1/L1RCP043MT',
            dcs: 'L1/L1RCP043MT',
            SIMULATOR: 'ML1/L1RCP043MT',
          },
        },
        {
          dispName: 'RCP044MT',
          description: '二环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L1/L1RCP044MT',
            dcs: 'L1/L1RCP044MT',
            SIMULATOR: 'ML1/L1RCP044MT',
          },
        },
        {
          dispName: 'RCP055MT',
          description: '三环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L1/L1RCP055MT',
            dcs: 'L1/L1RCP055MT',
            SIMULATOR: 'ML1/L1RCP055MT',
          },
        },
        {
          dispName: 'RCP056MT',
          description: '三环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L1/L1RCP056MT',
            dcs: 'L1/L1RCP056MT',
            SIMULATOR: 'ML1/L1RCP056MT',
          },
        },
      ],
    },
    {
      modelName: '一回路系统',
      powerName: '岭澳核电站',
      no: 2,
      powerUnitId: 4,
      nodes: [
        [
          {
            dispName: 'RCP037MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L2/L2RCP037MP',
              dcs: 'L2/L2RCP037MP',
              SIMULATOR: 'ML1/L1RCP037MP',
            },
          },
          {
            dispName: 'RCP039MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L2/L2RCP039MP',
              dcs: 'L2/L2RCP039MP',
              SIMULATOR: 'ML1/L1RCP039MP',
            },
          },
        ],
        [
          {
            dispName: 'RCP007MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2RCP007MN',
              dcs: 'L2/L2RCP007MN',
              SIMULATOR: 'ML1/L1RCP007MN',
            },
          },
          {
            dispName: 'RCP008MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2RCP008MN',
              dcs: 'L2/L2RCP008MN',
              SIMULATOR: 'ML1/L1RCP008MN',
            },
          },
          {
            dispName: 'RCP011MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2RCP011MN',
              dcs: 'L2/L2RCP011MN',
              SIMULATOR: 'ML1/L1RCP011MN',
            },
          },
        ],
        [
          {
            dispName: 'RCP009MT',
            description: 'PZR汽相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RCP009MT',
              dcs: 'L2/L2RCP009MT',
              SIMULATOR: 'ML1/L1RCP009MT',
            },
          },
          {
            dispName: 'RCP010MT',
            description: 'PZR液相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RCP010MT',
              dcs: 'L2/L2RCP010MT',
              SIMULATOR: 'ML1/L1RCP010MT',
            },
          },
          {
            dispName: 'RCP024MP',
            description: 'PZR泄压箱压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L2/L2RCP024MP',
              dcs: 'L2/L2RCP024MP',
              SIMULATOR: 'ML1/L1RCP024MP',
            },
          },
        ],
        [
          {
            dispName: 'RCP090MT',
            description: 'PORV1泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RCP090MT',
              dcs: 'L2/L2RCP090MT',
              SIMULATOR: 'ML1/L1RCP090MT',
            },
          },
          {
            dispName: 'RCP091MT',
            description: 'PORV2泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RCP091MT',
              dcs: 'L2/L2RCP091MT',
              SIMULATOR: 'ML1/L1RCP091MT',
            },
          },
          {
            dispName: 'RCP092MT',
            description: 'PORV3泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RCP092MT',
              dcs: 'L2/L2RCP092MT',
              SIMULATOR: 'ML1/L1RCP092MT',
            },
          },
        ],
        [
          {
            dispName: 'RCP120MT',
            description: '001PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RCP120MT',
              dcs: 'L2/L2RCP120MT',
              SIMULATOR: 'ML1/L1RCP120MT',
            },
          },
          {
            dispName: 'RCP220MT',
            description: '002PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RCP220MT',
              dcs: 'L2/L2RCP220MT',
              SIMULATOR: 'ML1/L1RCP220MT',
            },
          },
          {
            dispName: 'RCP320MT',
            description: '003PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RCP320MT',
              dcs: 'L2/L2RCP320MT',
              SIMULATOR: 'ML1/L1RCP320MT',
            },
          },
        ],
        {
          dispName: 'RCP028MT',
          description: '一环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L2/L2RCP028MT',
            dcs: 'L2/L2RCP028MT',
            SIMULATOR: 'ML1/L1RCP028MT',
          },
        },
        {
          dispName: 'RCP029MT',
          description: '一环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L2/L2RCP029MT',
            dcs: 'L2/L2RCP029MT',
            SIMULATOR: 'ML1/L1RCP029MT',
          },
        },
        {
          dispName: 'RCP043MT',
          description: '二环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L2/L2RCP043MT',
            dcs: 'L2/L2RCP043MT',
            SIMULATOR: 'ML1/L1RCP043MT',
          },
        },
        {
          dispName: 'RCP044MT',
          description: '二环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L2/L2RCP044MT',
            dcs: 'L2/L2RCP044MT',
            SIMULATOR: 'ML1/L1RCP044MT',
          },
        },
        {
          dispName: 'RCP055MT',
          description: '三环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L2/L2RCP055MT',
            dcs: 'L2/L2RCP055MT',
            SIMULATOR: 'ML1/L1RCP055MT',
          },
        },
        {
          dispName: 'RCP056MT',
          description: '三环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L2/L2RCP056MT',
            dcs: 'L2/L2RCP056MT',
            SIMULATOR: 'ML1/L1RCP056MT',
          },
        },
      ],
    },
    {
      modelName: '一回路系统',
      powerName: '岭澳核电站',
      no: 3,
      powerUnitId: 5,
      nodes: [
        [
          {
            dispName: 'RCP037MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L3/3RCP037MPX_XQ01',
              dcs: 'L3/3RCP037MPX_XQ01',
              SIMULATOR: 'ML3/3RCP037MPX_XQ01',
            },
          },
          {
            dispName: 'RCP039MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L3/3RCP039MPX_XQ01',
              dcs: 'L3/3RCP039MPX_XQ01',
              SIMULATOR: 'ML3/3RCP039MPX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RCP007MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L3/3RCP007MNX_XQ01',
              dcs: 'L3/3RCP007MNX_XQ01',
              SIMULATOR: 'ML3/3RCP007MNX_XQ01',
            },
          },
          {
            dispName: 'RCP008MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L3/3RCP008MNX_XQ01',
              dcs: 'L3/3RCP008MNX_XQ01',
              SIMULATOR: 'ML3/3RCP008MNX_XQ01',
            },
          },
          {
            dispName: 'RCP011MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L3/3RCP011MNX_XQ01',
              dcs: 'L3/3RCP011MNX_XQ01',
              SIMULATOR: 'ML3/3RCP011MNX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RCP009MT',
            description: 'PZR汽相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RCP009MT_XQ01',
              dcs: 'L3/3RCP009MT_XQ01',
              SIMULATOR: 'ML3/3RCP009MT_XQ01',
            },
          },
          {
            dispName: 'RCP010MT',
            description: 'PZR液相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RCP010MTX_XQ01',
              dcs: 'L3/3RCP010MTX_XQ01',
              SIMULATOR: 'ML3/3RCP010MTX_XQ01',
            },
          },
          {
            dispName: 'RCP024MP',
            description: 'PZR泄压箱压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L3/3RCP024MP_XQ01',
              dcs: 'L3/3RCP024MP_XQ01',
              SIMULATOR: 'ML3/3RCP024MP_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RCP090MT',
            description: 'PORV1泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RCP090MT_XQ01',
              dcs: 'L3/3RCP090MT_XQ01',
              SIMULATOR: 'ML3/3RCP090MT_XQ01',
            },
          },
          {
            dispName: 'RCP091MT',
            description: 'PORV2泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RCP091MT_XQ01',
              dcs: 'L3/3RCP091MT_XQ01',
              SIMULATOR: 'ML3/3RCP091MT_XQ01',
            },
          },
          {
            dispName: 'RCP092MT',
            description: 'PORV3泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RCP092MT_XQ01',
              dcs: 'L3/3RCP092MT_XQ01',
              SIMULATOR: 'ML3/3RCP092MT_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RCP120MT',
            description: '001PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RCP120MT_XQ01',
              dcs: 'L3/3RCP120MT_XQ01',
              SIMULATOR: 'ML3/3RCP120MT_XQ01',
            },
          },
          {
            dispName: 'RCP220MT',
            description: '002PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RCP220MT_XQ01',
              dcs: 'L3/3RCP220MT_XQ01',
              SIMULATOR: 'ML3/3RCP220MT_XQ01',
            },
          },
          {
            dispName: 'RCP320MT',
            description: '003PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RCP320MT_XQ01',
              dcs: 'L3/3RCP320MT_XQ01',
              SIMULATOR: 'ML3/3RCP320MT_XQ01',
            },
          },
        ],
        {
          dispName: 'RCP028MT',
          description: '一环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L3/3RCP028MTX_XQ01',
            dcs: 'L3/3RCP028MTX_XQ01',
            SIMULATOR: 'ML3/3RCP028MTX_XQ01',
          },
        },
        {
          dispName: 'RCP029MT',
          description: '一环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L3/3RCP029MTX_XQ01',
            dcs: 'L3/3RCP029MTX_XQ01',
            SIMULATOR: 'ML3/3RCP029MTX_XQ01',
          },
        },
        {
          dispName: 'RCP043MT',
          description: '二环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L3/3RCP043MTX_XQ01',
            dcs: 'L3/3RCP043MTX_XQ01',
            SIMULATOR: 'ML3/3RCP043MTX_XQ01',
          },
        },
        {
          dispName: 'RCP044MT',
          description: '二环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L3/3RCP044MTX_XQ01',
            dcs: 'L3/3RCP044MTX_XQ01',
            SIMULATOR: 'ML3/3RCP044MTX_XQ01',
          },
        },
        {
          dispName: 'RCP055MT',
          description: '三环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L3/3RCP055MTX_XQ01',
            dcs: 'L3/3RCP055MTX_XQ01',
            SIMULATOR: 'ML3/3RCP055MTX_XQ01',
          },
        },
        {
          dispName: 'RCP056MT',
          description: '三环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L3/3RCP056MTX_XQ01',
            dcs: 'L3/3RCP056MTX_XQ01',
            SIMULATOR: 'ML3/3RCP056MTX_XQ01',
          },
        },
      ],
    },
    {
      modelName: '一回路系统',
      powerName: '岭澳核电站',
      no: 4,
      powerUnitId: 6,
      nodes: [
        [
          {
            dispName: 'RCP037MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L4/4RCP037MPX_XQ01',
              dcs: 'L4/4RCP037MPX_XQ01',
              SIMULATOR: 'ML3/3RCP037MPX_XQ01',
            },
          },
          {
            dispName: 'RCP039MP',
            description: '一回路压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L4/4RCP039MPX_XQ01',
              dcs: 'L4/4RCP039MPX_XQ01',
              SIMULATOR: 'ML3/3RCP039MPX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RCP007MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L4/4RCP007MNX_XQ01',
              dcs: 'L4/4RCP007MNX_XQ01',
              SIMULATOR: 'ML3/3RCP007MNX_XQ01',
            },
          },
          {
            dispName: 'RCP008MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L4/4RCP008MNX_XQ01',
              dcs: 'L4/4RCP008MNX_XQ01',
              SIMULATOR: 'ML3/3RCP008MNX_XQ01',
            },
          },
          {
            dispName: 'RCP011MN',
            description: 'PZR液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L4/4RCP011MNX_XQ01',
              dcs: 'L4/4RCP011MNX_XQ01',
              SIMULATOR: 'ML3/3RCP011MNX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RCP009MT',
            description: 'PZR汽相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RCP009MT_XQ01',
              dcs: 'L4/4RCP009MT_XQ01',
              SIMULATOR: 'ML3/3RCP009MT_XQ01',
            },
          },
          {
            dispName: 'RCP010MT',
            description: 'PZR液相温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RCP010MTX_XQ01',
              dcs: 'L4/4RCP010MTX_XQ01',
              SIMULATOR: 'ML3/3RCP010MTX_XQ01',
            },
          },
          {
            dispName: 'RCP024MP',
            description: 'PZR泄压箱压力',
            value: '***',
            unit: 'bar',
            nodeId: {
              kns: 'L4/4RCP024MP_XQ01',
              dcs: 'L4/4RCP024MP_XQ01',
              SIMULATOR: 'ML3/3RCP024MP_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RCP090MT',
            description: 'PORV1泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RCP090MT_XQ01',
              dcs: 'L4/4RCP090MT_XQ01',
              SIMULATOR: 'ML3/3RCP090MT_XQ01',
            },
          },
          {
            dispName: 'RCP091MT',
            description: 'PORV2泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RCP091MT_XQ01',
              dcs: 'L4/4RCP091MT_XQ01',
              SIMULATOR: 'ML3/3RCP091MT_XQ01',
            },
          },
          {
            dispName: 'RCP092MT',
            description: 'PORV3泄压管线温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RCP092MT_XQ01',
              dcs: 'L4/4RCP092MT_XQ01',
              SIMULATOR: 'ML3/3RCP092MT_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RCP120MT',
            description: '001PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RCP120MT_XQ01',
              dcs: 'L4/4RCP120MT_XQ01',
              SIMULATOR: 'ML3/3RCP120MT_XQ01',
            },
          },
          {
            dispName: 'RCP220MT',
            description: '002PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RCP220MT_XQ01',
              dcs: 'L4/4RCP220MT_XQ01',
              SIMULATOR: 'ML3/3RCP220MT_XQ01',
            },
          },
          {
            dispName: 'RCP320MT',
            description: '003PO轴封注入水温',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RCP320MT_XQ01',
              dcs: 'L4/4RCP320MT_XQ01',
              SIMULATOR: 'ML3/3RCP320MT_XQ01',
            },
          },
        ],
        {
          dispName: 'RCP028MT',
          description: '一环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L4/4RCP028MTX_XQ01',
            dcs: 'L4/4RCP028MTX_XQ01',
            SIMULATOR: 'ML3/3RCP028MTX_XQ01',
          },
        },
        {
          dispName: 'RCP029MT',
          description: '一环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L4/4RCP029MTX_XQ01',
            dcs: 'L4/4RCP029MTX_XQ01',
            SIMULATOR: 'ML3/3RCP029MTX_XQ01',
          },
        },
        {
          dispName: 'RCP043MT',
          description: '二环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L4/4RCP043MTX_XQ01',
            dcs: 'L4/4RCP043MTX_XQ01',
            SIMULATOR: 'ML3/3RCP043MTX_XQ01',
          },
        },
        {
          dispName: 'RCP044MT',
          description: '二环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L4/4RCP044MTX_XQ01',
            dcs: 'L4/4RCP044MTX_XQ01',
            SIMULATOR: 'ML3/3RCP044MTX_XQ01',
          },
        },
        {
          dispName: 'RCP055MT',
          description: '三环路热端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L4/4RCP055MTX_XQ01',
            dcs: 'L4/4RCP055MTX_XQ01',
            SIMULATOR: 'ML3/3RCP055MTX_XQ01',
          },
        },
        {
          dispName: 'RCP056MT',
          description: '三环路冷端温度（WR）',
          value: '***',
          unit: '℃',
          nodeId: {
            kns: 'L4/4RCP056MTX_XQ01',
            dcs: 'L4/4RCP056MTX_XQ01',
            SIMULATOR: 'ML3/3RCP056MTX_XQ01',
          },
        },
      ],
    },

    // 一回路辅助及监测系统 大亚湾核电站
    {
      modelName: '一回路辅助及监测系统',
      powerName: '大亚湾核电站', // 大亚湾核电站 岭澳核电站
      no: 1,
      powerUnitId: 1,
      nodes: [
        [
          {
            dispName: 'RPN446VE',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'D1/D1RPN446VE',
              dcs: 'D1/D1RPN446VE',
              SIMULATOR: 'MD1/D1RPN446VE',
            },
          },
          {
            dispName: 'RPN447VE',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'D1/D1RPN447VE',
              dcs: 'D1/D1RPN447VE',
              SIMULATOR: 'MD1/D1RPN447VE',
            },
          },
          {
            dispName: 'RPN448EU',
            description: '中间量程',
            value: '***',
            unit: 'A',
            nodeId: {
              kns: 'D1/D1RPN448EU',
              dcs: 'D1/D1RPN448EU',
              SIMULATOR: 'MD1/D1RPN448EU',
            },
          },
          {
            dispName: 'RPN449EU',
            description: '中间量程',
            value: '***',
            unit: 'A',
            nodeId: {
              kns: 'D1/D1RPN449EU',
              dcs: 'D1/D1RPN449EU',
              SIMULATOR: 'MD1/D1RPN449EU',
            },
          },
        ],
        {
          dispName: 'PTR018MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D1/D1PTR018MN',
            dcs: 'D1/D1PTR018MN',
            SIMULATOR: 'MD1/D1PTR018MN',
          },
        },
        {
          dispName: 'PTR019MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D1/D1PTR019MN',
            dcs: 'D1/D1PTR019MN',
            SIMULATOR: 'MD1/D1PTR019MN',
          },
        },
        {
          dispName: 'RCV005MD',
          description: '下泄流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D1/D1RCV005MD',
            dcs: 'D1/D1RCV005MD',
            SIMULATOR: 'MD1/D1RCV005MD',
          },
        },
        {
          dispName: 'RCV018MD',
          description: '上充流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D1/D1RCV018MD',
            dcs: 'D1/D1RCV018MD',
            SIMULATOR: 'MD1/D1RCV018MD',
          },
        },
        {
          dispName: 'RCV021MD',
          description: '001PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D1/D1RCV021MD',
            dcs: 'D1/D1RCV021MD',
            SIMULATOR: 'MD1/D1RCV021MD',
          },
        },
        {
          dispName: 'RCV022MD',
          description: '002PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D1/D1RCV022MD',
            dcs: 'D1/D1RCV022MD',
            SIMULATOR: 'MD1/D1RCV022MD',
          },
        },
        {
          dispName: 'RCV023MD',
          description: '003PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D1/D1RCV023MD',
            dcs: 'D1/D1RCV023MD',
            SIMULATOR: 'MD1/D1RCV023MD',
          },
        },
        {
          dispName: 'REA052MN',
          description: 'REA004BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D1/D1REA052MN',
            dcs: 'D1/D1REA052MN',
            SIMULATOR: 'MD1/D1REA052MN',
          },
        },
        {
          dispName: '9REA054MN',
          description: 'REA003BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D1/D9REA054MN',
            dcs: 'D1/D9REA054MN',
            SIMULATOR: 'MD1/D9REA054MN',
          },
        },
        {
          dispName: 'REN012MG',
          description: '硼浓度',
          value: '***',
          unit: 'ppm',
          nodeId: {
            kns: 'D1/D1REN012MG',
            dcs: 'D1/D1REN012MG',
            SIMULATOR: 'MD1/D1REN012MG',
          },
        },
        {
          dispName: 'RPE008MN',
          description: 'RX厂房地坑液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D1/D1RPE008MN',
            dcs: 'D1/D1RPE008MN',
            SIMULATOR: 'MD1/D1RPE008MN',
          },
        },
        {
          dispName: 'TEP001MN',
          description: 'TEP001BA液位',
          value: '***',
          unit: 'mWC',
          nodeId: {
            kns: 'D1/D1TEP001MN',
            dcs: 'D1/D1TEP001MN',
            SIMULATOR: 'MD1/D1TEP001MN',
          },
        },
        {
          dispName: 'APG004MD',
          description: 'SG排污流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D1/D1APG004MD',
            dcs: 'D1/D1APG004MD',
            SIMULATOR: 'MD1/D1APG004MD',
          },
        },
      ],
    },
    {
      modelName: '一回路辅助及监测系统',
      powerName: '大亚湾核电站', // 大亚湾核电站 岭澳核电站
      no: 2,
      powerUnitId: 2,
      nodes: [
        [
          {
            dispName: 'RPN446EU',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'D2/D2RPN447EU',
              dcs: 'D2/D2RPN447EU',
              SIMULATOR: 'MD1/D1RPN447EU',
            },
          },
          {
            dispName: 'RPN447EU',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'D2/D2RPN447EU',
              dcs: 'D2/D2RPN447EU',
              SIMULATOR: 'MD1/D1RPN447EU',
            },
          },
          {
            dispName: 'RPN448EU',
            description: '中间量程',
            value: '***',
            unit: 'A',
            nodeId: {
              kns: 'D2/D2RPN449EU',
              dcs: 'D2/D2RPN449EU',
              SIMULATOR: 'MD1/D1RPN449EU',
            },
          },
          {
            dispName: 'RPN449EU',
            description: '中间量程',
            value: '***',
            unit: 'A',
            nodeId: {
              kns: 'D2/D2RPN449EU',
              dcs: 'D2/D2RPN449EU',
              SIMULATOR: 'MD1/D1RPN449EU',
            },
          },
        ],
        {
          dispName: 'PTR018MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D2/D2PTR018MN',
            dcs: 'D2/D2PTR018MN',
            SIMULATOR: 'MD1/D1PTR018MN',
          },
        },
        {
          dispName: 'PTR019MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D2/D2PTR019MN',
            dcs: 'D2/D2PTR019MN',
            SIMULATOR: 'MD1/D1PTR019MN',
          },
        },
        {
          dispName: 'RCV005MD',
          description: '下泄流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D2/D2RCV005MD',
            dcs: 'D2/D2RCV005MD',
            SIMULATOR: 'MD1/D1RCV005MD',
          },
        },
        {
          dispName: 'RCV018MD',
          description: '上充流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D2/D2RCV018MD',
            dcs: 'D2/D2RCV018MD',
            SIMULATOR: 'MD1/D1RCV018MD',
          },
        },
        {
          dispName: 'RCV021MD',
          description: '001PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D2/D2RCV021MD',
            dcs: 'D2/D2RCV021MD',
            SIMULATOR: 'MD1/D1RCV021MD',
          },
        },
        {
          dispName: 'RCV022MD',
          description: '002PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D2/D2RCV022MD',
            dcs: 'D2/D2RCV022MD',
            SIMULATOR: 'MD1/D1RCV022MD',
          },
        },
        {
          dispName: 'RCV023MD',
          description: '003PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D2/D2RCV023MD',
            dcs: 'D2/D2RCV023MD',
            SIMULATOR: 'MD1/D1RCV023MD',
          },
        },
        {
          dispName: 'REA052MN',
          description: 'REA004BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D2/D2REA052MN',
            dcs: 'D2/D2REA052MN',
            SIMULATOR: 'MD1/D1REA052MN',
          },
        },
        {
          dispName: '9REA054MN',
          description: 'REA003BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D1/D9REA054MN',
            dcs: 'D1/D9REA054MN',
            SIMULATOR: 'MD1/D9REA054MN',
          },
        },
        {
          dispName: 'REN012MG',
          description: '硼浓度',
          value: '***',
          unit: 'ppm',
          nodeId: {
            kns: 'D2/D2REN012MG',
            dcs: 'D2/D2REN012MG',
            SIMULATOR: 'MD1/D1REN012MG',
          },
        },
        {
          dispName: 'RPE008MN',
          description: 'RX厂房地坑液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'D2/D2RPE008MN',
            dcs: 'D2/D2RPE008MN',
            SIMULATOR: 'MD1/D1RPE008MN',
          },
        },
        {
          dispName: 'TEP002MN',
          description: 'TEP008BA液位',
          value: '***',
          unit: 'mWC',
          nodeId: {
            kns: 'D2/D2TEP002MN',
            dcs: 'D2/D2TEP002MN',
            SIMULATOR: 'MD1/D1TEP002MN',
          },
        },
        {
          dispName: 'APG004MD',
          description: 'SG排污流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'D2/D2APG004MD',
            dcs: 'D2/D2APG004MD',
            SIMULATOR: 'MD1/D1APG004MD',
          },
        },
      ],
    },
    {
      modelName: '一回路辅助及监测系统',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 1,
      powerUnitId: 3,
      nodes: [
        [
          {
            dispName: 'RPN014MA',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'L1/L1RPN014MA',
              dcs: 'L1/L1RPN014MA',
              SIMULATOR: 'ML1/L1RPN014MA',
            },
          },
          {
            dispName: 'RPN024MA',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'L1/L1RPN024MA',
              dcs: 'L1/L1RPN024MA',
              SIMULATOR: 'ML1/L1RPN024MA',
            },
          },
          {
            dispName: 'RPN448EU',
            description: '中间量程',
            value: '***',
            unit: 'A',
            nodeId: {
              kns: 'L1/L1RPN448EUL',
              dcs: 'L1/L1RPN448EUL',
              SIMULATOR: 'ML1/L1RPN448EUL',
            },
          },
          {
            dispName: 'RPN449EUL',
            description: '中间量程',
            value: '***',
            unit: 'A',
            nodeId: {
              kns: 'L1/L1RPN449EUL',
              dcs: 'L1/L1RPN449EUL',
              SIMULATOR: 'ML1/L1RPN449EUL',
            },
          },
        ],
        {
          dispName: 'PTR018MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L1/L1PTR018MN',
            dcs: 'L1/L1PTR018MN',
            SIMULATOR: 'ML1/L1PTR018MN',
          },
        },
        {
          dispName: 'PTR019MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L1/L1PTR019MN',
            dcs: 'L1/L1PTR019MN',
            SIMULATOR: 'ML1/L1PTR019MN',
          },
        },
        {
          dispName: 'RCV005MD',
          description: '下泄流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L1/L1RCV005MD',
            dcs: 'L1/L1RCV005MD',
            SIMULATOR: 'ML1/L1RCV005MD',
          },
        },
        {
          dispName: 'RCV018MD',
          description: '上充流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L1/L1RCV018MD',
            dcs: 'L1/L1RCV018MD',
            SIMULATOR: 'ML1/L1RCV018MD',
          },
        },
        {
          dispName: 'RCV021MD',
          description: '001PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L1/L1RCV021MD',
            dcs: 'L1/L1RCV021MD',
            SIMULATOR: 'ML1/L1RCV021MD',
          },
        },
        {
          dispName: 'RCV022MD',
          description: '002PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L1/L1RCV022MD',
            dcs: 'L1/L1RCV022MD',
            SIMULATOR: 'ML1/L1RCV022MD',
          },
        },
        {
          dispName: 'RCV023MD',
          description: '003PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L1/L1RCV023MD',
            dcs: 'L1/L1RCV023MD',
            SIMULATOR: 'ML1/L1RCV023MD',
          },
        },
        {
          dispName: 'REA052MN',
          description: 'REA004BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L1/L1REA403EU',
            dcs: 'L1/L1REA403EU',
            SIMULATOR: 'ML1/L1REA403EU',
          },
        },
        {
          dispName: '9REA054MN',
          description: 'REA003BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L1/L9REA404EU',
            dcs: 'L1/L9REA404EU',
            SIMULATOR: 'ML1/L9REA404EU',
          },
        },
        {
          dispName: 'REN012MG',
          description: '硼浓度',
          value: '***',
          unit: 'ppm',
          nodeId: {
            kns: 'L1/L1REN012MG',
            dcs: 'L1/L1REN012MG',
            SIMULATOR: 'ML1/L1REN012MG',
          },
        },
        {
          dispName: 'RPE008MN',
          description: 'RX厂房地坑液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L1/L1RPE008MN',
            dcs: 'L1/L1RPE008MN',
            SIMULATOR: 'ML1/L1RPE008MN',
          },
        },
        {
          dispName: 'TEP001MN',
          description: 'TEP001BA液位',
          value: '***',
          unit: 'mWC',
          nodeId: {
            kns: 'L1/L1TEP001MN',
            dcs: 'L1/L1TEP001MN',
            SIMULATOR: 'ML1/L1TEP001MN',
          },
        },
        {
          dispName: 'APG004MD',
          description: 'SG排污流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L1/L1APG004MD',
            dcs: 'L1/L1APG004MD',
            SIMULATOR: 'ML1/L1APG004MD',
          },
        },
      ],
    },
    {
      modelName: '一回路辅助及监测系统',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 2,
      powerUnitId: 4,
      nodes: [
        [
          {
            dispName: 'RPN446EU',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'L2/L2RPN024MA',
              dcs: 'L2/L2RPN024MA',
              SIMULATOR: 'ML1/L1RPN024MA',
            },
          },
          {
            dispName: 'RPN447EU',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'L2/L2RPN024MA',
              dcs: 'L2/L2RPN024MA',
              SIMULATOR: 'ML1/L1RPN024MA',
            },
          },
          {
            dispName: 'RPN448EU',
            description: '中间量程',
            value: '***',
            unit: 'A',
            nodeId: {
              kns: 'L2/L2RPN448EUL',
              dcs: 'L2/L2RPN448EUL',
              SIMULATOR: 'ML1/L1RPN448EUL',
            },
          },
          {
            dispName: 'RPN449EUL',
            description: '中间量程',
            value: '***',
            unit: 'A',
            nodeId: {
              kns: 'L2/L2RPN449EUL',
              dcs: 'L2/L2RPN449EUL',
              SIMULATOR: 'ML1/L1RPN449EUL',
            },
          },
        ],
        {
          dispName: 'PTR018MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L2/L2PTR018MN',
            dcs: 'L2/L2PTR018MN',
            SIMULATOR: 'ML1/L1PTR018MN',
          },
        },
        {
          dispName: 'PTR019MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L2/L2PTR019MN',
            dcs: 'L2/L2PTR019MN',
            SIMULATOR: 'ML1/L1PTR019MN',
          },
        },
        {
          dispName: 'RCV005MD',
          description: '下泄流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L2/L2RCV005MD',
            dcs: 'L2/L2RCV005MD',
            SIMULATOR: 'ML1/L1RCV005MD',
          },
        },
        {
          dispName: 'RCV018MD',
          description: '上充流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L2/L2RCV018MD',
            dcs: 'L2/L2RCV018MD',
            SIMULATOR: 'ML1/L1RCV018MD',
          },
        },
        {
          dispName: 'RCV021MD',
          description: '001PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L2/L2RCV021MD',
            dcs: 'L2/L2RCV021MD',
            SIMULATOR: 'ML1/L1RCV021MD',
          },
        },
        {
          dispName: 'RCV022MD',
          description: '002PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L2/L2RCV022MD',
            dcs: 'L2/L2RCV022MD',
            SIMULATOR: 'ML1/L1RCV022MD',
          },
        },
        {
          dispName: 'RCV023MD',
          description: '003PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L2/L2RCV023MD',
            dcs: 'L2/L2RCV023MD',
            SIMULATOR: 'ML1/L1RCV023MD',
          },
        },
        {
          dispName: 'REA052MN',
          description: 'REA004BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L2/L2REA403EU',
            dcs: 'L2/L2REA403EU',
            SIMULATOR: 'ML1/L1REA403EU',
          },
        },
        {
          dispName: '9REA054MN',
          description: 'REA003BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L1/L9REA404EU',
            dcs: 'L1/L9REA404EU',
            SIMULATOR: 'ML1/L9REA404EU',
          },
        },
        {
          dispName: 'REN012MG',
          description: '硼浓度',
          value: '***',
          unit: 'ppm',
          nodeId: {
            kns: 'L2/L2REN012MG',
            dcs: 'L2/L2REN012MG',
            SIMULATOR: 'ML1/L1REN012MG',
          },
        },
        {
          dispName: 'RPE008MN',
          description: 'RX厂房地坑液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L2/L2RPE008MN',
            dcs: 'L2/L2RPE008MN',
            SIMULATOR: 'ML1/L1RPE008MN',
          },
        },
        {
          dispName: 'TEP002MN',
          description: 'TEP008BA液位',
          value: '***',
          unit: 'mWC',
          nodeId: {
            kns: 'L2/L2TEP002MN',
            dcs: 'L2/L2TEP002MN',
            SIMULATOR: 'ML1/L1TEP001MN',
          },
        },
        {
          dispName: 'APG004MD',
          description: 'SG排污流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L2/L2APG004MD',
            dcs: 'L2/L2APG004MD',
            SIMULATOR: 'ML1/L1APG004MD',
          },
        },
      ],
    },
    {
      modelName: '一回路辅助及监测系统',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 3,
      powerUnitId: 5,
      nodes: [
        [
          {
            dispName: 'RPN014MA',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'L3/3RPN401KMK_XP01',
              dcs: 'L3/3RPN401KMK_XP01',
              SIMULATOR: 'ML3/33RPN401KMK_XP01',
            },
          },
          {
            dispName: 'RPN024MA',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'L3/3RPN407KMK_XP01',
              dcs: 'L3/3RPN407KMK_XP01',
              SIMULATOR: 'ML3/3RPN407KMK_XP01',
            },
          },
          {
            dispName: 'RPN013MA',
            description: '中间量程',
            value: '***',
            unit: 'μA',
            nodeId: {
              kns: 'L3/3RPN403KMK_XP01',
              dcs: 'L3/3RPN403KMK_XP01',
              SIMULATOR: 'ML3/3RPN403KMK_XP01',
            },
          },
          {
            dispName: 'RPN023MA',
            description: '中间量程',
            value: '***',
            unit: 'μA',
            nodeId: {
              kns: 'L3/3RPN409KMK_XP01',
              dcs: 'L3/3RPN409KMK_XP01',
              SIMULATOR: 'ML3/3RPN409KMK_XP01',
            },
          },
        ],
        {
          dispName: 'PTR018MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L3/3PTR018MNX_XQ01',
            dcs: 'L3/3PTR018MNX_XQ01',
            SIMULATOR: 'ML3/3PTR018MNX_XQ01',
          },
        },
        {
          dispName: 'PTR019MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L3/3PTR019MNX_XQ01',
            dcs: 'L3/3PTR019MNX_XQ01',
            SIMULATOR: 'ML3/3PTR019MNX_XQ01',
          },
        },
        {
          dispName: 'RCV005MD',
          description: '下泄流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L3/3RCV005MD_XQ01',
            dcs: 'L3/3RCV005MD_XQ01',
            SIMULATOR: 'ML3/3RCV005MD_XQ01',
          },
        },
        {
          dispName: 'RCV018MD',
          description: '上充流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L3/3RCV018MD_XQ01',
            dcs: 'L3/3RCV018MD_XQ01',
            SIMULATOR: 'ML3/3RCV018MD_XQ01',
          },
        },
        {
          dispName: 'RCV021MD',
          description: '001PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L3/3RCV021MD_XQ01',
            dcs: 'L3/3RCV021MD_XQ01',
            SIMULATOR: 'ML3/3RCV021MD_XQ01',
          },
        },
        {
          dispName: 'RCV022MD',
          description: '002PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L3/3RCV022MD_XQ01',
            dcs: 'L3/3RCV022MD_XQ01',
            SIMULATOR: 'ML3/3RCV022MD_XQ01',
          },
        },
        {
          dispName: 'RCV023MD',
          description: '003PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L3/3RCV023MD_XQ01',
            dcs: 'L3/3RCV023MD_XQ01',
            SIMULATOR: 'ML3/3RCV023MD_XQ01',
          },
        },
        {
          dispName: 'REA052MN',
          description: 'REA004BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L3/3REA052MNX_XQ01',
            dcs: 'L3/3REA052MNX_XQ01',
            SIMULATOR: 'ML3/3REA052MNX_XQ01',
          },
        },
        {
          dispName: '8REA054MNX_XQ01',
          description: 'REA003BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L3/8REA054MNX_XQ01',
            dcs: 'L3/8REA054MNX_XQ01',
            SIMULATOR: 'ML3/8REA054MNX_XQ01',
          },
        },
        {
          dispName: 'REN012MG',
          description: '硼浓度',
          value: '***',
          unit: 'ppm',
          nodeId: {
            kns: 'L3/3REN012MG4_XQ01',
            dcs: 'L3/3REN012MG4_XQ01',
            SIMULATOR: 'ML3/3REN012MG4_XQ01',
          },
        },
        {
          dispName: 'RPE008MN',
          description: 'RX厂房地坑液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L3/3RPE008MN_XQ01',
            dcs: 'L3/3RPE008MN_XQ01',
            SIMULATOR: 'ML3/3RPE008MN_XQ01',
          },
        },
        {
          dispName: 'TEP001MN',
          description: 'TEP001BA液位',
          value: '***',
          unit: 'mWC',
          nodeId: {
            kns: 'L3/3TEP001MN_XQ01',
            dcs: 'L3/3TEP001MN_XQ01',
            SIMULATOR: 'ML3/3TEP001MN_XQ01',
          },
        },
        {
          dispName: 'APG004MD',
          description: 'SG排污流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L3/3APG004MD_XQ01',
            dcs: 'L3/3APG004MD_XQ01',
            SIMULATOR: 'ML3/3APG004MD_XQ01',
          },
        },
      ],
    },
    {
      modelName: '一回路辅助及监测系统',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 4,
      powerUnitId: 6,
      nodes: [
        [
          {
            dispName: 'RPN014MA',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'L4/4RPN407KMX_XQ01',
              dcs: 'L4/4RPN407KMX_XQ01',
              SIMULATOR: 'ML3/3RPN407KMX_XQ01',
            },
          },
          {
            dispName: 'RPN024MA',
            description: '源量程',
            value: '***',
            unit: 'cps',
            nodeId: {
              kns: 'L4/4RPN407KMX_XQ01',
              dcs: 'L4/4RPN407KMX_XQ01',
              SIMULATOR: 'ML3/3RPN407KMX_XQ01',
            },
          },
          {
            dispName: 'RPN013MA',
            description: '中间量程',
            value: '***',
            unit: 'μA',
            nodeId: {
              kns: 'L4/4RPN403KMK_XP01',
              dcs: 'L4/4RPN403KMK_XP01',
              SIMULATOR: 'ML3/3RPN403KMK_XP01',
            },
          },
          {
            dispName: 'RPN023MA',
            description: '中间量程',
            value: '***',
            unit: 'μA',
            nodeId: {
              kns: 'L4/4RPN409KMK_XP01',
              dcs: 'L4/4RPN409KMK_XP01',
              SIMULATOR: 'ML3/3RPN409KMK_XP01',
            },
          },
        ],
        {
          dispName: 'PTR018MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L4/4PTR018MNX_XQ01',
            dcs: 'L4/4PTR018MNX_XQ01',
            SIMULATOR: 'ML3/3PTR018MNX_XQ01',
          },
        },
        {
          dispName: 'PTR019MN',
          description: 'PTR001BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L4/4PTR019MNX_XQ01',
            dcs: 'L4/4PTR019MNX_XQ01',
            SIMULATOR: 'ML3/3PTR019MNX_XQ01',
          },
        },
        {
          dispName: 'RCV005MD',
          description: '下泄流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L4/4RCV005MD_XQ01',
            dcs: 'L4/4RCV005MD_XQ01',
            SIMULATOR: 'ML3/3RCV005MD_XQ01',
          },
        },
        {
          dispName: 'RCV018MD',
          description: '上充流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L4/4RCV018MD_XQ01',
            dcs: 'L4/4RCV018MD_XQ01',
            SIMULATOR: 'ML3/3RCV018MD_XQ01',
          },
        },
        {
          dispName: 'RCV021MD',
          description: '001PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L4/4RCV021MD_XQ01',
            dcs: 'L4/4RCV021MD_XQ01',
            SIMULATOR: 'ML3/3RCV021MD_XQ01',
          },
        },
        {
          dispName: 'RCV022MD',
          description: '002PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L4/4RCV022MD_XQ01',
            dcs: 'L4/4RCV022MD_XQ01',
            SIMULATOR: 'ML3/3RCV022MD_XQ01',
          },
        },
        {
          dispName: 'RCV023MD',
          description: '003PO轴封注入流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L4/4RCV023MD_XQ01',
            dcs: 'L4/4RCV023MD_XQ01',
            SIMULATOR: 'ML3/3RCV023MD_XQ01',
          },
        },
        {
          dispName: 'REA052MN',
          description: 'REA004BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L4/4REA052MNX_XQ01',
            dcs: 'L4/4REA052MNX_XQ01',
            SIMULATOR: 'ML3/3REA052MNX_XQ01',
          },
        },
        {
          dispName: '8REA054MNX_XQ01',
          description: 'REA003BA液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L3/8REA054MNX_XQ01',
            dcs: 'L3/8REA054MNX_XQ01',
            SIMULATOR: 'ML3/8REA054MNX_XQ01',
          },
        },
        {
          dispName: 'REN012MG',
          description: '硼浓度',
          value: '***',
          unit: 'ppm',
          nodeId: {
            kns: 'L4/4REN012MG4_XQ01',
            dcs: 'L4/4REN012MG4_XQ01',
            SIMULATOR: 'ML3/3REN012MG4_XQ01',
          },
        },
        {
          dispName: 'RPE008MN',
          description: 'RX厂房地坑液位',
          value: '***',
          unit: 'm',
          nodeId: {
            kns: 'L4/4RPE008MN_XQ01',
            dcs: 'L4/4RPE008MN_XQ01',
            SIMULATOR: 'ML3/3RPE008MN_XQ01',
          },
        },
        {
          dispName: 'TEP002MN',
          description: 'TEP008BA液位',
          value: '***',
          unit: 'mWC',
          nodeId: {
            kns: 'L4/4TEP002MN_XQ01',
            dcs: 'L4/4TEP002MN_XQ01',
            SIMULATOR: 'ML3/3TEP001MN_XQ01',
          },
        },
        {
          dispName: 'APG004MD',
          description: 'SG排污流量',
          value: '***',
          unit: 'm³/h',
          nodeId: {
            kns: 'L4/4APG004MD_XQ01',
            dcs: 'L4/4APG004MD_XQ01',
            SIMULATOR: 'ML3/3APG004MD_XQ01',
          },
        },
      ],
    },
    // 专设安全系统 大亚湾核电站
    {
      modelName: '专设安全系统',
      powerName: '大亚湾核电站', // 大亚湾核电站 岭澳核电站
      no: 1,
      powerUnitId: 1,
      nodes: [
        [
          {
            dispName: 'EAS005MT',
            description: '地坑循环水温度 A',

            value: '***',
            // value: '26.5',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1EAS005MT',
              dcs: 'D1/D1EAS005MT',
              SIMULATOR: 'MD1/D1EAS005MT',
            },
          },
          {
            dispName: 'EAS006MT',
            description: '地坑循环水温度 B',

            value: '***',
            // value: '26.5',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1EAS006MT',
              dcs: 'D1/D1EAS006MT',
              SIMULATOR: 'MD1/D1EAS006MT',
            },
          },
        ],
        [
          {
            dispName: 'EAS007MD',
            description: '安喷流量 A',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1EAS007MD',
              dcs: 'D1/D1EAS007MD',
              SIMULATOR: 'MD1/D1EAS007MD',
            },
          },
          {
            dispName: 'EAS008MD',
            description: '安喷流量 B',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1EAS008MD',
              dcs: 'D1/D1EAS008MD',
              SIMULATOR: 'MD1/D1EAS008MD',
            },
          },
        ],
        [
          {
            dispName: 'RIS001MD',
            description: '高压安注 A列',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1RIS001MD',
              dcs: 'D1/D1RIS001MD',
              SIMULATOR: 'MD1/D1RIS001MD',
            },
          },
          {
            dispName: 'RIS002MD',
            description: '高压安注 B列',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1RIS002MD',
              dcs: 'D1/D1RIS002MD',
              SIMULATOR: 'MD1/D1RIS002MD',
            },
          },
        ],
        [
          {
            dispName: 'RIS014MD',
            description: '低压安注A列',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1RIS014MD',
              dcs: 'D1/D1RIS014MD',
              SIMULATOR: 'MD1/D1RIS014MD',
            },
          },
          {
            dispName: 'RIS015MD',
            description: '低压安注 B列',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1RIS015MD',
              dcs: 'D1/D1RIS015MD',
              SIMULATOR: 'MD1/D1RIS015MD',
            },
          },
        ],
        [
          {
            dispName: 'ASG404EU',
            description: 'SG1 流量',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1ASG404EU',
              dcs: 'D1/D1ASG404EU',
              SIMULATOR: 'MD1/D1ASG404EU',
            },
          },
          {
            dispName: 'ASG405EU',
            description: 'SG2 流量',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1ASG405EU',
              dcs: 'D1/D1ASG405EU',
              SIMULATOR: 'MD1/D1ASG405EU',
            },
          },
          {
            dispName: 'ASG406EU',
            description: 'SG3 流量',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1ASG406EU',
              dcs: 'D1/D1ASG406EU',
              SIMULATOR: 'MD1/D1ASG406EU',
            },
          },
        ],
        [
          {
            dispName: 'RRI001MD',
            description: 'RRI-A列流量',

            value: '***',
            // value: '2807',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1RRI001MD',
              dcs: 'D1/D1RRI001MD',
              SIMULATOR: 'MD1/D1RRI001MD',
            },
          },
          {
            dispName: 'RRI002MD',
            description: 'RRI-B列流量',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1RRI002MD',
              dcs: 'D1/D1RRI002MD',
              SIMULATOR: 'MD1/D1RRI002MD',
            },
          },
          {
            dispName: 'RRI021MD',
            description: 'RRI公共负荷流量',

            value: '***',
            // value: '2505',
            unit: 'm³/h',
            nodeId: {
              kns: 'D1/D1RRI021MD',
              dcs: 'D1/D1RRI021MD',
              SIMULATOR: 'MD1/D1RRI021MD',
            },
          },
        ],
        {
          dispName: 'ASG001MN',
          description: 'ASG001BA液位',

          value: '***',
          // value: '14.24',
          unit: 'm',
          nodeId: {
            kns: 'D1/D1ASG001MN',
            dcs: 'D1/D1ASG001MN',
            SIMULATOR: 'MD1/D1ASG001MN',
          },
        },
        {
          dispName: 'ASG001MT',
          description: 'ASG001BA温度',

          value: '***',
          // value: '34.21',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1ASG001MT',
            dcs: 'D1/D1ASG001MT',
            SIMULATOR: 'MD1/D1ASG001MT',
          },
        },
        // { //SG1 2 3流量取404 405 406EU 这三个点KNS暂无
        //   dispName: 'ASG401EU',
        //   description: 'SG1 流量',

        //   value: '***',
        //   // value: '0',
        //   unit: 'm³/h',
        //   nodeId: {
        //     kns: 'D1/D1ASG401EU',
        //     dcs: 'D1/D1ASG401EU',
        //     SIMULATOR: 'MD1/D1ASG401EU',
        //   },
        // },
        // {
        //   dispName: 'ASG402EU',
        //   description: 'SG2 流量',

        //   value: '***',
        //   // value: '0',
        //   unit: 'm³/h',
        //   nodeId: {
        //     kns: 'D1/D1ASG402EU',
        //     dcs: 'D1/D1ASG402EU',
        //     SIMULATOR: 'MD1/D1ASG402EU',
        //   },
        // },
        // {
        //   dispName: 'ASG403EU',
        //   description: 'SG3 流量',

        //   value: '***',
        //   // value: '0',
        //   unit: 'm³/h',
        //   nodeId: {
        //     kns: 'D1/D1ASG403EU',
        //     dcs: 'D1/D1ASG403EU',
        //     SIMULATOR: 'MD1/D1ASG403EU',
        //   },
        // },

        {
          dispName: 'RRI001MN',
          description: 'RRI001BA液位',

          value: '***',
          // value: '1.558',
          unit: 'm',
          nodeId: {
            kns: 'D1/D1RRI001MN',
            dcs: 'D1/D1RRI001MN',
            SIMULATOR: 'MD1/D1RRI001MN',
          },
        },
        {
          dispName: 'RRI002MN',
          description: 'RRI002BA液位',

          value: '***',
          // value: '1.556',
          unit: 'm',
          nodeId: {
            kns: 'D1/D1RRI002MN',
            dcs: 'D1/D1RRI002MN',
            SIMULATOR: 'MD1/D1RRI002MN',
          },
        },
        {
          dispName: 'RRI081MT',
          description: 'RRI A列温度',

          value: '***',
          // value: '25.9',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1RRI081MT',
            dcs: 'D1/D1RRI081MTMT',
            SIMULATOR: 'MD1/D1RRI081MT',
          },
        },
        {
          dispName: 'RRI082MT',
          description: 'RRI B列温度',

          value: '***',
          // value: '30.18',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1RRI082MT',
            dcs: 'D1/D1RRI082MT',
            SIMULATOR: 'MD1/D1RRI082MT',
          },
        },
        {
          dispName: 'SEC001MT',
          description: 'SEC-A列温度',

          value: '***',
          // value: '25.12',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1SEC001MT',
            dcs: 'D1/D1SEC001MT',
            SIMULATOR: 'MD1/D1SEC001MT',
          },
        },
        {
          dispName: 'SEC002MT',
          description: 'SEC-B列温度',

          value: '***',
          // value: '26.05',
          unit: '℃',
          nodeId: {
            kns: 'D1/D1SEC002MT',
            dcs: 'D1/D1SEC002MT',
            SIMULATOR: 'MD1/D1SEC002MT',
          },
        },
        {
          dispName: 'ASG001MC',
          description: '汽动泵转速',

          value: '***',
          // value: '0',
          unit: 'rpm',
          nodeId: {
            kns: 'D1/D1ASG001MC',
            dcs: 'D1/D1ASG001MC',
            SIMULATOR: 'MD1/D1ASG001MC',
          },
        },
      ],
    },
    {
      modelName: '专设安全系统',
      powerName: '大亚湾核电站', // 大亚湾核电站 岭澳核电站
      no: 2,
      powerUnitId: 2,
      nodes: [
        [
          {
            dispName: 'EAS005MT',
            description: '地坑循环水温度 A',

            value: '***',
            // value: '26.5',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2EAS005MT',
              dcs: 'D2/D2EAS005MT',
              SIMULATOR: 'MD1/D1EAS005MT',
            },
          },
          {
            dispName: 'EAS006MT',
            description: '地坑循环水温度 B',

            value: '***',
            // value: '26.5',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2EAS006MT',
              dcs: 'D2/D2EAS006MT',
              SIMULATOR: 'MD1/D1EAS006MT',
            },
          },
        ],
        [
          {
            dispName: 'EAS007MD',
            description: '安喷流量 A',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2EAS007MD',
              dcs: 'D2/D2EAS007MD',
              SIMULATOR: 'MD1/D1EAS007MD',
            },
          },
          {
            dispName: 'EAS008MD',
            description: '安喷流量 B',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2EAS008MD',
              dcs: 'D2/D2EAS008MD',
              SIMULATOR: 'MD1/D1EAS008MD',
            },
          },
        ],
        [
          {
            dispName: 'RIS001MD',
            description: '高压安注 A列',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2RIS001MD',
              dcs: 'D2/D2RIS001MD',
              SIMULATOR: 'MD1/D1RIS001MD',
            },
          },
          {
            dispName: 'RIS002MD',
            description: '高压安注 B列',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2RIS002MD',
              dcs: 'D2/D2RIS002MD',
              SIMULATOR: 'MD1/D1RIS002MD',
            },
          },
        ],
        [
          {
            dispName: 'RIS014MD',
            description: '低压安注A列',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2RIS014MD',
              dcs: 'D2/D2RIS014MD',
              SIMULATOR: 'MD1/D1RIS014MD',
            },
          },
          {
            dispName: 'RIS015MD',
            description: '低压安注 B列',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2RIS015MD',
              dcs: 'D2/D2RIS015MD',
              SIMULATOR: 'MD1/D1RIS015MD',
            },
          },
        ],
        [
          {
            dispName: 'ASG404EU',
            description: 'SG1 流量',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2ASG404EU',
              dcs: 'D2/D2ASG404EU',
              SIMULATOR: 'MD1/D1ASG404EU',
            },
          },
          {
            dispName: 'ASG405EU',
            description: 'SG2 流量',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2ASG405EU',
              dcs: 'D2/D2ASG405EU',
              SIMULATOR: 'MD1/D1ASG405EU',
            },
          },
          {
            dispName: 'ASG406EU',
            description: 'SG3 流量',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2ASG406EU',
              dcs: 'D2/D2ASG406EU',
              SIMULATOR: 'MD1/D1ASG406EU',
            },
          },
        ],
        [
          {
            dispName: 'RRI001MD',
            description: 'RRI-A列流量',

            value: '***',
            // value: '2807',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2RRI001MD',
              dcs: 'D2/D2RRI001MD',
              SIMULATOR: 'MD1/D1RRI001MD',
            },
          },
          {
            dispName: 'RRI002MD',
            description: 'RRI-B列流量',

            value: '***',
            // value: '0',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2RRI002MD',
              dcs: 'D2/D2RRI002MD',
              SIMULATOR: 'MD1/D1RRI002MD',
            },
          },
          {
            dispName: 'RRI021MD',
            description: 'RRI公共负荷流量',

            value: '***',
            // value: '2505',
            unit: 'm³/h',
            nodeId: {
              kns: 'D2/D2RRI021MD',
              dcs: 'D2/D2RRI021MD',
              SIMULATOR: 'MD1/D1RRI021MD',
            },
          },
        ],
        {
          dispName: 'ASG001MN',
          description: 'ASG001BA液位',

          value: '***',
          // value: '14.24',
          unit: 'm',
          nodeId: {
            kns: 'D2/D2ASG001MN',
            dcs: 'D2/D2ASG001MN',
            SIMULATOR: 'MD1/D1ASG001MN',
          },
        },
        {
          dispName: 'ASG001MT',
          description: 'ASG001BA温度',

          value: '***',
          // value: '34.21',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2ASG001MT',
            dcs: 'D2/D2ASG001MT',
            SIMULATOR: 'MD1/D1ASG001MT',
          },
        },
        // { //SG1 2 3流量取404 405 406EU 这三个点KNS暂无
        //   dispName: 'ASG401EU',
        //   description: 'SG1 流量',

        //   value: '***',
        //   // value: '0',
        //   unit: 'm³/h',
        //   nodeId: {
        //     kns: 'D2/D2ASG401EU',
        //     dcs: 'D2/D2ASG401EU',
        //     SIMULATOR: 'MD1/D1ASG401EU',
        //   },
        // },
        // {
        //   dispName: 'ASG402EU',
        //   description: 'SG2 流量',

        //   value: '***',
        //   // value: '0',
        //   unit: 'm³/h',
        //   nodeId: {
        //     kns: 'D2/D2ASG402EU',
        //     dcs: 'D2/D2ASG402EU',
        //     SIMULATOR: 'MD1/D1ASG402EU',
        //   },
        // },
        // {
        //   dispName: 'ASG403EU',
        //   description: 'SG3 流量',

        //   value: '***',
        //   // value: '0',
        //   unit: 'm³/h',
        //   nodeId: {
        //     kns: 'D2/D2ASG403EU',
        //     dcs: 'D2/D2ASG403EU',
        //     SIMULATOR: 'MD1/D1ASG403EU',
        //   },
        // },

        {
          dispName: 'RRI001MN',
          description: 'RRI001BA液位',

          value: '***',
          // value: '1.558',
          unit: 'm',
          nodeId: {
            kns: 'D2/D2RRI001MN',
            dcs: 'D2/D2RRI001MN',
            SIMULATOR: 'MD1/D1RRI001MN',
          },
        },
        {
          dispName: 'RRI002MN',
          description: 'RRI002BA液位',

          value: '***',
          // value: '1.556',
          unit: 'm',
          nodeId: {
            kns: 'D2/D2RRI002MN',
            dcs: 'D2/D2RRI002MN',
            SIMULATOR: 'MD1/D1RRI002MN',
          },
        },
        {
          dispName: 'RRI081MT',
          description: 'RRI A列温度',

          value: '***',
          // value: '25.9',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2RRI081MT',
            dcs: 'D2/D2RRI081MTMT',
            SIMULATOR: 'MD1/D1RRI081MT',
          },
        },
        {
          dispName: 'RRI082MT',
          description: 'RRI B列温度',

          value: '***',
          // value: '30.18',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2RRI082MT',
            dcs: 'D2/D2RRI082MT',
            SIMULATOR: 'MD1/D1RRI082MT',
          },
        },
        {
          dispName: 'SEC001MT',
          description: 'SEC-A列温度',

          value: '***',
          // value: '25.12',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2SEC001MT',
            dcs: 'D2/D2SEC001MT',
            SIMULATOR: 'MD1/D1SEC001MT',
          },
        },
        {
          dispName: 'SEC002MT',
          description: 'SEC-B列温度',

          value: '***',
          // value: '26.05',
          unit: '℃',
          nodeId: {
            kns: 'D2/D2SEC002MT',
            dcs: 'D2/D2SEC002MT',
            SIMULATOR: 'MD1/D1SEC002MT',
          },
        },
        {
          dispName: 'ASG001MC',
          description: '汽动泵转速',

          value: '***',
          // value: '0',
          unit: 'rpm',
          nodeId: {
            kns: 'D2/D2ASG001MC',
            dcs: 'D2/D2ASG001MC',
            SIMULATOR: 'MD1/D1ASG001MC',
          },
        },
      ],
    },

    // 专设安全系统 岭澳核电站
    {
      modelName: '专设安全系统',
      powerName: '岭澳核电站',
      no: 1,
      powerUnitId: 3,
      nodes: [
        [
          {
            dispName: 'EAS005MT',
            description: '地坑循环水温度 A',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1EAS005MT',
              dcs: 'L1/L1EAS005MT',
              SIMULATOR: 'ML1/L1EAS005MT',
            },
          },
          {
            dispName: 'EAS006MT',
            description: '地坑循环水温度 B',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1EAS006MT',
              dcs: 'L1/L1EAS006MT',
              SIMULATOR: 'ML1/L1EAS006MT',
            },
          },
        ],
        [
          {
            dispName: 'EAS007MD',
            description: '安喷流量 A',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1EAS007MD',
              dcs: 'L1/L1EAS007MD',
              SIMULATOR: 'ML1/L1EAS007MD',
            },
          },
          {
            dispName: 'EAS008MD',
            description: '安喷流量 B',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1EAS008MD',
              dcs: 'L1/L1EAS008MD',
              SIMULATOR: 'ML1/L1EAS008MD',
            },
          },
        ],
        [
          {
            dispName: 'RIS001MD',
            description: '高压安注 A列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1RIS001MD',
              dcs: 'L1/L1RIS001MD',
              SIMULATOR: 'ML1/L1RIS001MD',
            },
          },
          {
            dispName: 'RIS002MD',
            description: '高压安注 B列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1RIS002MD',
              dcs: 'L1/L1RIS002MD',
              SIMULATOR: 'ML1/L1RIS002MD',
            },
          },
        ],
        [
          {
            dispName: 'RIS014MD',
            description: '低压安注 A列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1RIS014MD',
              dcs: 'L1/L1RIS014MD',
              SIMULATOR: 'ML1/L1RIS014MD',
            },
          },
          {
            dispName: 'RIS015MD',
            description: '低压安注 B列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1RIS015MD',
              dcs: 'L1/L1RIS015MD',
              SIMULATOR: 'ML1/L1RIS015MD',
            },
          },
        ],
        [
          {
            dispName: 'ASG404EU',
            description: 'SG1 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1ASG404EU',
              dcs: 'L1/L1ASG404EU',
              SIMULATOR: 'ML1/L1ASG404EU',
            },
          },
          {
            dispName: 'ASG405EU',
            description: 'SG2 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1ASG405EU',
              dcs: 'L1/L1ASG405EU',
              SIMULATOR: 'ML1/L1ASG405EU',
            },
          },
          {
            dispName: 'ASG406EU',
            description: 'SG3 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1ASG406EU',
              dcs: 'L1/L1ASG406EU',
              SIMULATOR: 'ML1/L1ASG406EU',
            },
          },
        ],
        [
          {
            dispName: 'RRI001MD',
            description: 'RRI-A列流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1RRI001MD',
              dcs: 'L1/L1RRI001MD',
              SIMULATOR: 'ML1/L1RRI001MD',
            },
          },
          {
            dispName: 'RRI002MD',
            description: 'RRI-B列流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1RRI002MD',
              dcs: 'L1/L1RRI002MD',
              SIMULATOR: 'ML1/L1RRI002MD',
            },
          },
          {
            dispName: 'RRI021MD',
            description: 'RRI 公共负荷流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L1/L1RRI021MD',
              dcs: 'L1/L1RRI021MD',
              SIMULATOR: 'ML1/L1RRI021MD',
            },
          },
        ],
        [
          {
            dispName: 'ASG001MN',
            description: 'ASG001BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1ASG001MN',
              dcs: 'L1/L1ASG001MN',
              SIMULATOR: 'ML1/L1ASG001MN',
            },
          },
          {
            dispName: 'ASG001MT',
            description: 'ASG001BA温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1ASG001MT',
              dcs: 'L1/L1ASG001MT',
              SIMULATOR: 'ML1/L1ASG001MT',
            },
          },

          {
            dispName: 'RRI001MN',
            description: 'RRI001BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1RRI001MN',
              dcs: 'L1/L1RRI001MN',
              SIMULATOR: 'ML1/L1RRI001MN',
            },
          },
          {
            dispName: 'RRI002MN',
            description: 'RRI002BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1RRI002MN',
              dcs: 'L1/L1RRI002MN',
              SIMULATOR: 'ML1/L1RRI002MN',
            },
          },
        ],
        [
          {
            dispName: 'RRI081MT',
            description: 'RRI A列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RRI081MT',
              dcs: 'L1/L1RRI081MT',
              SIMULATOR: 'ML1/L1RRI081MT',
            },
          },
          {
            dispName: 'RRI082MT',
            description: 'RRI B列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1RRI082MT',
              dcs: 'L1/L1RRI082MT',
              SIMULATOR: 'ML1/L1RRI082MT',
            },
          },
          {
            dispName: 'SEC001MT',
            description: 'SEC-A列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1SEC001MT',
              dcs: 'L1/L1SEC001MT',
              SIMULATOR: 'ML1/L1SEC001MT',
            },
          },
          {
            dispName: 'SEC002MT',
            description: 'SEC-B列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1SEC002MT',
              dcs: 'L1/L1SEC002MT',
              SIMULATOR: 'ML1/L1SEC002MT',
            },
          },
        ],
        {
          dispName: 'ASG001MC',
          description: '汽动泵转速',
          value: '***',
          unit: 'rpm',
          nodeId: {
            kns: 'L1/L1ASG001MC',
            dcs: 'L1/L1ASG001MC',
            SIMULATOR: 'ML1/L1ASG001MC',
          },
        },
      ],
    },
    {
      modelName: '专设安全系统',
      powerName: '岭澳核电站',
      no: 2,
      powerUnitId: 4,
      nodes: [
        [
          {
            dispName: 'EAS005MT',
            description: '地坑循环水温度 A',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2EAS005MT',
              dcs: 'L2/L2EAS005MT',
              SIMULATOR: 'ML1/L1EAS005MT',
            },
          },
          {
            dispName: 'EAS006MT',
            description: '地坑循环水温度 B',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2EAS006MT',
              dcs: 'L2/L2EAS006MT',
              SIMULATOR: 'ML1/L1EAS006MT',
            },
          },
        ],
        [
          {
            dispName: 'EAS007MD',
            description: '安喷流量 A',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2EAS007MD',
              dcs: 'L2/L2EAS007MD',
              SIMULATOR: 'ML1/L1EAS007MD',
            },
          },
          {
            dispName: 'EAS008MD',
            description: '安喷流量 B',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2EAS008MD',
              dcs: 'L2/L2EAS008MD',
              SIMULATOR: 'ML1/L1EAS008MD',
            },
          },
        ],
        [
          {
            dispName: 'RIS001MD',
            description: '高压安注 A列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2RIS001MD',
              dcs: 'L2/L2RIS001MD',
              SIMULATOR: 'ML1/L1RIS001MD',
            },
          },
          {
            dispName: 'RIS002MD',
            description: '高压安注 B列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2RIS002MD',
              dcs: 'L2/L2RIS002MD',
              SIMULATOR: 'ML1/L1RIS002MD',
            },
          },
        ],
        [
          {
            dispName: 'RIS014MD',
            description: '低压安注 A列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2RIS014MD',
              dcs: 'L2/L2RIS014MD',
              SIMULATOR: 'ML1/L1RIS014MD',
            },
          },
          {
            dispName: 'RIS015MD',
            description: '低压安注 B列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2RIS015MD',
              dcs: 'L2/L2RIS015MD',
              SIMULATOR: 'ML1/L1RIS015MD',
            },
          },
        ],
        [
          {
            dispName: 'ASG404EU',
            description: 'SG1 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2ASG404EU',
              dcs: 'L2/L2ASG404EU',
              SIMULATOR: 'ML1/L1ASG404EU',
            },
          },
          {
            dispName: 'ASG405EU',
            description: 'SG2 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2ASG405EU',
              dcs: 'L2/L2ASG405EU',
              SIMULATOR: 'ML1/L1ASG405EU',
            },
          },
          {
            dispName: 'ASG406EU',
            description: 'SG3 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2ASG406EU',
              dcs: 'L2/L2ASG406EU',
              SIMULATOR: 'ML1/L1ASG406EU',
            },
          },
        ],
        [
          {
            dispName: 'RRI001MD',
            description: 'RRI-A列流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2RRI001MD',
              dcs: 'L2/L2RRI001MD',
              SIMULATOR: 'ML1/L1RRI001MD',
            },
          },
          {
            dispName: 'RRI002MD',
            description: 'RRI-B列流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2RRI002MD',
              dcs: 'L2/L2RRI002MD',
              SIMULATOR: 'ML1/L1RRI002MD',
            },
          },
          {
            dispName: 'RRI021MD',
            description: 'RRI 公共负荷流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L2/L2RRI021MD',
              dcs: 'L2/L2RRI021MD',
              SIMULATOR: 'ML1/L1RRI021MD',
            },
          },
        ],
        [
          {
            dispName: 'ASG001MN',
            description: 'ASG001BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2ASG001MN',
              dcs: 'L2/L2ASG001MN',
              SIMULATOR: 'ML1/L1ASG001MN',
            },
          },
          {
            dispName: 'ASG001MT',
            description: 'ASG001BA温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2ASG001MT',
              dcs: 'L2/L2ASG001MT',
              SIMULATOR: 'ML1/L1ASG001MT',
            },
          },
          {
            dispName: 'RRI001MN',
            description: 'RRI001BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2RRI001MN',
              dcs: 'L2/L2RRI001MN',
              SIMULATOR: 'ML1/L1RRI001MN',
            },
          },
          {
            dispName: 'RRI002MN',
            description: 'RRI002BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2RRI002MN',
              dcs: 'L2/L2RRI002MN',
              SIMULATOR: 'ML1/L1RRI002MN',
            },
          },
        ],
        [
          {
            dispName: 'RRI081MT',
            description: 'RRI A列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RRI081MT',
              dcs: 'L2/L2RRI081MT',
              SIMULATOR: 'ML1/L1RRI081MT',
            },
          },
          {
            dispName: 'RRI082MT',
            description: 'RRI B列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2RRI082MT',
              dcs: 'L2/L2RRI082MT',
              SIMULATOR: 'ML1/L1RRI082MT',
            },
          },
          {
            dispName: 'SEC001MT',
            description: 'SEC-A列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2SEC001MT',
              dcs: 'L2/L2SEC001MT',
              SIMULATOR: 'ML1/L1SEC001MT',
            },
          },
          {
            dispName: 'SEC002MT',
            description: 'SEC-B列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2SEC002MT',
              dcs: 'L2/L2SEC002MT',
              SIMULATOR: 'ML1/L1SEC002MT',
            },
          },
        ],
        {
          dispName: 'ASG001MC',
          description: '汽动泵转速',
          value: '***',
          unit: 'rpm',
          nodeId: {
            kns: 'L2/L2ASG001MC',
            dcs: 'L2/L2ASG001MC',
            SIMULATOR: 'ML1/L1ASG001MC',
          },
        },
      ],
    },
    {
      modelName: '专设安全系统',
      powerName: '岭澳核电站',
      no: 3,
      powerUnitId: 5,
      nodes: [
        [
          {
            dispName: 'EAS005MT',
            description: '地坑循环水温度 A',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3EAS005MT_XQ01',
              dcs: 'L3/3EAS005MT_XQ01',
              SIMULATOR: 'ML3/3EAS005MT_XQ01',
            },
          },
          {
            dispName: 'EAS006MT',
            description: '地坑循环水温度 B',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3EAS006MT_XQ01',
              dcs: 'L3/3EAS006MT_XQ01',
              SIMULATOR: 'ML3/3EAS006MT_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'EAS007MD',
            description: '安喷流量 A',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3EAS007MDX_XQ01',
              dcs: 'L3/3EAS007MDX_XQ01',
              SIMULATOR: 'ML3/3EAS007MDX_XQ01',
            },
          },
          {
            dispName: 'EAS008MD',
            description: '安喷流量 B',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3EAS008MDX_XQ01',
              dcs: 'L3/3EAS008MDX_XQ01',
              SIMULATOR: 'ML3/3EAS008MDX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RIS001MD',
            description: '高压安注 A列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3RIS001MDX_XQ01',
              dcs: 'L3/3RIS001MDX_XQ01',
              SIMULATOR: 'ML3/3RIS001MDX_XQ01',
            },
          },
          {
            dispName: 'RIS002MD',
            description: '高压安注 B列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3RIS002MDX_XQ01',
              dcs: 'L3/3RIS002MDX_XQ01',
              SIMULATOR: 'ML3/3RIS002MDX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RIS014MD',
            description: '低压安注 A列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3RIS014MDX_XQ01',
              dcs: 'L3/3RIS014MDX_XQ01',
              SIMULATOR: 'ML3/3RIS014MDX_XQ01',
            },
          },
          {
            dispName: 'RIS015MD',
            description: '低压安注 B列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3RIS015MDX_XQ01',
              dcs: 'L3/3RIS015MDX_XQ01',
              SIMULATOR: 'ML3/3RIS015MDX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'ASG404EU',
            description: 'SG1 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3ASG404EU_XQ01',
              dcs: 'L3/3ASG404EU_XQ01',
              SIMULATOR: 'ML3/3ASG404EU_XQ01',
            },
          },
          {
            dispName: 'ASG405EU',
            description: 'SG2 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3ASG405EU_XQ01',
              dcs: 'L3/3ASG405EU_XQ01',
              SIMULATOR: 'ML3/3ASG405EU_XQ01',
            },
          },
          {
            dispName: 'ASG406EU',
            description: 'SG3 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3ASG406EU_XQ01',
              dcs: 'L3/3ASG406EU_XQ01',
              SIMULATOR: 'ML3/3ASG406EU_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RRI001MD',
            description: 'RRI-A列流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3RRI001MDX_XQ01',
              dcs: 'L3/3RRI001MDX_XQ01',
              SIMULATOR: 'ML3/3RRI001MDX_XQ01',
            },
          },
          {
            dispName: 'RRI002MD',
            description: 'RRI-B列流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3RRI002MDX_XQ01',
              dcs: 'L3/3RRI002MDX_XQ01',
              SIMULATOR: 'ML3/3RRI002MDX_XQ01',
            },
          },
          {
            dispName: 'RRI021MD',
            description: 'RRI 公共负荷流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L3/3RRI021MD_XQ01',
              dcs: 'L3/3RRI021MD_XQ01',
              SIMULATOR: 'ML3/3RRI021MD_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'ASG001MN',
            description: 'ASG001BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L3/3ASG001MNX_XQ01',
              dcs: 'L3/3ASG001MNX_XQ01',
              SIMULATOR: 'ML3/3ASG001MNX_XQ01',
            },
          },
          {
            dispName: 'ASG001MT',
            description: 'ASG001BA温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3ASG001MT_XQ01',
              dcs: 'L3/3ASG001MT_XQ01',
              SIMULATOR: 'ML3/3ASG001MT_XQ01',
            },
          },
          {
            dispName: 'RRI001MN',
            description: 'RRI001BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L3/3RRI001MN_XQ01',
              dcs: 'L3/3RRI001MN_XQ01',
              SIMULATOR: 'ML3/3RRI001MN_XQ01',
            },
          },
          {
            dispName: 'RRI002MN',
            description: 'RRI002BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L3/3RRI002MN_XQ01',
              dcs: 'L3/3RRI002MN_XQ01',
              SIMULATOR: 'ML3/3RRI002MN_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RRI081MT',
            description: 'RRI A列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RRI081MT_XQ01',
              dcs: 'L3/3RRI081MT_XQ01',
              SIMULATOR: 'ML3/3RRI081MT_XQ01',
            },
          },
          {
            dispName: 'RRI082MT',
            description: 'RRI B列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3RRI082MT_XQ01',
              dcs: 'L3/3RRI082MT_XQ01',
              SIMULATOR: 'ML3/3RRI082MT_XQ01',
            },
          },
          {
            dispName: 'SEC001MT',
            description: 'SEC-A列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3SEC001MT_XQ01',
              dcs: 'L3/3SEC001MT_XQ01',
              SIMULATOR: 'ML3/3SEC001MT_XQ01',
            },
          },
          {
            dispName: 'SEC002MT',
            description: 'SEC-B列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3SEC002MT_XQ01',
              dcs: 'L3/3SEC002MT_XQ01',
              SIMULATOR: 'ML3/3SEC002MT_XQ01',
            },
          },
        ],
        {
          dispName: 'ASG001MC',
          description: '汽动泵转速',
          value: '***',
          unit: 'rpm',
          nodeId: {
            kns: 'L3/3ASG001MC_XQ01',
            dcs: 'L3/3ASG001MC_XQ01',
            SIMULATOR: 'ML3/3ASG001MC_XQ01',
          },
        },
      ],
    },
    {
      modelName: '专设安全系统',
      powerName: '岭澳核电站',
      no: 4,
      powerUnitId: 6,
      nodes: [
        [
          {
            dispName: 'EAS005MT',
            description: '地坑循环水温度 A',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4EAS005MT_XQ01',
              dcs: 'L4/4EAS005MT_XQ01',
              SIMULATOR: 'ML3/3EAS005MT_XQ01',
            },
          },
          {
            dispName: 'EAS006MT',
            description: '地坑循环水温度 B',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4EAS006MT_XQ01',
              dcs: 'L4/4EAS006MT_XQ01',
              SIMULATOR: 'ML3/3EAS006MT_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'EAS007MD',
            description: '安喷流量 A',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4EAS007MDX_XQ01',
              dcs: 'L4/4EAS007MDX_XQ01',
              SIMULATOR: 'ML3/3EAS007MDX_XQ01',
            },
          },
          {
            dispName: 'EAS008MD',
            description: '安喷流量 B',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4EAS008MDX_XQ01',
              dcs: 'L4/4EAS008MDX_XQ01',
              SIMULATOR: 'ML3/3EAS008MDX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RIS001MD',
            description: '高压安注 A列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4RIS001MDX_XQ01',
              dcs: 'L4/4RIS001MDX_XQ01',
              SIMULATOR: 'ML3/3RIS001MDX_XQ01',
            },
          },
          {
            dispName: 'RIS002MD',
            description: '高压安注 B列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4RIS002MDX_XQ01',
              dcs: 'L4/4RIS002MDX_XQ01',
              SIMULATOR: 'ML3/3RIS002MDX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RIS014MD',
            description: '低压安注 A列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4RIS014MDX_XQ01',
              dcs: 'L4/4RIS014MDX_XQ01',
              SIMULATOR: 'ML3/3RIS014MDX_XQ01',
            },
          },
          {
            dispName: 'RIS015MD',
            description: '低压安注 B列',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4RIS015MDX_XQ01',
              dcs: 'L4/4RIS015MDX_XQ01',
              SIMULATOR: 'ML3/3RIS015MDX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'ASG404EU',
            description: 'SG1 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4ASG404EU_XQ01',
              dcs: 'L4/4ASG404EU_XQ01',
              SIMULATOR: 'ML3/3ASG404EU_XQ01',
            },
          },
          {
            dispName: 'ASG405EU',
            description: 'SG2 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4ASG405EU_XQ01',
              dcs: 'L4/4ASG405EU_XQ01',
              SIMULATOR: 'ML3/3ASG405EU_XQ01',
            },
          },
          {
            dispName: 'ASG406EU',
            description: 'SG3 流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4ASG406EU_XQ01',
              dcs: 'L4/4ASG406EU_XQ01',
              SIMULATOR: 'ML3/3ASG406EU_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RRI001MD',
            description: 'RRI-A列流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4RRI001MDX_XQ01',
              dcs: 'L4/4RRI001MDX_XQ01',
              SIMULATOR: 'ML3/3RRI001MDX_XQ01',
            },
          },
          {
            dispName: 'RRI002MD',
            description: 'RRI-B列流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4RRI002MDX_XQ01',
              dcs: 'L4/4RRI002MDX_XQ01',
              SIMULATOR: 'ML3/3RRI002MDX_XQ01',
            },
          },
          {
            dispName: 'RRI021MD',
            description: 'RRI 公共负荷流量',
            value: '***',
            unit: 'm³/h',
            nodeId: {
              kns: 'L4/4RRI021MD_XQ01',
              dcs: 'L4/4RRI021MD_XQ01',
              SIMULATOR: 'ML3/3RRI021MD_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'ASG001MN',
            description: 'ASG001BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L4/4ASG001MNX_XQ01',
              dcs: 'L4/4ASG001MNX_XQ01',
              SIMULATOR: 'ML3/3ASG001MNX_XQ01',
            },
          },
          {
            dispName: 'ASG001MT',
            description: 'ASG001BA温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4ASG001MT_XQ01',
              dcs: 'L4/4ASG001MT_XQ01',
              SIMULATOR: 'ML3/3ASG001MT_XQ01',
            },
          },

          {
            dispName: 'RRI001MN',
            description: 'RRI001BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L4/4RRI001MN_XQ01',
              dcs: 'L4/4RRI001MN_XQ01',
              SIMULATOR: 'ML3/3RRI001MN_XQ01',
            },
          },
          {
            dispName: 'RRI002MN',
            description: 'RRI002BA液位',
            value: '***',
            unit: 'm',
            nodeId: {
              kns: 'L4/4RRI002MN_XQ01',
              dcs: 'L4/4RRI002MN_XQ01',
              SIMULATOR: 'ML3/3RRI002MN_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'RRI081MT',
            description: 'RRI A列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RRI081MT_XQ01',
              dcs: 'L4/4RRI081MT_XQ01',
              SIMULATOR: 'ML3/3RRI081MT_XQ01',
            },
          },
          {
            dispName: 'RRI082MT',
            description: 'RRI B列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4RRI082MT_XQ01',
              dcs: 'L4/4RRI082MT_XQ01',
              SIMULATOR: 'ML3/3RRI082MT_XQ01',
            },
          },
          {
            dispName: 'SEC001MT',
            description: 'SEC-A列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4SEC001MT_XQ01',
              dcs: 'L4/4SEC001MT_XQ01',
              SIMULATOR: 'ML3/3SEC001MT_XQ01',
            },
          },
          {
            dispName: 'SEC002MT',
            description: 'SEC-B列温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4SEC002MT_XQ01',
              dcs: 'L4/4SEC002MT_XQ01',
              SIMULATOR: 'ML3/3SEC002MT_XQ01',
            },
          },
        ],
        {
          dispName: 'ASG001MC',
          description: '汽动泵转速',
          value: '***',
          unit: 'rpm',
          nodeId: {
            kns: 'L4/4ASG001MC_XQ01',
            dcs: 'L4/4ASG001MC_XQ01',
            SIMULATOR: 'ML3/3ASG001MC_XQ01',
          },
        },
      ],
    },
    // 二回路给水及蒸汽系统 大亚湾核电站
    {
      modelName: '二回路给水及蒸汽系统',
      powerName: '大亚湾核电站',
      no: 1,
      powerUnitId: 1,
      nodes: [
        [
          {
            dispName: 'ARE010MN',
            description: 'SG1水位 NR',

            value: '***',
            // value: '0.007',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1ARE010MN',
              dcs: 'D1/D1ARE010MN',
              SIMULATOR: 'MD1/D1ARE010MN',
            },
          },
          {
            dispName: 'ARE020MN',
            description: 'SG2水位 NR',

            value: '***',
            // value: '0.006',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1ARE020MN',
              dcs: 'D1/D1ARE020MN',
              SIMULATOR: 'MD1/D1ARE020MN',
            },
          },
          {
            dispName: 'ARE030MN',
            description: 'SG3水位 NR',

            value: '***',
            // value: '0.003',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1ARE030MN',
              dcs: 'D1/D1ARE030MN',
              SIMULATOR: 'MD1/D1ARE030MN',
            },
          },
        ],
        [
          {
            dispName: 'ARE061MN',
            description: 'SG1水位 WR',

            value: '***',
            // value: '-1.25',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1ARE061MN',
              dcs: 'D1/D1ARE061MN',
              SIMULATOR: 'MD1/D1ARE061MN',
            },
          },
          {
            dispName: 'ARE062MN',
            description: 'SG2水位 WR',

            value: '***',
            // value: '-1.28',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1ARE062MN',
              dcs: 'D1/D1ARE062MN',
              SIMULATOR: 'MD1/D1ARE062MN',
            },
          },
          {
            dispName: 'ARE063MN',
            description: 'SG3水位 WR',

            value: '***',
            // value: '-1.27',
            unit: 'm',
            nodeId: {
              kns: 'D1/D1ARE063MN',
              dcs: 'D1/D1ARE063MN',
              SIMULATOR: 'MD1/D1ARE063MN',
            },
          },
        ],
        [
          {
            dispName: 'VVP013MP',
            description: 'SG1蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'bar',
            nodeId: {
              kns: 'D1/D1VVP013MP',
              dcs: 'D1/D1VVP013MP',
              SIMULATOR: 'MD1/D1VVP013MP',
            },
          },
          {
            dispName: 'VVP014MP',
            description: 'SG2蒸汽压力',

            value: '***',
            // value: '6.657',
            unit: 'bar',
            nodeId: {
              kns: 'D1/D1VVP014MP',
              dcs: 'D1/D1VVP014MP',
              SIMULATOR: 'MD1/D1VVP014MP',
            },
          },
          {
            dispName: 'VVP015MP1',
            description: 'SG3蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'bar',
            nodeId: {
              kns: 'D1/D1VVP015MP1',
              dcs: 'D1/D1VVP015MP1',
              SIMULATOR: 'MD1/D1VVP015MP1',
            },
          },
        ],
      ],
    },
    {
      modelName: '二回路给水及蒸汽系统',
      powerName: '大亚湾核电站',
      no: 2,
      powerUnitId: 2,
      nodes: [
        [
          {
            dispName: 'ARE010MN',
            description: 'SG1水位 NR',

            value: '***',
            // value: '0.007',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2ARE010MN',
              dcs: 'D2/D2ARE010MN',
              SIMULATOR: 'MD1/D1ARE010MN',
            },
          },
          {
            dispName: 'ARE020MN',
            description: 'SG2水位 NR',

            value: '***',
            // value: '0.006',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2ARE020MN',
              dcs: 'D2/D2ARE020MN',
              SIMULATOR: 'MD1/D1ARE020MN',
            },
          },
          {
            dispName: 'ARE030MN',
            description: 'SG3水位 NR',

            value: '***',
            // value: '0.003',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2ARE030MN',
              dcs: 'D2/D2ARE030MN',
              SIMULATOR: 'MD1/D1ARE030MN',
            },
          },
        ],
        [
          {
            dispName: 'ARE061MN',
            description: 'SG1水位 WR',

            value: '***',
            // value: '-1.25',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2ARE061MN',
              dcs: 'D2/D2ARE061MN',
              SIMULATOR: 'MD1/D1ARE061MN',
            },
          },
          {
            dispName: 'ARE062MN',
            description: 'SG2水位 WR',

            value: '***',
            // value: '-1.28',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2ARE062MN',
              dcs: 'D2/D2ARE062MN',
              SIMULATOR: 'MD1/D1ARE062MN',
            },
          },
          {
            dispName: 'ARE063MN',
            description: 'SG3水位 WR',

            value: '***',
            // value: '-1.27',
            unit: 'm',
            nodeId: {
              kns: 'D2/D2ARE063MN',
              dcs: 'D2/D2ARE063MN',
              SIMULATOR: 'MD1/D1ARE063MN',
            },
          },
        ],
        [
          {
            dispName: 'VVP013MP',
            description: 'SG1蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'bar',
            nodeId: {
              kns: 'D2/D2VVP013MP',
              dcs: 'D2/D2VVP013MP',
              SIMULATOR: 'MD1/D1VVP013MP',
            },
          },
          {
            dispName: 'VVP014MP',
            description: 'SG2蒸汽压力',

            value: '***',
            // value: '6.657',
            unit: 'bar',
            nodeId: {
              kns: 'D2/D2VVP014MP',
              dcs: 'D2/D2VVP014MP',
              SIMULATOR: 'MD1/D1VVP014MP',
            },
          },
          {
            dispName: 'VVP015MP',
            description: 'SG3蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'bar',
            nodeId: {
              kns: 'D2/D2VVP015MP1',
              dcs: 'D2/D2VVP015MP1',
              SIMULATOR: 'MD1/D1VVP015MP1',
            },
          },
        ],
      ],
    },
    // 二回路给水及蒸汽系统 岭澳核电站
    {
      modelName: '二回路给水及蒸汽系统',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 1,
      powerUnitId: 3,
      nodes: [
        [
          {
            dispName: 'ARE010MN',
            description: 'SG1水位 NR',

            value: '***',
            // value: '0.007',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1ARE010MN',
              dcs: 'L1/L1ARE010MN',
              SIMULATOR: 'ML1/L1ARE010MN',
            },
          },
          {
            dispName: 'ARE020MN',
            description: 'SG2水位 NR',

            value: '***',
            // value: '0.006',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1ARE020MN',
              dcs: 'L1/L1ARE020MN',
              SIMULATOR: 'ML1/L1ARE020MN',
            },
          },
          {
            dispName: 'ARE030MN',
            description: 'SG3水位 NR',

            value: '***',
            // value: '0.003',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1ARE030MN',
              dcs: 'L1/L1ARE030MN',
              SIMULATOR: 'ML1/L1ARE030MN',
            },
          },
        ],
        [
          {
            dispName: 'ARE061MN',
            description: 'SG1水位 WR',

            value: '***',
            // value: '-1.25',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1ARE061MN',
              dcs: 'L1/L1ARE061MN',
              SIMULATOR: 'ML1/L1ARE061MN',
            },
          },
          {
            dispName: 'ARE062MN',
            description: 'SG2水位 WR',

            value: '***',
            // value: '-1.28',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1ARE062MN',
              dcs: 'L1/L1ARE062MN',
              SIMULATOR: 'ML1/L1ARE062MN',
            },
          },
          {
            dispName: 'ARE063MN',
            description: 'SG3水位 WR',

            value: '***',
            // value: '-1.27',
            unit: 'm',
            nodeId: {
              kns: 'L1/L1ARE063MN',
              dcs: 'L1/L1ARE063MN',
              SIMULATOR: 'ML1/L1ARE063MN',
            },
          },
        ],
        [
          {
            dispName: 'VVP013MP',
            description: 'SG1蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'bar',
            nodeId: {
              kns: 'L1/L1VVP013MP',
              dcs: 'L1/L1VVP013MP',
              SIMULATOR: 'ML1/L1VVP013MP',
            },
          },
          {
            dispName: 'VVP014MP',
            description: 'SG2蒸汽压力',

            value: '***',
            // value: '6.657',
            unit: 'bar',
            nodeId: {
              kns: 'L1/L1VVP014MP',
              dcs: 'L1/L1VVP014MP',
              SIMULATOR: 'ML1/L1VVP014MP',
            },
          },
          {
            dispName: 'VVP015MP',
            description: 'SG3蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'bar',
            nodeId: {
              kns: 'L1/L1VVP015MP',
              dcs: 'L1/L1VVP015MP',
              SIMULATOR: 'ML1/L1VVP015MP',
            },
          },
        ],
      ],
    },
    {
      modelName: '二回路给水及蒸汽系统',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 2,
      powerUnitId: 4,
      nodes: [
        [
          {
            dispName: 'ARE010MN',
            description: 'SG1水位 NR',

            value: '***',
            // value: '0.007',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2ARE010MN',
              dcs: 'L2/L2ARE010MN',
              SIMULATOR: 'ML1/L1ARE010MN',
            },
          },
          {
            dispName: 'ARE020MN',
            description: 'SG2水位 NR',

            value: '***',
            // value: '0.006',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2ARE020MN',
              dcs: 'L2/L2ARE020MN',
              SIMULATOR: 'ML1/L1ARE020MN',
            },
          },
          {
            dispName: 'ARE030MN',
            description: 'SG3水位 NR',

            value: '***',
            // value: '0.003',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2ARE030MN',
              dcs: 'L2/L2ARE030MN',
              SIMULATOR: 'ML1/L1ARE030MN',
            },
          },
        ],
        [
          {
            dispName: 'ARE061MN',
            description: 'SG1水位 WR',

            value: '***',
            // value: '-1.25',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2ARE061MN',
              dcs: 'L2/L2ARE061MN',
              SIMULATOR: 'ML1/L1ARE061MN',
            },
          },
          {
            dispName: 'ARE062MN',
            description: 'SG2水位 WR',

            value: '***',
            // value: '-1.28',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2ARE062MN',
              dcs: 'L2/L2ARE062MN',
              SIMULATOR: 'ML1/L1ARE062MN',
            },
          },
          {
            dispName: 'ARE063MN',
            description: 'SG3水位 WR',

            value: '***',
            // value: '-1.27',
            unit: 'm',
            nodeId: {
              kns: 'L2/L2ARE063MN',
              dcs: 'L2/L2ARE063MN',
              SIMULATOR: 'ML1/L1ARE063MN',
            },
          },
        ],
        [
          {
            dispName: 'VVP013MP',
            description: 'SG1蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'bar',
            nodeId: {
              kns: 'L2/L2VVP013MP',
              dcs: 'L2/L2VVP013MP',
              SIMULATOR: 'ML1/L1VVP013MP',
            },
          },
          {
            dispName: 'VVP014MP',
            description: 'SG2蒸汽压力',

            value: '***',
            // value: '6.657',
            unit: 'bar',
            nodeId: {
              kns: 'L2/L2VVP014MP',
              dcs: 'L2/L2VVP014MP',
              SIMULATOR: 'ML1/L1VVP014MP',
            },
          },
          {
            dispName: 'VVP015MP',
            description: 'SG3蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'bar',
            nodeId: {
              kns: 'L2/L2VVP015MP',
              dcs: 'L2/L2VVP015MP',
              SIMULATOR: 'ML1/L1VVP015MP',
            },
          },
        ],
      ],
    },
    {
      modelName: '二回路给水及蒸汽系统',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 3,
      powerUnitId: 5,
      nodes: [
        [
          {
            dispName: 'ARE010MN',
            description: 'SG1水位 NR',

            value: '***',
            // value: '0.007',
            unit: 'm',
            nodeId: {
              kns: 'L3/3ARE010MNX_XQ01',
              dcs: 'L3/3ARE010MNX_XQ01',
              SIMULATOR: 'ML3/3ARE010MNX_XQ01',
            },
          },
          {
            dispName: 'ARE020MN',
            description: 'SG2水位 NR',

            value: '***',
            // value: '0.006',
            unit: 'm',
            nodeId: {
              kns: 'L3/3ARE020MNX_XQ01',
              dcs: 'L3/3ARE020MNX_XQ01',
              SIMULATOR: 'ML3/3ARE020MNX_XQ01',
            },
          },
          {
            dispName: 'ARE030MN',
            description: 'SG3水位 NR',

            value: '***',
            // value: '0.003',
            unit: 'm',
            nodeId: {
              kns: 'L3/3ARE030MNX_XQ01',
              dcs: 'L3/3ARE030MNX_XQ01',
              SIMULATOR: 'ML3/3ARE030MNX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'ARE061MN',
            description: 'SG1水位 WR',

            value: '***',
            // value: '-1.25',
            unit: 'm',
            nodeId: {
              kns: 'L3/3ARE061MNX_XQ01',
              dcs: 'L3/3ARE061MNX_XQ01',
              SIMULATOR: 'ML3/3ARE061MNX_XQ01',
            },
          },
          {
            dispName: 'ARE062MN',
            description: 'SG2水位 WR',

            value: '***',
            // value: '-1.28',
            unit: 'm',
            nodeId: {
              kns: 'L3/3ARE062MNX_XQ01',
              dcs: 'L3/3ARE062MNX_XQ01',
              SIMULATOR: 'ML3/3ARE062MNX_XQ01',
            },
          },
          {
            dispName: 'ARE063MN',
            description: 'SG3水位 WR',

            value: '***',
            // value: '-1.27',
            unit: 'm',
            nodeId: {
              kns: 'L3/3ARE063MNX_XQ01',
              dcs: 'L3/3ARE063MNX_XQ01',
              SIMULATOR: 'ML3/3ARE063MNX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'VVP013MP',
            description: 'SG1蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'MPa',
            nodeId: {
              kns: 'L3/3VVP013MPX_XQ01',
              dcs: 'L3/3VVP013MPX_XQ01',
              SIMULATOR: 'ML3/3VVP013MPX_XQ01',
            },
          },
          {
            dispName: 'VVP014MP',
            description: 'SG2蒸汽压力',

            value: '***',
            // value: '6.657',
            unit: 'MPa',
            nodeId: {
              kns: 'L3/3VVP014MPX_XQ01',
              dcs: 'L3/3VVP014MPX_XQ01',
              SIMULATOR: 'ML3/3VVP014MPX_XQ01',
            },
          },
          {
            dispName: 'VVP015MP',
            description: 'SG3蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'MPa',
            nodeId: {
              kns: 'L3/3VVP015MPX_XQ01',
              dcs: 'L3/3VVP015MPX_XQ01',
              SIMULATOR: 'ML3/3VVP015MPX_XQ01',
            },
          },
        ],
      ],
    },
    {
      modelName: '二回路给水及蒸汽系统',
      powerName: '岭澳核电站', // 大亚湾核电站 岭澳核电站
      no: 4,
      powerUnitId: 6,
      nodes: [
        [
          {
            dispName: 'ARE010MN',
            description: 'SG1水位 NR',

            value: '***',
            // value: '0.007',
            unit: 'm',
            nodeId: {
              kns: 'L4/4ARE010MNX_XQ01',
              dcs: 'L4/4ARE010MNX_XQ01',
              SIMULATOR: 'ML3/3ARE010MNX_XQ01',
            },
          },
          {
            dispName: 'ARE020MN',
            description: 'SG2水位 NR',

            value: '***',
            // value: '0.006',
            unit: 'm',
            nodeId: {
              kns: 'L4/4ARE020MNX_XQ01',
              dcs: 'L4/4ARE020MNX_XQ01',
              SIMULATOR: 'ML3/3ARE020MNX_XQ01',
            },
          },
          {
            dispName: 'ARE030MN',
            description: 'SG3水位 NR',

            value: '***',
            // value: '0.003',
            unit: 'm',
            nodeId: {
              kns: 'L4/4ARE030MNX_XQ01',
              dcs: 'L4/4ARE030MNX_XQ01',
              SIMULATOR: 'ML3/3ARE030MNX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'ARE061MN',
            description: 'SG1水位 WR',

            value: '***',
            // value: '-1.25',
            unit: 'm',
            nodeId: {
              kns: 'L4/4ARE061MNX_XQ01',
              dcs: 'L4/4ARE061MNX_XQ01',
              SIMULATOR: 'ML3/3ARE061MNX_XQ01',
            },
          },
          {
            dispName: 'ARE062MN',
            description: 'SG2水位 WR',

            value: '***',
            // value: '-1.28',
            unit: 'm',
            nodeId: {
              kns: 'L4/4ARE062MNX_XQ01',
              dcs: 'L4/4ARE062MNX_XQ01',
              SIMULATOR: 'ML3/3ARE062MNX_XQ01',
            },
          },
          {
            dispName: 'ARE063MN',
            description: 'SG3水位 WR',

            value: '***',
            // value: '-1.27',
            unit: 'm',
            nodeId: {
              kns: 'L4/4ARE063MNX_XQ01',
              dcs: 'L4/4ARE063MNX_XQ01',
              SIMULATOR: 'ML3/3ARE063MNX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'VVP013MP',
            description: 'SG1蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'MPa',
            nodeId: {
              kns: 'L4/4VVP013MPX_XQ01',
              dcs: 'L4/4VVP013MPX_XQ01',
              SIMULATOR: 'ML3/3VVP013MPX_XQ01',
            },
          },
          {
            dispName: 'VVP014MP',
            description: 'SG2蒸汽压力',

            value: '***',
            // value: '6.657',
            unit: 'MPa',
            nodeId: {
              kns: 'L4/4VVP014MPX_XQ01',
              dcs: 'L4/4VVP014MPX_XQ01',
              SIMULATOR: 'ML3/3VVP014MPX_XQ01',
            },
          },
          {
            dispName: 'VVP015MP',
            description: 'SG3蒸汽压力',

            value: '***',
            // value: '6.658',
            unit: 'MPa',
            nodeId: {
              kns: 'L4/4VVP015MPX_XQ01',
              dcs: 'L4/4VVP015MPX_XQ01',
              SIMULATOR: 'ML3/3VVP015MPX_XQ01',
            },
          },
        ],
      ],
    },

    // 安全壳及通风、放射性监测 大亚湾核电站
    {
      modelName: '安全壳及通风、放射性监测',
      powerName: '大亚湾核电站', // 大亚湾核电站 岭澳核电站
      no: 1,
      powerUnitId: 1,
      nodes: [
        [
          {
            dispName: 'ETY001MT',
            description: '安全壳温度',

            value: '***',
            // value: '35.4',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1ETY001MT',
              dcs: 'D1/D1ETY001MT',
              SIMULATOR: 'MD1/D1ETY001MT',
            },
          },
          {
            dispName: 'ETY004MT',
            description: '安全壳温度',

            value: '***',
            // value: '20.2',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1ETY004MT',
              dcs: 'D1/D1ETY004MT',
              SIMULATOR: 'MD1/D1ETY004MT',
            },
          },
          {
            dispName: 'ETY101MP',
            description: '安全壳压力',

            value: '***',
            // value: '100.6',
            unit: 'bar.a',
            nodeId: {
              kns: 'D1/D1ETY101MP',
              dcs: 'D1/D1ETY101MP',
              SIMULATOR: 'MD1/D1ETY101MP',
            },
          },
          {
            dispName: 'ETY102MP',
            description: '安全壳压力',

            value: '***',
            // value: '100.7',
            unit: 'bar.a',
            nodeId: {
              kns: 'D1/D1ETY102MP',
              dcs: 'D1/D1ETY102MP',
              SIMULATOR: 'MD1/D1ETY102MP',
            },
          },
        ],
        [
          {
            dispName: 'KRT004EU',
            description: 'SG1 排污放射性活度',

            value: '***',
            // value: '3.70E+03',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT004EU',
              dcs: 'D1/D1KRT004EU',
              SIMULATOR: 'MD1/D1KRT004EU',
            },
          },
          {
            dispName: 'KRT002EU',
            description: 'SG2 排污放射性活度',

            value: '***',
            // value: '3.70E+03',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT002EU',
              dcs: 'D1/D1KRT002EU',
              SIMULATOR: 'MD1/D1KRT002EU',
            },
          },
          {
            dispName: 'KRT003EU',
            description: 'SG3 排污放射性活度',

            value: '***',
            // value: '3.70E+03',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT003EU',
              dcs: 'D1/D1KRT003EU',
              SIMULATOR: 'MD1/D1KRT003EU',
            },
          },
        ],
        [
          {
            dispName: 'KRT007MA',
            description: '冷凝器放射性',

            value: '***',
            // value: '3.70E+04',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT007MA',
              dcs: 'D1/D1KRT007MA',
              SIMULATOR: 'MD1/D1KRT007MA',
            },
          },
          {
            dispName: 'KRT017MA',
            description: '烟囱放射性活度',

            value: '***',
            // value: '3.70E+03',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT017MA',
              dcs: 'D1/D1KRT017MA',
              SIMULATOR: 'MD1/D1KRT017MA',
            },
          },
          {
            dispName: 'KRT021MA',
            description: '烟囱放射性活度',

            value: '***',
            // value: '3.70E+08',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT021MA',
              dcs: 'D1/D1KRT021MA',
              SIMULATOR: 'MD1/D1KRT021MA',
            },
          },
          {
            dispName: 'KRT022MA',
            description: '安全壳剂量率 A列',

            value: '***',
            // value: '1.00E-03',
            unit: 'mGy/h',
            nodeId: {
              kns: 'D1/D1KRT022MA',
              dcs: 'D1/D1KRT022MA',
              SIMULATOR: 'MD1/D1KRT022MA',
            },
          },
        ],
        [
          {
            dispName: 'KRT023MA',
            description: '安全壳剂量率 B列',

            value: '***',
            // value: '1.00E-03',
            unit: 'mGy/h',
            nodeId: {
              kns: 'D1/D1KRT023MA',
              dcs: 'D1/D1KRT023MA',
              SIMULATOR: 'MD1/D1KRT023MA',
            },
          },
          {
            dispName: 'KRT026MA',
            description: '一回路γ剂量率',

            value: '***',
            // value: '1.61E-04',
            unit: 'nGy/h',
            nodeId: {
              kns: 'D1/D1KRT026MA',
              dcs: 'D1/D1KRT026MA',
              SIMULATOR: 'MD1/D1KRT026MA',
            },
          },
          {
            dispName: 'DVN001MD',
            description: '烟囱风速',

            value: '***',
            // value: '13.11',
            unit: 'm/s',
            nodeId: {
              kns: 'D1/D9DVN001MD',
              dcs: 'D1/D9DVN001MD',
              SIMULATOR: 'D1/D9DVN001MD',
            },
          },
        ],
      ],
    },
    {
      modelName: '安全壳及通风、放射性监测',
      powerName: '大亚湾核电站', // 大亚湾核电站 岭澳核电站
      no: 2,
      powerUnitId: 2,
      nodes: [
        [
          {
            dispName: 'ETY001MT',
            description: '安全壳温度',

            value: '***',
            // value: '35.4',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2ETY001MT',
              dcs: 'D2/D2ETY001MT',
              SIMULATOR: 'MD1/D1ETY001MT',
            },
          },
          {
            dispName: 'ETY004MT',
            description: '安全壳温度',

            value: '***',
            // value: '20.2',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2ETY004MT',
              dcs: 'D2/D2ETY004MT',
              SIMULATOR: 'MD1/D1ETY004MT',
            },
          },
          {
            dispName: 'ETY101MP',
            description: '安全壳压力',

            value: '***',
            // value: '100.6',
            unit: 'bar.a',
            nodeId: {
              kns: 'D2/D2ETY101MP',
              dcs: 'D2/D2ETY101MP',
              SIMULATOR: 'MD1/D1ETY101MP',
            },
          },
          {
            dispName: 'ETY102MP',
            description: '安全壳压力',

            value: '***',
            // value: '100.7',
            unit: 'bar.a',
            nodeId: {
              kns: 'D2/D2ETY102MP',
              dcs: 'D2/D2ETY102MP',
              SIMULATOR: 'MD1/D1ETY102MP',
            },
          },
          {
            dispName: 'KRT002EU',
            description: 'SG2 排污放射性活度',

            value: '***',
            // value: '3.70E+03',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT002EU',
              dcs: 'D2/D2KRT002EU',
              SIMULATOR: 'MD1/D1KRT002EU',
            },
          },
          {
            dispName: 'KRT003EU',
            description: 'SG3 排污放射性活度',

            value: '***',
            // value: '3.70E+03',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT003EU',
              dcs: 'D2/D2KRT003EU',
              SIMULATOR: 'MD1/D1KRT003EU',
            },
          },
          {
            dispName: 'KRT004EU',
            description: 'SG1 排污放射性活度',

            value: '***',
            // value: '3.70E+03',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT004EU',
              dcs: 'D2/D2KRT004EU',
              SIMULATOR: 'MD1/D1KRT004EU',
            },
          },
        ],
        [
          {
            dispName: 'KRT007MA01',
            description: '冷凝器放射性',

            value: '***',
            // value: '3.70E+04',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT007MA01',
              dcs: 'D2/D2KRT007MA01',
              SIMULATOR: 'MD1/D1KRT007MA',
            },
          },
          {
            dispName: 'KRT017MA',
            description: '烟囱放射性活度',

            value: '***',
            // value: '3.70E+03',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT017MA',
              dcs: 'D2/D2KRT017MA',
              SIMULATOR: 'MD1/D1KRT017MA',
            },
          },
          {
            dispName: 'KRT021MA',
            description: '烟囱放射性活度',

            value: '***',
            // value: '3.70E+08',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT021MA',
              dcs: 'D2/D2KRT021MA',
              SIMULATOR: 'MD1/D1KRT021MA',
            },
          },
          {
            dispName: 'KRT022MA',
            description: '安全壳剂量率 A列',

            value: '***',
            // value: '1.00E-03',
            unit: 'mGy/h',
            nodeId: {
              kns: 'D2/D2KRT022MA',
              dcs: 'D2/D2KRT022MA',
              SIMULATOR: 'MD1/D1KRT022MA',
            },
          },
        ],
        [
          {
            dispName: 'KRT023MA',
            description: '安全壳剂量率 B列',

            value: '***',
            // value: '1.00E-03',
            unit: 'mGy/h',
            nodeId: {
              kns: 'D2/D2KRT023MA',
              dcs: 'D2/D2KRT023MA',
              SIMULATOR: 'MD1/D1KRT023MA',
            },
          },
          {
            dispName: 'KRT026MA',
            description: '一回路γ剂量率',

            value: '***',
            // value: '1.61E-04',
            unit: 'nGy/h',
            nodeId: {
              kns: 'D1/D1KRT026MA',
              dcs: 'D1/D1KRT026MA',
              SIMULATOR: 'MD1/D1KRT026MA',
            },
          },
          {
            dispName: 'DVN001MD',
            description: '烟囱风速',

            value: '***',
            // value: '13.11',
            unit: 'm/s',
            nodeId: {
              kns: 'D1/D9DVN001MD',
              dcs: 'D1/D9DVN001MD',
              SIMULATOR: 'D1/D9DVN001MD',
            },
          },
        ],
      ],
    },
    // 安全壳及通风、放射性监测 岭澳核电站
    {
      modelName: '安全壳及通风、放射性监测',
      powerName: '大亚湾核电站',
      no: 1,
      powerUnitId: 1,
      nodes: [
        [
          {
            dispName: 'ETY001MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1ETY001MT',
              dcs: 'D1/D1ETY001MT',
              SIMULATOR: 'MD1/D1ETY001MT',
            },
          },
          {
            dispName: 'ETY004MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D1/D1ETY004MT',
              dcs: 'D1/D1ETY004MT',
              SIMULATOR: 'MD1/D1ETY004MT',
            },
          },
          {
            dispName: 'ETY101MP',
            description: '安全壳压力',
            value: '***',
            unit: 'bar.a',
            nodeId: {
              kns: 'D1/D1ETY101MP',
              dcs: 'D1/D1ETY101MP',
              SIMULATOR: 'MD1/D1ETY101MP',
            },
          },
          {
            dispName: 'ETY102MP',
            description: '安全壳压力',
            value: '***',
            unit: 'bar.a',
            nodeId: {
              kns: 'D1/D1ETY102MP',
              dcs: 'D1/D1ETY102MP',
              SIMULATOR: 'MD1/D1ETY102MP',
            },
          },
        ],
        [
          {
            dispName: 'KRT004EU',
            description: 'SG1 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT004EU',
              dcs: 'D1/D1KRT004EU',
              SIMULATOR: 'MD1/D1KRT004EU',
            },
          },
          {
            dispName: 'KRT002EU',
            description: 'SG2 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT002EU',
              dcs: 'D1/D1KRT002EU',
              SIMULATOR: 'MD1/D1KRT002EU',
            },
          },
          {
            dispName: 'KRT003EU',
            description: 'SG3 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT003EU',
              dcs: 'D1/D1KRT003EU',
              SIMULATOR: 'MD1/D1KRT003EU',
            },
          },
        ],
        [
          {
            dispName: 'KRT007MA',
            description: '冷凝器放射性',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT007MA',
              dcs: 'D1/D1KRT007MA',
              SIMULATOR: 'MD1/D1KRT007MA',
            },
          },
          {
            dispName: 'KRT017MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT017MA',
              dcs: 'D1/D1KRT017MA',
              SIMULATOR: 'MD1/D1KRT017MA',
            },
          },
          {
            dispName: 'KRT021MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D1/D1KRT021MA',
              dcs: 'D1/D1KRT021MA',
              SIMULATOR: 'MD1/D1KRT021MA',
            },
          },
          {
            dispName: 'KRT022MA',
            description: '安全壳剂量率 A列',
            value: '***',
            unit: 'mGy/h',
            nodeId: {
              kns: 'D1/D1KRT022MA',
              dcs: 'D1/D1KRT022MA',
              SIMULATOR: 'MD1/D1KRT022MA',
            },
          },
        ],
        [
          {
            dispName: 'KRT023MA',
            description: '安全壳剂量率 B列',
            value: '***',
            unit: 'mGy/h',
            nodeId: {
              kns: 'D1/D1KRT023MA',
              dcs: 'D1/D1KRT023MA',
              SIMULATOR: 'MD1/D1KRT023MA',
            },
          },
          {
            dispName: 'KRT026MA',
            description: '一回路γ剂量率',
            value: '***',
            unit: 'nGy/h',
            nodeId: {
              kns: 'D1/D1KRT026MA',
              dcs: 'D1/D1KRT026MA',
              SIMULATOR: 'MD1/D1KRT026MA',
            },
          },
          {
            dispName: 'DVN001MD',
            description: '烟囱风速',
            value: '***',
            unit: 'm/s',
            nodeId: {
              kns: 'D1/D1DVN001MD',
              dcs: 'D1/D1DVN001MD',
              SIMULATOR: 'MD1/D1DVN001MD',
            },
          },
        ],
      ],
    },
    {
      modelName: '安全壳及通风、放射性监测',
      powerName: '大亚湾核电站',
      no: 2,
      powerUnitId: 2,
      nodes: [
        [
          {
            dispName: 'ETY001MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2ETY001MT',
              dcs: 'D2/D2ETY001MT',
              SIMULATOR: 'MD1/D1ETY001MT',
            },
          },
          {
            dispName: 'ETY004MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'D2/D2ETY004MT',
              dcs: 'D2/D2ETY004MT',
              SIMULATOR: 'MD1/D1ETY004MT',
            },
          },
          {
            dispName: 'ETY101MP',
            description: '安全壳压力',
            value: '***',
            unit: 'bar.a',
            nodeId: {
              kns: 'D2/D2ETY101MP',
              dcs: 'D2/D2ETY101MP',
              SIMULATOR: 'MD1/D1ETY101MP',
            },
          },
          {
            dispName: 'ETY102MP',
            description: '安全壳压力',
            value: '***',
            unit: 'bar.a',
            nodeId: {
              kns: 'D2/D2ETY102MP',
              dcs: 'D2/D2ETY102MP',
              SIMULATOR: 'MD1/D1ETY102MP',
            },
          },
        ],
        [
          {
            dispName: 'KRT004EU',
            description: 'SG1 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT004EU',
              dcs: 'D2/D2KRT004EU',
              SIMULATOR: 'MD1/D1KRT004EU',
            },
          },
          {
            dispName: 'KRT002EU',
            description: 'SG2 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT002EU',
              dcs: 'D2/D2KRT002EU',
              SIMULATOR: 'MD1/D1KRT002EU',
            },
          },
          {
            dispName: 'KRT003EU',
            description: 'SG3 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT003EU',
              dcs: 'D2/D2KRT003EU',
              SIMULATOR: 'MD1/D1KRT003EU',
            },
          },
        ],
        [
          {
            dispName: 'KRT007MA',
            description: '冷凝器放射性',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT007MA',
              dcs: 'D2/D2KRT007MA',
              SIMULATOR: 'MD1/D1KRT007MA',
            },
          },
          {
            dispName: 'KRT017MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT017MA',
              dcs: 'D2/D2KRT017MA',
              SIMULATOR: 'MD1/D1KRT017MA',
            },
          },
          {
            dispName: 'KRT021MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'D2/D2KRT021MA',
              dcs: 'D2/D2KRT021MA',
              SIMULATOR: 'MD1/D1KRT021MA',
            },
          },
          {
            dispName: 'KRT022MA',
            description: '安全壳剂量率 A列',
            value: '***',
            unit: 'mGy/h',
            nodeId: {
              kns: 'D2/D2KRT022MA',
              dcs: 'D2/D2KRT022MA',
              SIMULATOR: 'MD1/D1KRT022MA',
            },
          },
        ],
        [
          {
            dispName: 'KRT023MA',
            description: '安全壳剂量率 B列',
            value: '***',
            unit: 'mGy/h',
            nodeId: {
              kns: 'D2/D2KRT023MA',
              dcs: 'D2/D2KRT023MA',
              SIMULATOR: 'MD1/D1KRT023MA',
            },
          },
          {
            dispName: 'KRT026MA',
            description: '一回路γ剂量率',
            value: '***',
            unit: 'nGy/h',
            nodeId: {
              kns: 'D2/D2KRT026MA',
              dcs: 'D2/D2KRT026MA',
              SIMULATOR: 'MD1/D1KRT026MA',
            },
          },
          {
            dispName: 'DVN001MD',
            description: '烟囱风速',
            value: '***',
            unit: 'm/s',
            nodeId: {
              kns: 'D2/D2DVN001MD',
              dcs: 'D2/D2DVN001MD',
              SIMULATOR: 'MD1/D1DVN001MD',
            },
          },
        ],
      ],
    },
    {
      modelName: '安全壳及通风、放射性监测',
      powerName: '岭澳核电站',
      no: 1,
      powerUnitId: 3,
      nodes: [
        [
          {
            dispName: 'ETY001MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1ETY001MT',
              dcs: 'L1/L1ETY001MT',
              SIMULATOR: 'ML1/L1ETY001MT',
            },
          },
          {
            dispName: 'ETY004MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L1/L1ETY004MT',
              dcs: 'L1/L1ETY004MT',
              SIMULATOR: 'ML1/L1ETY004MT',
            },
          },
          {
            dispName: 'ETY101MP',
            description: '安全壳压力',
            value: '***',
            unit: 'bar.a',
            nodeId: {
              kns: 'L1/L1ETY101MP',
              dcs: 'L1/L1ETY101MP',
              SIMULATOR: 'ML1/L1ETY101MP',
            },
          },
          {
            dispName: 'ETY102MP',
            description: '安全壳压力',
            value: '***',
            unit: 'bar.a',
            nodeId: {
              kns: 'L1/L1ETY102MP',
              dcs: 'L1/L1ETY102MP',
              SIMULATOR: 'ML1/L1ETY102MP',
            },
          },
        ],
        [
          {
            dispName: 'KRT004EU',
            description: 'SG1 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L1/L1KRT004EU',
              dcs: 'L1/L1KRT004EU',
              SIMULATOR: 'ML1/L1KRT004EU',
            },
          },
          {
            dispName: 'KRT002EU',
            description: 'SG2 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L1/L1KRT002EU',
              dcs: 'L1/L1KRT002EU',
              SIMULATOR: 'ML1/L1KRT002EU',
            },
          },
          {
            dispName: 'KRT003EU',
            description: 'SG3 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L1/L1KRT003EU',
              dcs: 'L1/L1KRT003EU',
              SIMULATOR: 'ML1/L1KRT003EU',
            },
          },
        ],
        [
          {
            dispName: 'KRT007MA',
            description: '冷凝器放射性',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L1/L1KRT007MA',
              dcs: 'L1/L1KRT007MA',
              SIMULATOR: 'ML1/L1KRT007MA',
            },
          },
          {
            dispName: 'KRT017MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L1/L1KRT017MA',
              dcs: 'L1/L1KRT017MA',
              SIMULATOR: 'ML1/L1KRT017MA',
            },
          },
          {
            dispName: 'KRT021MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L1/L1KRT021MA',
              dcs: 'L1/L1KRT021MA',
              SIMULATOR: 'ML1/L1KRT021MA',
            },
          },
          {
            dispName: 'KRT022MA',
            description: '安全壳剂量率 A列',
            value: '***',
            unit: 'mGy/h',
            nodeId: {
              kns: 'L1/L1KRT022MA',
              dcs: 'L1/L1KRT022MA',
              SIMULATOR: 'ML1/L1KRT022MA',
            },
          },
        ],
        [
          {
            dispName: 'KRT023MA',
            description: '安全壳剂量率 B列',
            value: '***',
            unit: 'mGy/h',
            nodeId: {
              kns: 'L1/L1KRT023MA',
              dcs: 'L1/L1KRT023MA',
              SIMULATOR: 'ML1/L1KRT023MA',
            },
          },
          {
            dispName: 'KRT026MA',
            description: '一回路γ剂量率',
            value: '***',
            unit: 'nGy/h',
            nodeId: {
              kns: 'L1/L1KRT026MA',
              dcs: 'L1/L1KRT026MA',
              SIMULATOR: 'ML1/L1KRT026MA',
            },
          },
          {
            dispName: 'DVN001MD',
            description: '烟囱风速',
            value: '***',
            unit: 'm/s',
            nodeId: {
              kns: 'L1/L1DVN001MD',
              dcs: 'L1/L1DVN001MD',
              SIMULATOR: 'ML1/L1DVN001MD',
            },
          },
        ],
      ],
    },
    {
      modelName: '安全壳及通风、放射性监测',
      powerName: '岭澳核电站',
      no: 2,
      powerUnitId: 4,
      nodes: [
        [
          {
            dispName: 'ETY001MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2ETY001MT',
              dcs: 'L2/L2ETY001MT',
              SIMULATOR: 'ML1/L1ETY001MT',
            },
          },
          {
            dispName: 'ETY004MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L2/L2ETY004MT',
              dcs: 'L2/L2ETY004MT',
              SIMULATOR: 'ML1/L1ETY004MT',
            },
          },
          {
            dispName: 'ETY101MP',
            description: '安全壳压力',
            value: '***',
            unit: 'bar.a',
            nodeId: {
              kns: 'L2/L2ETY101MP',
              dcs: 'L2/L2ETY101MP',
              SIMULATOR: 'ML1/L1ETY101MP',
            },
          },
          {
            dispName: 'ETY102MP',
            description: '安全壳压力',
            value: '***',
            unit: 'bar.a',
            nodeId: {
              kns: 'L2/L2ETY102MP',
              dcs: 'L2/L2ETY102MP',
              SIMULATOR: 'ML1/L1ETY102MP',
            },
          },
        ],
        [
          {
            dispName: 'KRT004EU',
            description: 'SG1 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L2/L2KRT004EU',
              dcs: 'L2/L2KRT004EU',
              SIMULATOR: 'ML1/L1KRT004EU',
            },
          },
          {
            dispName: 'KRT002EU',
            description: 'SG2 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L2/L2KRT002EU',
              dcs: 'L2/L2KRT002EU',
              SIMULATOR: 'ML1/L1KRT002EU',
            },
          },
          {
            dispName: 'KRT003EU',
            description: 'SG3 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L2/L2KRT003EU',
              dcs: 'L2/L2KRT003EU',
              SIMULATOR: 'ML1/L1KRT003EU',
            },
          },
        ],
        [
          {
            dispName: 'KRT007MA',
            description: '冷凝器放射性',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L2/L2KRT007MA',
              dcs: 'L2/L2KRT007MA',
              SIMULATOR: 'ML1/L1KRT007MA',
            },
          },
          {
            dispName: 'KRT017MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L2/L2KRT017MA',
              dcs: 'L2/L2KRT017MA',
              SIMULATOR: 'ML1/L1KRT017MA',
            },
          },
          {
            dispName: 'KRT021MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L2/L2KRT021MA',
              dcs: 'L2/L2KRT021MA',
              SIMULATOR: 'ML1/L1KRT021MA',
            },
          },
          {
            dispName: 'KRT022MA',
            description: '安全壳剂量率 A列',
            value: '***',
            unit: 'mGy/h',
            nodeId: {
              kns: 'L2/L2KRT022MA',
              dcs: 'L2/L2KRT022MA',
              SIMULATOR: 'ML1/L1KRT022MA',
            },
          },
        ],
        [
          {
            dispName: 'KRT023MA',
            description: '安全壳剂量率 B列',
            value: '***',
            unit: 'mGy/h',
            nodeId: {
              kns: 'L2/L2KRT023MA',
              dcs: 'L2/L2KRT023MA',
              SIMULATOR: 'ML1/L1KRT023MA',
            },
          },
          {
            dispName: 'KRT026MA',
            description: '一回路γ剂量率',
            value: '***',
            unit: 'nGy/h',
            nodeId: {
              kns: 'L2/L2KRT026MA',
              dcs: 'L2/L2KRT026MA',
              SIMULATOR: 'ML1/L1KRT026MA',
            },
          },
          {
            dispName: 'DVN001MD',
            description: '烟囱风速',
            value: '***',
            unit: 'm/s',
            nodeId: {
              kns: 'L2/L2DVN001MD',
              dcs: 'L2/L2DVN001MD',
              SIMULATOR: 'ML1/L1DVN001MD',
            },
          },
        ],
      ],
    },
    {
      modelName: '安全壳及通风、放射性监测',
      powerName: '岭澳核电站',
      no: 3,
      powerUnitId: 5,
      nodes: [
        [
          {
            dispName: 'ETY001MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3ETY001MTX_XQ01',
              dcs: 'L3/3ETY001MTX_XQ01',
              SIMULATOR: 'ML3/3ETY001MT_XQ01',
            },
          },
          {
            dispName: 'ETY004MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L3/3ETY004MT_XQ01',
              dcs: 'L3/3ETY004MT_XQ01',
              SIMULATOR: 'ML3/3ETY004MT_XQ01',
            },
          },
          {
            dispName: 'ETY101MP',
            description: '安全壳压力',
            value: '***',
            unit: 'kPa.A',
            nodeId: {
              kns: 'L3/3ETY101MPX_XQ01',
              dcs: 'L3/3ETY101MPX_XQ01',
              SIMULATOR: 'ML3/3ETY101MPX_XQ01',
            },
          },
          {
            dispName: 'ETY102MP',
            description: '安全壳压力',
            value: '***',
            unit: 'kPa.A',
            nodeId: {
              kns: 'L3/3ETY102MPX_XQ01',
              dcs: 'L3/3ETY102MPX_XQ01',
              SIMULATOR: 'ML3/3ETY102MPX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'KRT004EU',
            description: 'SG1 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L3/3KRT004MAK_XP01',
              dcs: 'L3/3KRT004MAK_XP01',
              SIMULATOR: 'ML3/3KRT004MAK_XP01',
            },
          },
          {
            dispName: 'KRT002EU',
            description: 'SG2 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L3/3KRT002MAK_XP01',
              dcs: 'L3/3KRT002MAK_XP01',
              SIMULATOR: 'ML3/3KRT002MAK_XP01',
            },
          },
          {
            dispName: 'KRT003EU',
            description: 'SG3 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L3/3KRT003MAK_XP01',
              dcs: 'L3/3KRT003MAK_XP01',
              SIMULATOR: 'ML3/3KRT003MAK_XP01',
            },
          },
        ],
        [
          {
            dispName: 'KRT007MA',
            description: '冷凝器放射性',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L3/3KRT007MA_XQ01',
              dcs: 'L3/3KRT007MA_XQ01',
              SIMULATOR: 'ML3/3KRT007MA_XQ01',
            },
          },
          {
            dispName: 'KRT017MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L3/3KRT017MAK_XP01',
              dcs: 'L3/3KRT017MAK_XP01',
              SIMULATOR: 'ML3/3KRT017MAK_XP01',
            },
          },
          {
            dispName: 'KRT021MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L3/3KRT021MAK_XP01',
              dcs: 'L3/3KRT021MAK_XP01',
              SIMULATOR: 'ML3/3KRT021MAK_XP01',
            },
          },
          {
            dispName: 'KRT022MA',
            description: '安全壳剂量率 A列',
            value: '***',
            unit: 'Gy/h',
            nodeId: {
              kns: 'L3/3KRT022MAK_XP01',
              dcs: 'L3/3KRT022MAK_XP01',
              SIMULATOR: 'ML3/3KRT022MAK_XP01',
            },
          },
        ],
        [
          {
            dispName: 'KRT023MA',
            description: '安全壳剂量率 B列',
            value: '***',
            unit: 'Gy/h',
            nodeId: {
              kns: 'L3/3KRT023MAK_XP01',
              dcs: 'L3/3KRT023MAK_XP01',
              SIMULATOR: 'ML3/3KRT023MAK_XP01',
            },
          },
          {
            dispName: 'KRT026MA',
            description: '一回路γ剂量率',
            value: '***',
            unit: 'μGy/h',
            nodeId: {
              kns: 'L3/3KRT026MA1_XQ01',
              dcs: 'L3/3KRT026MA1_XQ01',
              SIMULATOR: 'ML3/3KRT026MA1_XQ01',
            },
          },
          {
            dispName: 'DVN001MD',
            description: '烟囱风速',
            value: '***',
            unit: 'm/s',
            nodeId: {
              kns: 'L3/8DVN001MDX_XQ01',
              dcs: 'L3/8DVN001MDX_XQ01',
              SIMULATOR: 'ML3/8DVN001MDX_XQ01',
            },
          },
        ],
      ],
    },
    {
      modelName: '安全壳及通风、放射性监测',
      powerName: '岭澳核电站',
      no: 4,
      powerUnitId: 6,
      nodes: [
        [
          {
            dispName: 'ETY001MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4ETY001MTX_XQ01',
              dcs: 'L4/4ETY001MTX_XQ01',
              SIMULATOR: 'ML3/3ETY001MTX_XQ01',
            },
          },
          {
            dispName: 'ETY004MT',
            description: '安全壳温度',
            value: '***',
            unit: '℃',
            nodeId: {
              kns: 'L4/4ETY004MT_XQ01',
              dcs: 'L4/4ETY004MT_XQ01',
              SIMULATOR: 'ML3/3ETY004MT_XQ01',
            },
          },
          {
            dispName: 'ETY101MP',
            description: '安全壳压力',
            value: '***',
            unit: 'kPa.A',
            nodeId: {
              kns: 'L4/4ETY101MPX_XQ01',
              dcs: 'L4/4ETY101MPX_XQ01',
              SIMULATOR: 'ML3/3ETY101MPX_XQ01',
            },
          },
          {
            dispName: 'ETY102MP',
            description: '安全壳压力',
            value: '***',
            unit: 'kPa.A',
            nodeId: {
              kns: 'L4/4ETY102MPX_XQ01',
              dcs: 'L4/4ETY102MPX_XQ01',
              SIMULATOR: 'ML3/3ETY102MPX_XQ01',
            },
          },
        ],
        [
          {
            dispName: 'KRT004EU',
            description: 'SG1 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L4/4KRT004MAK_XP01',
              dcs: 'L4/4KRT004MAK_XP01',
              SIMULATOR: 'ML3/3KRT004MAK_XP01',
            },
          },
          {
            dispName: 'KRT002EU',
            description: 'SG2 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L4/4KRT002MAK_XP01',
              dcs: 'L4/4KRT002MAK_XP01',
              SIMULATOR: 'ML3/3KRT002MAK_XP01',
            },
          },
          {
            dispName: 'KRT003EU',
            description: 'SG3 排污放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L4/4KRT003MAK_XP01',
              dcs: 'L4/4KRT003MAK_XP01',
              SIMULATOR: 'ML3/3KRT003MAK_XP01',
            },
          },
        ],
        [
          {
            dispName: 'KRT007MA',
            description: '冷凝器放射性',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L4/4KRT007MA_XQ01',
              dcs: 'L4/4KRT007MA_XQ01',
              SIMULATOR: 'ML3/3KRT007MA_XQ01',
            },
          },
          {
            dispName: 'KRT017MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L4/4KRT017MAK_XP01',
              dcs: 'L4/4KRT017MAK_XP01',
              SIMULATOR: 'ML3/3KRT017MAK_XP01',
            },
          },
          {
            dispName: 'KRT021MA',
            description: '烟囱放射性活度',
            value: '***',
            unit: 'Bq/m³',
            nodeId: {
              kns: 'L4/4KRT021MAK_XP01',
              dcs: 'L4/4KRT021MAK_XP01',
              SIMULATOR: 'ML3/3KRT021MAK_XP01',
            },
          },
          {
            dispName: 'KRT022MA',
            description: '安全壳剂量率 A列',
            value: '***',
            unit: 'Gy/h',
            nodeId: {
              kns: 'L4/4KRT022MAK_XP01',
              dcs: 'L4/4KRT022MAK_XP01',
              SIMULATOR: 'ML3/3KRT022MAK_XP01',
            },
          },
        ],
        [
          {
            dispName: 'KRT023MA',
            description: '安全壳剂量率 B列',
            value: '***',
            unit: 'Gy/h',
            nodeId: {
              kns: 'L4/4KRT023MAK_XP01',
              dcs: 'L4/4KRT023MAK_XP01',
              SIMULATOR: 'ML3/3KRT023MAK_XP01',
            },
          },
          {
            dispName: 'KRT026MA',
            description: '一回路γ剂量率',
            value: '***',
            unit: 'μGy/h',
            nodeId: {
              kns: 'L4/4KRT026MA1_XQ01',
              dcs: 'L4/4KRT026MA1_XQ01',
              SIMULATOR: 'ML3/3KRT026MA1_XQ01',
            },
          },
          {
            dispName: 'DVN001MD',
            description: '烟囱风速',
            value: '***',
            unit: 'm/s',
            nodeId: {
              kns: 'L4/8DVN001MD1X_XQ01',
              dcs: 'L4/8DVN001MD1X_XQ01',
              SIMULATOR: 'ML3/8DVN001MDX_XQ01',
            },
          },
        ],
      ],
    },
  ],
};
