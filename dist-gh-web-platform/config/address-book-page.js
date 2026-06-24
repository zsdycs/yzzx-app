// 场外应急组织
const __OffSiteEmOrgList__ = [
  // 国家核安全局
  {
    name: '国家核安全局',
    tipsText: '(信息报送优先使用第一个号码)',
    tips: [
      {
        label: '电话',
        text: '13901043044或13801269017',
      },
      {
        label: '传真',
        text: '010-62259210或010-62258698',
      },
    ],
  },
  // 广核股份公司
  {
    name: '广核股份公司',
    tipsText: '(信息报送优先使用第一个号码)',
    tips: [
      {
        label: '电话',
        text: '13923430701或18566288119',
      },
      {
        label: '传真',
        text: '0755-88618874或0755-88618875',
      },
    ],
  },
  // 东北监督站
  {
    name: '东北监督站',
    tipsText: '(两个电话号码均需报送)',
    tips: [
      {
        label: '电话',
        text: '15841102890和15241171361',
      },
      {
        label: '传真',
        text: '0411-82697502',
      },
    ],
  },
  // 国家能源局
  {
    name: '国家能源局',
    tipsText: '(信息报送优先使用第一个号码)',
    tips: [
      {
        label: '电话',
        text: '010-68555493或15811321367',
      },
      {
        label: '传真',
        text: '010-68555848',
      },
    ],
  },
  // 广东省核应急办
  {
    name: '广东省核应急办',
    tipsText: '(信息报送优先使用第一个号码)',
    tips: [
      {
        label: '电话',
        text: '18840068199或024-86898890或024-86890351',
      },
      {
        label: '传真',
        text: '024-86898816或024-86898859',
      },
    ],
  },
  // 国家核应急办
  {
    name: '国家核应急办',
    tipsText: '(信息报送优先使用第一个号码)',
    tips: [
      {
        label: '电话',
        text: '010-88582418拨#1键或010-88581616',
      },
      {
        label: '传真',
        text: '010-88581612或010-88581297',
      },
    ],
  },
];

// 应急指挥部
const __EmCommandHead__ = {
  name: '应急指挥部',
  tips: [
    {
      label: '传真 收',
      text: '82348714',
    },
    {
      label: '传真 发',
      text: '82348729',
    },
  ],
  children: [
    {
      name: '应急总指挥PED',
      tips: [
        {
          label: '电话',
          text: '82348726',
        },
      ],
      postCode: 'PED',
    },
    {
      name: '应急指挥助理AED',
      tips: [
        {
          label: '电话',
          text: '82348717',
        },
      ],
      postCode: 'AED',
    },
    {
      name: '运行助理AOP1',
      tips: [
        {
          label: '电话',
          text: '82348728',
        },
      ],
      postCode: 'AOP1',
    },
    {
      name: '运行助理AOP2',
      tips: [
        {
          label: '电话',
          text: '82348719',
        },
      ],
      postCode: 'AOP2',
    },
    {
      name: '运行助理AOP3',
      tips: [
        {
          label: '电话',
          text: '82348810',
        },
      ],
      postCode: 'AOP3',
    },
    {
      name: '技术助理SEH6',
      tips: [
        {
          label: '电话',
          text: '82348727',
        },
      ],
      postCode: 'SEH6',
    },
    {
      name: '公众信息助理SEH7',
      tips: [
        {
          label: '电话',
          text: '82348725',
        },
      ],
      postCode: 'SEH7',
    },
    {
      name: '行政秘书SEH8',
      tips: [
        {
          label: '电话',
          text: '82348722',
        },
      ],
      postCode: 'SEH8',
    },
    {
      name: '通讯员SEH9',
      tips: [
        {
          label: '电话',
          text: '82348720',
        },
      ],
      postCode: 'SEH9',
    },
  ],
};

