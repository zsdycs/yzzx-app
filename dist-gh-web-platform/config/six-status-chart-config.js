// 六大状态图
const __SixStatusChartConfig__ = {
  unit_1: {
    dcs: {
      sk: [
        {
          name: 'BC',
          tag: 'D1/D1KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'D1/D1KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'D1/D1KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'D1/D1KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'D1/D1KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'D1/D1KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'D1/D1KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'D1/D1KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'D1/D1KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'D1/D1KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'D1/D1KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'D1/D1KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'D1/D1ASG404EU',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'D1/D1ASG405EU',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'D1/D1ASG406EU',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'D1/D1RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'D1/D1KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'D1/D1KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'D1/D1KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'D1/D1KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'D1/D1KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'D1/D1KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'D1/D1KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'D1/D1KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'D1/D1KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'D1/D1KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'D1/D1KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'D1/D1KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'D1/D1KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'D1/D1KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS244VC',
          value: '***',
        },
      ],
    },
    kns: {
      sk: [
        {
          name: 'BC',
          tag: 'D1/D1KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'D1/D1KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'D1/D1KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'D1/D1KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'D1/D1KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'D1/D1KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'D1/D1KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'D1/D1KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'D1/D1KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'D1/D1KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'D1/D1KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'D1/D1KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'D1/D1ASG404EU',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'D1/D1ASG405EU',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'D1/D1ASG406EU',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'D1/D1RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'D1/D1KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'D1/D1KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'D1/D1KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'D1/D1KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'D1/D1KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'D1/D1KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'D1/D1KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'D1/D1KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'D1/D1KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'D1/D1KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'D1/D1KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'D1/D1KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'D1/D1KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'D1/D1KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'D1/D1KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D1/D1KPS244VC',
          value: '***',
        },
      ],
    },
    SIMULATOR: {
      sk: [
        {
          name: 'BC',
          tag: 'MD1/D1KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'MD1/D1KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'MD1/D1KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'MD1/D1KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'MD1/D1KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'MD1/D1KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'MD1/D1KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'MD1/D1KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'MD1/D1KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'MD1/D1KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'MD1/D1KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'MD1/D1KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'MD1/D1ASG404EU',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'MD1/D1ASG405EU',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'MD1/D1ASG406EU',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'MD1/D1RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'MD1/D1KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'MD1/D1KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'MD1/D1KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'MD1/D1KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'MD1/D1KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'MD1/D1KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'MD1/D1KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'MD1/D1KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'MD1/D1KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'MD1/D1KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'MD1/D1KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'MD1/D1KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'MD1/D1KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'MD1/D1KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS244VC',
          value: '***',
        },
      ],
    },
  },
  unit_2: {
    dcs: {
      sk: [
        {
          name: 'BC',
          tag: 'D2/D2KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'D2/D2KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'D2/D2KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'D2/D2KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'D2/D2KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'D2/D2KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'D2/D2KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'D2/D2KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'D2/D2KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'D2/D2KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'D2/D2KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'D2/D2KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'D2/D2ASG404EU',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'D2/D2ASG405EU',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'D2/D2ASG406EU',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'D2/D2RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'D2/D2KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'D2/D2KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'D2/D2KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'D2/D2KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'D2/D2KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'D2/D2KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'D2/D2KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'D2/D2KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'D2/D2KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'D2/D2KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'D2/D2KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'D2/D2KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'D2/D2KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'D2/D2KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS244VC',
          value: '***',
        },
      ],
    },
    kns: {
      sk: [
        {
          name: 'BC',
          tag: 'D2/D2KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'D2/D2KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'D2/D2KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'D2/D2KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'D2/D2KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'D2/D2KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'D2/D2KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'D2/D2KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'D2/D2KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'D2/D2KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'D2/D2KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'D2/D2KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'D2/D2ASG404EU',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'D2/D2ASG405EU',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'D2/D2ASG406EU',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'D2/D2RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'D2/D2KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'D2/D2KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'D2/D2KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'D2/D2KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'D2/D2KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'D2/D2KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'D2/D2KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'D2/D2KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'D2/D2KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'D2/D2KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'D2/D2KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'D2/D2KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'D2/D2KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'D2/D2KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'D2/D2KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'D2/D2KPS244VC',
          value: '***',
        },
      ],
    },
    SIMULATOR: {
      sk: [
        {
          name: 'BC',
          tag: 'MD1/D1KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'MD1/D1KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'MD1/D1KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'MD1/D1KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'MD1/D1KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'MD1/D1KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'MD1/D1KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'MD1/D1KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'MD1/D1KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'MD1/D1KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'MD1/D1KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'MD1/D1KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'MD1/D1ASG404EU',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'MD1/D1ASG405EU',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'MD1/D1ASG406EU',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'MD1/D1RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'MD1/D1KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'MD1/D1KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'MD1/D1KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'MD1/D1KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'MD1/D1KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'MD1/D1KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'MD1/D1KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'MD1/D1KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'MD1/D1KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'MD1/D1KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'MD1/D1KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'MD1/D1KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'MD1/D1KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'MD1/D1KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'MD1/D1KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'MD1/D1KPS244VC',
          value: '***',
        },
      ],
    },
  },
  unit_3: {
    dcs: {
      sk: [
        {
          name: 'BC',
          tag: 'L1/L1KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'L1/L1KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'L1/L1KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'L1/L1KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'L1/L1KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'L1/L1KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'L1/L1KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L1/L1KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L1/L1KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L1/L1KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L1/L1KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L1/L1KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L1/L1ASG001VE',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'L1/L1ASG002VE',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'L1/L1ASG003VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'L1/L1RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'L1/L1KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'L1/L1KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'L1/L1KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'L1/L1KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'L1/L1KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'L1/L1KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L1/L1KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L1/L1KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L1/L1KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L1/L1KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L1/L1KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L1/L1KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'L1/L1KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'L1/L1KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS244VC',
          value: '***',
        },
      ],
    },
    kns: {
      sk: [
        {
          name: 'BC',
          tag: 'L1/L1KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'L1/L1KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'L1/L1KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'L1/L1KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'L1/L1KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'L1/L1KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'L1/L1KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L1/L1KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L1/L1KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L1/L1KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L1/L1KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L1/L1KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L1/L1ASG001VE',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'L1/L1ASG002VE',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'L1/L1ASG003VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'L1/L1RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'L1/L1KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'L1/L1KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'L1/L1KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'L1/L1KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'L1/L1KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'L1/L1KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L1/L1KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L1/L1KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L1/L1KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L1/L1KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L1/L1KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L1/L1KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'L1/L1KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'L1/L1KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'L1/L1KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L1/L1KPS244VC',
          value: '***',
        },
      ],
    },
    SIMULATOR: {
      sk: [
        {
          name: 'BC',
          tag: 'ML1/L1KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'ML1/L1KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'ML1/L1KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'ML1/L1KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'ML1/L1KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'ML1/L1KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'ML1/L1KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'ML1/L1KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'ML1/L1KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'ML1/L1KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'ML1/L1KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'ML1/L1KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'ML1/L1ASG001VE',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'ML1/L1ASG002VE',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'ML1/L1ASG003VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'ML1/L1RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'ML1/L1KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'ML1/L1KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'ML1/L1KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'ML1/L1KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'ML1/L1KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'ML1/L1KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'ML1/L1KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'ML1/L1KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'ML1/L1KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'ML1/L1KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'ML1/L1KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'ML1/L1KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'ML1/L1KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'ML1/L1KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS244VC',
          value: '***',
        },
      ],
    },
  },
  unit_4: {
    dcs: {
      sk: [
        {
          name: 'BC',
          tag: 'L2/L2KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'L2/L2KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'L2/L2KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'L2/L2KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'L2/L2KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'L2/L2KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'L2/L2KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L2/L2KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L2/L2KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L2/L2KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L2/L2KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L2/L2KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L2/L2ASG001VE',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'L2/L2ASG002VE',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'L2/L2ASG003VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'L2/L2RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'L2/L2KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'L2/L2KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'L2/L2KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'L2/L2KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'L2/L2KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'L2/L2KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L2/L2KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L2/L2KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L2/L2KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L2/L2KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L2/L2KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L2/L2KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'L2/L2KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'L2/L2KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS244VC',
          value: '***',
        },
      ],
    },
    kns: {
      sk: [
        {
          name: 'BC',
          tag: 'L2/L2KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'L2/L2KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'L2/L2KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'L2/L2KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'L2/L2KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'L2/L2KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'L2/L2KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L2/L2KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L2/L2KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L2/L2KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L2/L2KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L2/L2KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L2/L2ASG001VE',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'L2/L2ASG002VE',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'L2/L2ASG003VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'L2/L2RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'L2/L2KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'L2/L2KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'L2/L2KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'L2/L2KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'L2/L2KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'L2/L2KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L2/L2KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L2/L2KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L2/L2KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L2/L2KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L2/L2KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L2/L2KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'L2/L2KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'L2/L2KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'L2/L2KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L2/L2KPS244VC',
          value: '***',
        },
      ],
    },
    SIMULATOR: {
      sk: [
        {
          name: 'BC',
          tag: 'ML1/L1KPS117VE',
          value: '***',
          unit: 'ppm',
        },
        {
          name: 'IRC',
          tag: 'ML1/L1KPS118VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS210VC',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'ML1/L1KPS158VE',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'ML1/L1KPS160VE',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'ML1/L1KPS162VE',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'ML1/L1KPS103VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS211VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS212VC',
          value: '***',
        },
      ],
      ies: [
        // IES缺少缺少Q ASG点位 需重新校对 以补充
        {
          name: 'sg11',
          tag: 'ML1/L1KPS109VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'ML1/L1KPS110VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'ML1/L1KPS111VE',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'ML1/L1KPS112VE',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'ML1/L1KPS113VE',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'ML1/L1KPS114VE',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'ML1/L1ASG001VE',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'ML1/L1ASG002VE',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'ML1/L1ASG003VE',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS213VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS214VC',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'ML1/L1RCP090MN', // 暂无 更新为RCP090MN
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'ML1/L1KPS104VE',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'ML1/L1KPS164VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS226VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS227VC',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'ML1/L1KPS116VE',
          value: '***',
          unit: 'bar.a',
        },
        {
          name: 'Radioactivity',
          tag: 'ML1/L1KPS166VE',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'ML1/L1KPS215VC',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS245VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS246VC',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'ML1/L1KPS229VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'ML1/L1KPS231VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'ML1/L1KPS233VC',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'ML1/L1KPS235VC',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'ML1/L1KPS237VC',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'ML1/L1KPS239VC',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'ML1/L1KPS106VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg32',
          tag: 'ML1/L1KPS107VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'sg33',
          tag: 'ML1/L1KPS108VE',
          value: '***',
          unit: 'bar',
        },
        {
          name: 'LD',
          tag: 'ML1/L1KPS243VC',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML1/L1KPS244VC',
          value: '***',
        },
      ],
    },
  },
  unit_5: {
    dcs: {
      sk: [
        {
          name: 'BC',
          tag: 'L3/3REN012MG1_XQ01',
          value: '***',
          unit: 'mg/L',
        },
        {
          name: 'IRC',
          tag: 'L3/3RPN901KM_XO10',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO911KS_XI21',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'L3/3RIC903KM_XO01',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'L3/3RIC929KM_XO03',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'L3/3RIC930KM_XO01',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'L3/3RCP951KM_XO12',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO912KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO912KS_XI22',
          value: '***',
        },
      ],
      ies: [
        {
          name: 'sg11',
          tag: 'L3/3ARE061MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L3/3ARE062MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L3/3ARE063MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L3/3ARE900KM_XO19',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L3/3ARE901KM_XO19',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L3/3ARE902KM_XO19',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L3/3ASG900KM_XO18',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'L3/3ASG901KM_XO18',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'L3/3ASG902KM_XO18',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO914KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO915KS_XI22',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'L3/3RCP629KM_XQ01',
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'L3/3RCP601KM_XQ01',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'L3/3RCP900KM_XO18',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO913KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO913KS_XI22',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'L3/3ETY900KM_XO19',
          value: '***',
          unit: 'kPa-A',
        },
        {
          name: 'Radioactivity',
          tag: 'L3/3KRT900KM_XO03',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'L3/3KOO917KS_XI27',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO916KS_XI22',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO916KS_XI21',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'L3/3KOO917KS_XI21',
          value: '***',
        },
        {
          name: 'sg12',
          tag: 'L3/3KOO917KS_XI22',
          value: '***',
        },
        {
          name: 'sg13',
          tag: 'L3/3KOO917KS_XI23',
          value: '***',
        },
        {
          name: 'sg21',
          tag: 'L3/3KOO917KS_XI24',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L3/3KOO917KS_XI25',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L3/3KOO917KS_XI26',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L3/3VVP900KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg32',
          tag: 'L3/3VVP901KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg33',
          tag: 'L3/3VVP902KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO915KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO915KS_XI22',
          value: '***',
        },
      ],
    },
    kns: {
      sk: [
        {
          name: 'BC',
          tag: 'L3/3REN012MG1_XQ01',
          value: '***',
          unit: 'mg/L',
        },
        {
          name: 'IRC',
          tag: 'L3/3RPN901KM_XO10',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO911KS_XI21',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'L3/3RIC903KM_XO01',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'L3/3RIC929KM_XO03',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'L3/3RIC930KM_XO01',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'L3/3RCP951KM_XO12',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO912KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO912KS_XI22',
          value: '***',
        },
      ],
      ies: [
        {
          name: 'sg11',
          tag: 'L3/3ARE061MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L3/3ARE062MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L3/3ARE063MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L3/3ARE900KM_XO19',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L3/3ARE901KM_XO19',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L3/3ARE902KM_XO19',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L3/3ASG900KM_XO18',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'L3/3ASG901KM_XO18',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'L3/3ASG902KM_XO18',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO914KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO915KS_XI22',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'L3/3RCP629KM_XQ01',
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'L3/3RCP601KM_XQ01',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'L3/3RCP900KM_XO18',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO913KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO913KS_XI22',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'L3/3ETY900KM_XO19',
          value: '***',
          unit: 'kPa-A',
        },
        {
          name: 'Radioactivity',
          tag: 'L3/3KRT900KM_XO03',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'L3/3KOO917KS_XI27',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO916KS_XI22',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO916KS_XI21',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'L3/3KOO917KS_XI21',
          value: '***',
        },
        {
          name: 'sg12',
          tag: 'L3/3KOO917KS_XI22',
          value: '***',
        },
        {
          name: 'sg13',
          tag: 'L3/3KOO917KS_XI23',
          value: '***',
        },
        {
          name: 'sg21',
          tag: 'L3/3KOO917KS_XI24',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L3/3KOO917KS_XI25',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L3/3KOO917KS_XI26',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L3/3VVP900KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg32',
          tag: 'L3/3VVP901KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg33',
          tag: 'L3/3VVP902KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'L3/3KOO915KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L3/3KOO915KS_XI22',
          value: '***',
        },
      ],
    },
    SIMULATOR: {
      sk: [
        {
          name: 'BC',
          tag: 'ML3/3REN012MG1_XQ01',
          value: '***',
          unit: 'mg/L',
        },
        {
          name: 'IRC',
          tag: 'ML3/3RPN901KM_XO10',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO911KS_XI21',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'ML3/3RIC903KM_XO01',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'ML3/3RIC929KM_XO03',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'ML3/3RIC930KM_XO01',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'ML3/3RCP951KM_XO12',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO912KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO912KS_XI22',
          value: '***',
        },
      ],
      ies: [
        {
          name: 'sg11',
          tag: 'ML3/3ARE061MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'ML3/3ARE062MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'ML3/3ARE063MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'ML3/3ARE900KM_XO19',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'ML3/3ARE901KM_XO19',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'ML3/3ARE902KM_XO19',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'ML3/3ASG900KM_XO18',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'ML3/3ASG901KM_XO18',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'ML3/3ASG902KM_XO18',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO914KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO915KS_XI22',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'ML3/3RCP629KM_XQ01',
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'ML3/3RCP601KM_XQ01',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'ML3/3RCP900KM_XO18',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO913KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO913KS_XI22',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'ML3/3ETY900KM_XO19',
          value: '***',
          unit: 'kPa-A',
        },
        {
          name: 'Radioactivity',
          tag: 'ML3/3KRT900KM_XO03',
          value: '***',
          unit: 'mGy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'ML3/3KOO917KS_XI27',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO916KS_XI22',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO916KS_XI21',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'ML3/3KOO917KS_XI21',
          value: '***',
        },
        {
          name: 'sg12',
          tag: 'ML3/3KOO917KS_XI22',
          value: '***',
        },
        {
          name: 'sg13',
          tag: 'ML3/3KOO917KS_XI23',
          value: '***',
        },
        {
          name: 'sg21',
          tag: 'ML3/3KOO917KS_XI24',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'ML3/3KOO917KS_XI25',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'ML3/3KOO917KS_XI26',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'ML3/3VVP900KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg32',
          tag: 'ML3/3VVP901KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg33',
          tag: 'ML3/3VVP902KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO915KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO915KS_XI22',
          value: '***',
        },
      ],
    },
  },
  unit_6: {
    dcs: {
      sk: [
        {
          name: 'BC',
          tag: 'L4/4REN012MG1_XQ01',
          value: '***',
          unit: 'mg/L',
        },
        {
          name: 'IRC',
          tag: 'L4/4RPN901KM_XO10',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO911KS_XI21',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'L4/4RIC903KM_XO01',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'L4/4RIC929KM_XO03',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'L4/4RIC930KM_XO01',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'L4/4RCP951KM_XO12',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO912KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO912KS_XI22',
          value: '***',
        },
      ],
      ies: [
        {
          name: 'sg11',
          tag: 'L4/4ARE061MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L4/4ARE062MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L4/4ARE063MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L4/4ARE900KM_XO19',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L4/4ARE901KM_XO19',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L4/4ARE902KM_XO19',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L4/4ASG900KM_XO18',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'L4/4ASG901KM_XO18',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'L4/4ASG902KM_XO18',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO914KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO915KS_XI22',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'L4/4RCP629KM_XQ01',
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'L4/4RCP601KM_XQ01',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'L4/4RCP900KM_XO18',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO913KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO913KS_XI22',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'L4/4ETY900KM_XO19',
          value: '***',
          unit: 'kPa-A',
        },
        {
          name: 'Radioactivity',
          tag: 'L4/4KRT900KM_XO03',
          value: '***',
          unit: 'Gy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'L4/4KOO917KS_XI27',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO916KS_XI22',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO916KS_XI21',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'L4/4KOO917KS_XI21',
          value: '***',
        },
        {
          name: 'sg12',
          tag: 'L4/4KOO917KS_XI22',
          value: '***',
        },
        {
          name: 'sg13',
          tag: 'L4/4KOO917KS_XI23',
          value: '***',
        },
        {
          name: 'sg21',
          tag: 'L4/4KOO917KS_XI24',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L4/4KOO917KS_XI25',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L4/4KOO917KS_XI26',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L4/4VVP900KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg32',
          tag: 'L4/4VVP901KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg33',
          tag: 'L4/4VVP902KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO915KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO915KS_XI22',
          value: '***',
        },
      ],
    },
    kns: {
      sk: [
        {
          name: 'BC',
          tag: 'L4/4REN012MG1_XQ01',
          value: '***',
          unit: 'mg/L',
        },
        {
          name: 'IRC',
          tag: 'L4/4RPN901KM_XO10',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO911KS_XI21',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'L4/4RIC903KM_XO01',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'L4/4RIC929KM_XO03',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'L4/4RIC930KM_XO01',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'L4/4RCP951KM_XO12',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO912KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO912KS_XI22',
          value: '***',
        },
      ],
      ies: [
        {
          name: 'sg11',
          tag: 'L4/4ARE061MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'L4/4ARE062MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'L4/4ARE063MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'L4/4ARE900KM_XO19',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L4/4ARE901KM_XO19',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L4/4ARE902KM_XO19',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L4/4ASG900KM_XO18',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'L4/4ASG901KM_XO18',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'L4/4ASG902KM_XO18',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO914KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO915KS_XI22',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'L4/4RCP629KM_XQ01',
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'L4/4RCP601KM_XQ01',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'L4/4RCP900KM_XO18',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO913KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO913KS_XI22',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'L4/4ETY900KM_XO19',
          value: '***',
          unit: 'kPa-A',
        },
        {
          name: 'Radioactivity',
          tag: 'L4/4KRT900KM_XO03',
          value: '***',
          unit: 'Gy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'L4/4KOO917KS_XI27',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO916KS_XI22',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO916KS_XI21',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'L4/4KOO917KS_XI21',
          value: '***',
        },
        {
          name: 'sg12',
          tag: 'L4/4KOO917KS_XI22',
          value: '***',
        },
        {
          name: 'sg13',
          tag: 'L4/4KOO917KS_XI23',
          value: '***',
        },
        {
          name: 'sg21',
          tag: 'L4/4KOO917KS_XI24',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'L4/4KOO917KS_XI25',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'L4/4KOO917KS_XI26',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'L4/4VVP900KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg32',
          tag: 'L4/4VVP901KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg33',
          tag: 'L4/4VVP902KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'L4/4KOO915KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'L4/4KOO915KS_XI22',
          value: '***',
        },
      ],
    },
    SIMULATOR: {
      sk: [
        {
          name: 'BC',
          tag: 'ML3/3REN012MG1_XQ01',
          value: '***',
          unit: 'mg/L',
        },
        {
          name: 'IRC',
          tag: 'ML3/3RPN901KM_XO10',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO911KS_XI21',
          value: '***',
        },
      ],
      wr: [
        {
          name: 'tsatmin',
          tag: 'ML3/3RIC903KM_XO01',
          value: '***',
        },
        {
          name: 'tricmax',
          tag: 'ML3/3RIC929KM_XO03',
          value: '***',
        },
        {
          name: 'tsathead',
          tag: 'ML3/3RIC930KM_XO01',
          value: '***',
        },
        {
          name: 'tcl',
          tag: 'ML3/3RCP951KM_XO12',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO912KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO912KS_XI22',
          value: '***',
        },
      ],
      ies: [
        {
          name: 'sg11',
          tag: 'ML3/3ARE061MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg12',
          tag: 'ML3/3ARE062MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg13',
          tag: 'ML3/3ARE063MNX_XQ01',
          value: '***',
          upperLimit: '3',
          lowerLimit: '-13',
        },
        {
          name: 'sg21',
          tag: 'ML3/3ARE900KM_XO19',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'ML3/3ARE901KM_XO19',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'ML3/3ARE902KM_XO19',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'ML3/3ASG900KM_XO18',
          value: '***',
        },
        {
          name: 'sg32',
          tag: 'ML3/3ASG901KM_XO18',
          value: '***',
        },
        {
          name: 'sg33',
          tag: 'ML3/3ASG902KM_XO18',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO914KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO915KS_XI22',
          value: '***',
        },
      ],
      iep: [
        {
          name: 'lvsl',
          tag: 'ML3/3RCP629KM_XQ01',
          value: '***',
        },
        {
          name: 'lpzr',
          tag: 'ML3/3RCP601KM_XQ01',
          value: '***',
        },
        {
          name: 'prcp',
          tag: 'ML3/3RCP900KM_XO18',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO913KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO913KS_XI22',
          value: '***',
        },
      ],
      inte: [
        {
          name: 'Pcont',
          tag: 'ML3/3ETY900KM_XO19',
          value: '***',
          unit: 'kPa-A',
        },
        {
          name: 'Radioactivity',
          tag: 'ML3/3KRT900KM_XO03',
          value: '***',
          unit: 'Gy/h',
        },
        {
          name: 'Cont. Activity Alarm',
          tag: 'ML3/3KOO917KS_XI27',
          value: '***',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO916KS_XI22',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO916KS_XI21',
          value: '***',
        },
      ],
      ints: [
        {
          name: 'sg11',
          tag: 'ML3/3KOO917KS_XI21',
          value: '***',
        },
        {
          name: 'sg12',
          tag: 'ML3/3KOO917KS_XI22',
          value: '***',
        },
        {
          name: 'sg13',
          tag: 'ML3/3KOO917KS_XI23',
          value: '***',
        },
        {
          name: 'sg21',
          tag: 'ML3/3KOO917KS_XI24',
          value: '***',
        },
        {
          name: 'sg22',
          tag: 'ML3/3KOO917KS_XI25',
          value: '***',
        },
        {
          name: 'sg23',
          tag: 'ML3/3KOO917KS_XI26',
          value: '***',
        },
        {
          name: 'sg31',
          tag: 'ML3/3VVP900KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg32',
          tag: 'ML3/3VVP901KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'sg33',
          tag: 'ML3/3VVP902KM_XO19',
          value: '***',
          unit: 'MPa',
        },
        {
          name: 'LD',
          tag: 'ML3/3KOO915KS_XI21',
          value: '***',
        },
        {
          name: 'D',
          tag: 'ML3/3KOO915KS_XI22',
          value: '***',
        },
      ],
    },
  },
};