const __EmResTeam__ = [
  // 运行控制组1
  {
    name: 'GNPS<br/>运行控制组GOP',
    tips: [],
    sameGroup: false,
    children: [
      {
        name: '组长（值长）GOP1',
        tips: [
          {
            label: '传真',
            text: '82342061',
          },
        ],
        postCode: 'GOP1',
        personChildren: [
          {
            postCode: 'GOP1',
          },
        ],
        children: [
          {
            name: '安全工程师GOP2',
            tips: [
              {
                label: '电话',
                text: '25009/82342009',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP2',
              },
            ],
          },
          {
            name: '机组长GOP3',
            tips: [
              {
                label: '电话',
                text: '25001/25011',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP3',
              },
            ],
          },
          {
            name: '主任操纵员GOP4',
            tips: [
              {
                label: '电话',
                text: '82342001/342011',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP4',
              },
            ],
          },
          {
            name: '二级干预队队长GOP5',
            tips: [
              {
                label: '电话',
                text: '21003',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP5',
              },
            ],
          },
          {
            name: '主控室操纵员GOP6，7',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP6',
              },
              {
                postCode: 'GOP7',
              },
            ],
          },
          {
            name: '现场操作员GOP8',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP8',
              },
            ],
          },
          {
            name: '数据收集员GOP9A',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP9A',
              },
            ],
          },
          {
            name: '通讯记录员GOP9B',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP9B',
              },
            ],
          },
          {
            name: 'NX三废值班员GOP10',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'GOP10',
              },
            ],
          },
        ],
      },
    ],
  },
  // 运行控制组2
  {
    name: 'LNPS-I<br/>运行控制组LOP',
    tips: [],
    sameGroup: false,
    children: [
      {
        name: '组长（值长）LOP1',
        tips: [
          {
            label: '传真',
            text: '82342061',
          },
        ],
        postCode: 'LOP1',
        personChildren: [
          {
            postCode: 'LOP1',
          },
        ],
        children: [
          {
            name: '安全工程师LOP2',
            tips: [
              {
                label: '电话',
                text: '25009/82342009',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP2',
              },
            ],
          },
          {
            name: '机组长LOP3',
            tips: [
              {
                label: '电话',
                text: '25001/25011',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP3',
              },
            ],
          },
          {
            name: '主任操纵员LOP4',
            tips: [
              {
                label: '电话',
                text: '82342001/342011',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP4',
              },
            ],
          },
          {
            name: '二级干预队队长LOP5',
            tips: [
              {
                label: '电话',
                text: '21003',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP5',
              },
            ],
          },
          {
            name: '主控室操纵员LOP6，7',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP6',
              },
              {
                postCode: 'LOP7',
              },
            ],
          },
          {
            name: '现场操作员LOP8',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP8',
              },
            ],
          },
          {
            name: '数据收集员LOP9A',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP9A',
              },
            ],
          },
          {
            name: '通讯记录员LOP9B',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP9B',
              },
            ],
          },
          {
            name: 'NX三废值班员LOP10',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'LOP10',
              },
            ],
          },
        ],
      },
    ],
  },
  // 运行控制组3
  {
    name: 'LNPS-II<br/>运行控制组DOP',
    tips: [],
    sameGroup: false,
    children: [
      {
        name: '组长（值长）DOP1',
        tips: [
          {
            label: '传真',
            text: '82342061',
          },
        ],
        postCode: 'DOP1',
        personChildren: [
          {
            postCode: 'DOP1',
          },
        ],
        children: [
          {
            name: '安全工程师DOP2',
            tips: [
              {
                label: '电话',
                text: '25009/82342009',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP2',
              },
            ],
          },
          {
            name: '机组长DOP3',
            tips: [
              {
                label: '电话',
                text: '25001/25011',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP3',
              },
            ],
          },
          {
            name: '主任操纵员DOP4',
            tips: [
              {
                label: '电话',
                text: '82342001/342011',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP4',
              },
            ],
          },
          {
            name: '二级干预队队长DOP5',
            tips: [
              {
                label: '电话',
                text: '21003',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP5',
              },
            ],
          },
          {
            name: '主控室操纵员DOP6，7',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP6',
              },
              {
                postCode: 'DOP7',
              },
            ],
          },
          {
            name: '现场操作员DOP8',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP8',
              },
            ],
          },
          {
            name: '数据收集员DOP9A',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP9A',
              },
            ],
          },
          {
            name: '通讯记录员DOP9B',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP9B',
              },
            ],
          },
          {
            name: 'NX三废值班员DOP10',
            tips: [
              {
                label: '电话',
                text: '82342155',
              },
            ],
            personChildren: [
              {
                postCode: 'DOP10',
              },
            ],
          },
        ],
      },
    ],
  },
  // 技术支持组
  {
    name: '技术支持组TSC',
    tips: [
      {
        label: '传真',
        text: '82348731',
      },
    ],
    sameGroup: false,
    postCode: 'TSC1', // 值班人员工号
    children: [
      {
        name: '组长TSC1',
        tips: [
          {
            label: '电话',
            text: '82348705',
          },
        ],
        personChildren: [
          {
            postCode: 'TSC1',
          },
        ],
        children: [
          {
            name: '副组长TSC2',
            tips: [
              {
                label: '电话',
                text: '82348706',
              },
            ],
            personChildren: [
              {
                postCode: 'TSC2',
              },
            ],
          },
          {
            name: '机组状态诊断与预测助理TSC3',
            tips: [
              {
                label: '电话',
                text: '82348713',
              },
            ],
            personChildren: [
              {
                postCode: 'TSC3',
              },
            ],
          },
          {
            name: '源项与堆芯损伤评估助理TSC4',
            tips: [
              {
                label: '电话',
                text: '82348712',
              },
            ],
            personChildren: [
              {
                postCode: 'TSC4',
              },
            ],
          },
          {
            name: '设备系统助理TSC5',
            tips: [
              {
                label: '电话',
                text: '82348730',
              },
            ],
            personChildren: [
              {
                postCode: 'TSC5',
              },
            ],
          },
          {
            name: '性能试验助理TSC6',
            tips: [
              {
                label: '电话',
                text: '82348711',
              },
            ],
            personChildren: [
              {
                postCode: 'TSC6',
              },
            ],
          },
          {
            name: '后果评价助理TSC7',
            tips: [
              {
                label: '电话',
                text: '82348707',
              },
            ],
            personChildren: [
              {
                postCode: 'TSC7',
              },
            ],
          },
          {
            name: '环境监测助理及队员TSC8/8A/8B',
            tips: [
              {
                label: '电话',
                text: '82348707',
              },
            ],
            postCode: 'TSC8', // 值班人员工号
            personChildren: [
              {
                postCode: 'TSC8', // 岗位代码
              },
              {
                postCode: 'TSC8A', // 岗位代码
                allowCheckInPostCodeList: ['TSC8'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'TSC8B', // 岗位代码
                allowCheckInPostCodeList: ['TSC8'], // 允许签到的岗位code列表（即代签角色）
              },
            ],
          },
          {
            name: '化学助理及取样人员TSC9/9A/9B',
            tips: [
              {
                label: '电话',
                text: '82348707',
              },
            ],
            postCode: 'TSC9',
            personChildren: [
              {
                postCode: 'TSC9',
              },
              {
                postCode: 'TSC9A',
                allowCheckInPostCodeList: ['TSC9'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'TSC9B',
                allowCheckInPostCodeList: ['TSC9'], // 允许签到的岗位code列表（即代签角色）
              },
            ],
          },
          {
            name: '秘书TSC10',
            tips: [
              {
                label: '电话',
                text: '82348707',
              },
            ],
            personChildren: [
              {
                postCode: 'TSC10',
              },
            ],
          },
        ],
      },
    ],
  },
  // 维修服务组MSC
  {
    name: '维修服务组MSC',
    tips: [
      {
        label: '传真',
        text: '82348723',
      },
    ],
    sameGroup: false,
    postCode: 'MSC1',
    children: [
      {
        name: '组长MSC1',
        tips: [
          {
            label: '电话',
            text: '82348703',
          },
        ],
        personChildren: [
          {
            postCode: 'MSC1',
          },
        ],
        children: [
          {
            name: '副组长MSC1A',
            // handleSignPersonCode: 'MSC1', // 代签角色
            tips: [
              {
                label: '电话',
                text: '82348704',
              },
            ],
            personChildren: [
              {
                postCode: 'MSC1A',
                allowCheckInPostCodeList: ['MSC1'], // 允许签到的岗位code列表（即代签角色）
              },
            ],
          },
          {
            name: '转机助理MSC2',
            // handleSignPersonCode: 'MSC1', // 代签角色
            tips: [
              {
                label: '电话',
                text: '82348796',
              },
            ],
            personChildren: [
              {
                postCode: 'MSC2',
              },
            ],
          },
          {
            name: '静机助理MSC3',
            // handleSignPersonCode: 'MSC1', // 代签角色
            tips: [
              {
                label: '电话',
                text: '82348769',
              },
            ],
            personChildren: [
              {
                postCode: 'MSC3',
              },
            ],
          },
          {
            name: '仪表助理MSC4',
            // handleSignPersonCode: 'MSC1', // 代签角色
            tips: [
              {
                label: '电话',
                text: '82348770',
              },
            ],
            personChildren: [
              {
                postCode: 'MSC4',
              },
            ],
          },
          {
            name: '电气助理MSC5',
            // handleSignPersonCode: 'MSC1', // 代签角色
            tips: [
              {
                label: '电话',
                text: '82348771',
              },
            ],
            personChildren: [
              {
                postCode: 'MSC5',
              },
            ],
          },
          {
            name: '服务助理MSC6',
            // handleSignPersonCode: 'MSC1', // 代签角色
            isLine: false,
            tips: [
              {
                label: '电话',
                text: '82348771',
              },
            ],
            personChildren: [
              {
                postCode: 'MSC6',
              },
            ],
          },
          {
            name: '维修队（30人）',
            tips: [
              {
                label: '电话',
                text: '82348703',
              },
            ],
            personChildren: [
              {
                postCode: 'MSC2A',
                allowCheckInPostCodeList: ['MSC2'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC2B',
                allowCheckInPostCodeList: ['MSC2'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC2C',
                allowCheckInPostCodeList: ['MSC2'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC2D',
                allowCheckInPostCodeList: ['MSC2'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC2E',
                allowCheckInPostCodeList: ['MSC2'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC2F',
                allowCheckInPostCodeList: ['MSC2'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC2G',
                allowCheckInPostCodeList: ['MSC2'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC3A',
                allowCheckInPostCodeList: ['MSC3'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC3B',
                allowCheckInPostCodeList: ['MSC3'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC3C',
                allowCheckInPostCodeList: ['MSC3'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC3D',
                allowCheckInPostCodeList: ['MSC3'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC3E',
                allowCheckInPostCodeList: ['MSC3'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC3F',
                allowCheckInPostCodeList: ['MSC3'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4A',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4B',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4C',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4D',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4E',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4F',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4G',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4H',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC4I',
                allowCheckInPostCodeList: ['MSC4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC5A',
                allowCheckInPostCodeList: ['MSC5'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC5B',
                allowCheckInPostCodeList: ['MSC5'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC5C',
                allowCheckInPostCodeList: ['MSC5'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC5D',
                allowCheckInPostCodeList: ['MSC5'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC5E',
                allowCheckInPostCodeList: ['MSC5'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC5F',
                allowCheckInPostCodeList: ['MSC5'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC6A',
                allowCheckInPostCodeList: ['MSC6'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'MSC6B',
                allowCheckInPostCodeList: ['MSC6'], // 允许签到的岗位code列表（即代签角色）
              },
            ],
          },
        ],
      },
    ],
  },
  // 安全防护组GRP
  {
    name: '安全防护组GRP',
    tips: [],
    sameGroup: false,
    postCode: 'GRP1',
    children: [
      {
        name: '组长GRP1',
        tips: [
          {
            label: '电话',
            text: '82348749',
          },
        ],
        personChildren: [
          {
            postCode: 'GRP1',
          },
        ],
        children: [
          {
            name: '消防助理GRP2',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP2',
              },
            ],
          },
          {
            name: '辐射防护助理GRP3',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP3',
              },
            ],
          },
          {
            name: '职业医疗助理GRP4',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP4',
              },
            ],
          },
          {
            name: '消防值班队长GRP5',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP5',
              },
            ],
          },
          {
            name: '工业安全助理GRP6',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP6',
              },
            ],
          },
        ],
      },
      {
        name: '辐射防护控制区值班<br/>GNPS<br/>GRP3A-D',
        handleSignPersonCode: 'GRP1', // 代签角色
        tips: [
          {
            label: '电话',
            text: '82348748',
          },
        ],
        personChildren: [
          {
            postCode: 'GRP3A-D',
          },
        ],
        children: [
          {
            name: '辐射防护控制区值班<br/>LNPS-I<br/>GRP3A-L',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP3A-L',
              },
            ],
          },
          {
            name: '辐射防护控制区值班<br/>LNPS-II<br/>GRP3A-K',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP3A-K',
              },
            ],
          },
          {
            name: '辐射防护现场支持GRP3B',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP3B',
              },
            ],
          },
          {
            name: '辐射防护现场支持GRP3C',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP3C',
              },
            ],
          },
          {
            name: '辐射防护外围GRP3D',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP3D',
              },
            ],
          },
          {
            name: '职业医疗护士GRP4A',
            tips: [
              {
                label: '电话',
                text: '82348749',
              },
            ],
            personChildren: [
              {
                postCode: 'GRP4A',
              },
            ],
          },
        ],
      },
    ],
  },
  // 后勤支持组
  {
    name: '后勤保卫组',
    tips: [],
    sameGroup: false,
    postCode: 'SIA1',
    children: [
      {
        name: '组长SIA1',
        tips: [
          {
            label: '电话',
            text: '82348750',
          },
        ],
        personChildren: [
          {
            postCode: 'SIA1',
          },
        ],
        children: [
          {
            name: '交通助理SIA2',
            tips: [
              {
                label: '电话',
                text: '82348745',
              },
            ],
            personChildren: [
              {
                postCode: 'SIA2',
              },
            ],
          },
          {
            name: '后勤助理SIA3',
            tips: [
              {
                label: '电话',
                text: '82348746',
              },
            ],
            personChildren: [
              {
                postCode: 'SIA3',
              },
            ],
          },
          {
            name: '通信助理SIA4',
            tips: [
              {
                label: '电话',
                text: '82349297',
              },
            ],
            personChildren: [
              {
                postCode: 'SIA4',
              },
            ],
          },
          {
            name: '保卫助理SIA5',
            tips: [
              {
                label: '电话',
                text: '82349297',
              },
            ],
            personChildren: [
              {
                postCode: 'SIA5',
              },
            ],
          },
          {
            name: '通信抢修人员（6人）',
            tips: [
              {
                label: '电话',
                text: '82349297',
              },
            ],
            personChildren: [
              {
                postCode: 'SIA4A',
                allowCheckInPostCodeList: ['SIA4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'SIA4B',
                allowCheckInPostCodeList: ['SIA4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'SIA4C',
                allowCheckInPostCodeList: ['SIA4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'SIA4D',
                allowCheckInPostCodeList: ['SIA4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'SIA4E',
                allowCheckInPostCodeList: ['SIA4'], // 允许签到的岗位code列表（即代签角色）
              },
              {
                postCode: 'SIA4F',
                allowCheckInPostCodeList: ['SIA4'], // 允许签到的岗位code列表（即代签角色）
              },
            ],
          },
        ],
      },
    ],
  },
];

// 到岗统计
const __OnDutyStatistics__ = {
  SEH: {
    // 部门的岗位code列表
    // roleCodeList: [], // 通过各项的 roleItemList[].postCodeList[] 获取
    // 部门的岗位项列表
    // {
    //   name: '应急总指挥', // 岗位名称
    //   postCodeList: ['PED'], // 岗位code 列表
    // },
    roleItemList: [
      { name: '应急总指挥PED', postCodeList: ['PED'] },
      { name: '应急指挥助理AED', postCodeList: ['AED'] },
      { name: '运行助理AOP1', postCodeList: ['AOP1'] },
      { name: '运行助理AOP2', postCodeList: ['AOP2'] },
      { name: '运行助理AOP3', postCodeList: ['AOP3'] },
      { name: '技术助理SEH6', postCodeList: ['SEH6'] },
      { name: '公众信息助理SEH7', postCodeList: ['SEH7'] },
      { name: '行政秘书SEH8', postCodeList: ['SEH8'] },
      { name: '通讯员SEH9', postCodeList: ['SEH9'] },
    ],
  },
  GOP: {
    roleItemList: [
      { name: '组长（值长）GOP1', postCodeList: ['GOP1'] },
      { name: '安全工程师GOP2', postCodeList: ['GOP2'] },
      { name: '机组长GOP3', postCodeList: ['GOP3'] },
      { name: '主任操纵员GOP4', postCodeList: ['GOP4'] },
      { name: '二级干预队队长GOP5', postCodeList: ['GOP5'] },
      { name: '主控室操纵员GOP6，7', postCodeList: ['GOP6'] },
      { name: '现场操作员GOP8', postCodeList: ['GOP8'] },
      { name: '数据收集员GOP9A', postCodeList: ['GOP9A'] },
      { name: '通讯记录员GOP9B', postCodeList: ['GOP9B'] },
      { name: 'NX三废值班员GOP10', postCodeList: ['GOP10'] },
    ],
  },
  LOP: {
    roleItemList: [
      { name: '组长（值长）LOP1', postCodeList: ['LOP1'] },
      { name: '安全工程师LOP2', postCodeList: ['LOP2'] },
      { name: '机组长LOP3', postCodeList: ['LOP3'] },
      { name: '主任操纵员LOP4', postCodeList: ['LOP4'] },
      { name: '二级干预队队长LOP5', postCodeList: ['LOP5'] },
      { name: '主控室操纵员LOP6，7', postCodeList: ['LOP6'] },
      { name: '现场操作员LOP8', postCodeList: ['LOP8'] },
      { name: '数据收集员LOP9A', postCodeList: ['LOP9A'] },
      { name: '通讯记录员LOP9B', postCodeList: ['LOP9B'] },
      { name: 'NX三废值班员LOP10', postCodeList: ['LOP10'] },
    ],
  },
  DOP: {
    roleItemList: [
      { name: '组长（值长）DOP1', postCodeList: ['DOP1'] },
      { name: '安全工程师DOP2', postCodeList: ['DOP2'] },
      { name: '机组长DOP3', postCodeList: ['DOP3'] },
      { name: '主任操纵员DOP4', postCodeList: ['DOP4'] },
      { name: '二级干预队队长DOP5', postCodeList: ['DOP5'] },
      { name: '主控室操纵员DOP6，7', postCodeList: ['DOP6'] },
      { name: '现场操作员DOP8', postCodeList: ['DOP8'] },
      { name: '数据收集员DOP9A', postCodeList: ['DOP9A'] },
      { name: '通讯记录员DOP9B', postCodeList: ['DOP9B'] },
      { name: 'NX三废值班员DOP10', postCodeList: ['DOP10'] },
    ],
  },
  TSC: {
    roleItemList: [
      { name: '组长TSC1', postCodeList: ['TSC1'] },
      { name: '副组长TSC2', postCodeList: ['TSC2'] },
      { name: '机组状态诊断与预测助理TSC3', postCodeList: ['TSC3'] },
      { name: '源项与堆芯损伤评估助理TSC4', postCodeList: ['TSC4'] },
      { name: '设备系统助理TSC5', postCodeList: ['TSC5'] },
      { name: '性能试验助理TSC6', postCodeList: ['TSC6'] },
      { name: '后果评价助理TSC7', postCodeList: ['TSC7'] },
      { name: '环境监测助理及队员TSC8/8A/8B', postCodeList: ['TSC8', 'TSC8A', 'TSC8B'] },
      { name: '化学助理及取样人员TSC9/9A/9B', postCodeList: ['TSC9', 'TSC9A', 'TSC9B'] },
      { name: '秘书TSC10', postCodeList: ['TSC10'] },
    ],
  },
  MSC: {
    roleItemList: [
      { name: '组长MSC1', postCodeList: ['MSC1'] },
      { name: '副组长MSC1A', postCodeList: ['MSC1A'] },
      { name: '转机助理MSC2', postCodeList: ['MSC2'] },
      { name: '静机助理MSC3', postCodeList: ['MSC3'] },
      { name: '仪表助理MSC4', postCodeList: ['MSC4'] },
      { name: '电气助理MSC5', postCodeList: ['MSC5'] },
      { name: '服务助理MSC6', postCodeList: ['MSC6'] },
      {
        name: '维修队（30人）',
        postCodeList: [
          'MSC2A',
          'MSC2B',
          'MSC2C',
          'MSC2D',
          'MSC2E',
          'MSC2F',
          'MSC2G',
          'MSC3A',
          'MSC3B',
          'MSC3C',
          'MSC3D',
          'MSC3E',
          'MSC3F',
          'MSC4A',
          'MSC4B',
          'MSC4C',
          'MSC4D',
          'MSC4E',
          'MSC4F',
          'MSC4G',
          'MSC4H',
          'MSC4I',
          'MSC5A',
          'MSC5B',
          'MSC5C',
          'MSC5D',
          'MSC5E',
          'MSC5F',
          'MSC6A',
          'MSC6B',
        ],
      },
    ],
  },
  GRP: {
    roleItemList: [
      { name: '组长GRP1', postCodeList: ['GRP1'] },
      { name: '消防助理GRP2', postCodeList: ['GRP2'] },
      { name: '辐射防护助理GRP3', postCodeList: ['GRP3'] },
      { name: '职业医疗助理GRP4', postCodeList: ['GRP4'] },
      { name: '消防值班队长GRP5', postCodeList: ['GRP5'] },
      { name: '工业安全助理GRP6', postCodeList: ['GRP6'] },
      { name: '辐射防护控制区值班GNPS GRP3A-D', postCodeList: ['GRP3A-D'] },
      { name: '辐射防护控制区值班LNPS-I GRP3A-L', postCodeList: ['GRP3A-L'] },
      { name: '辐射防护控制区值班LNPS-II GRP3A-K', postCodeList: ['GRP3A-K'] },
      { name: '辐射防护现场支持GRP3B', postCodeList: ['GRP3B'] },
      { name: '辐射防护现场支持GRP3C', postCodeList: ['GRP3C'] },
      { name: '辐射防护外围GRP3D', postCodeList: ['GRP3D'] },
      { name: '职业医疗护士GRP4A', postCodeList: ['GRP4A'] },
    ],
  },
  SIA: {
    roleItemList: [
      { name: '组长SIA1', postCodeList: ['SIA1'] },
      { name: '交通助理SIA2', postCodeList: ['SIA2'] },
      { name: '后勤助理SIA3', postCodeList: ['SIA3'] },
      { name: '通信助理SIA4', postCodeList: ['SIA4'] },
      { name: '保卫助理SIA5', postCodeList: ['SIA5'] },
      {
        name: '通信抢修人员（6人）',
        postCodeList: ['SIA4A', 'SIA4B', 'SIA4C', 'SIA4D', 'SIA4E', 'SIA4F'],
      },
    ],
  },
};
