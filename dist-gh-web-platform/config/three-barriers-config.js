// 三道屏障
const __ThreeBarriersConfig__ = {
  unit_1: {
    item1: {
      status: 0,
      name: '燃料包壳',
      fullName: '燃料包壳',
      attrs: [
        {
          name: '压力容器水位过低（FF1P-1)-潜在丧失',
          status: 0,
          content: '压力容器水位低于TOC',
          sort: 1,
        },
        {
          name: '堆芯出口冷却剂过热（FF2P-1)-潜在丧失',
          status: 0,
          content: 'ΔTsat小于-ε',
          sort: 2,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FF2P-2)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 3,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '堆芯热电偶出口温度高(FF2L-1)-丧失',
          status: 0,
          content: '堆芯温度＞650℃',
          sort: 4,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '安全壳放射性高（FF3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞5Gy/h',
          sort: 5,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 6,
          //ealText: '1_1&ZR2P_1:1_2&ZF5P_1:2_1&ZF3L_1:2_2&ZF5L_1', // 1-潜在 2-丧失 // 固定格式
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '任何指示燃料包壳屏障潜在丧失的工况',
              value: '1_2',
            },
            {
              label: '冷却剂I-131当量浓度＞1.11E7MBq/t',
              value: '2_1', // <丧失>_<index>
            },
            {
              label: '任何指示燃料包壳屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item2: {
      status: 0,
      name: '一回路',
      fullName: '一回路压力边界',
      attrs: [
        {
          name: '压力容器面临热冲击或冷超压风险（FR1P-2)-潜在丧失',
          status: 0,
          content: 'RRA连接，一回路压力＞45bar.g;<br>RRA未连接，ΔTsat＞140℃',
          sort: 0,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FR2P-1)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 1,
        },
        {
          name: '安全壳放射性高（FR3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞0.02Gy/h',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&ZR2P_1:1_2&ZR1P_1:1_3&ZR5P_1:2_1&ZR1L_1:2_2&ZR5L_1', 1-潜在 2-丧失
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '一回路泄漏或蒸发器传热管泄漏导致超过单台上充泵补偿能力',
              value: '1_2',
            },
            {
              label: '任何指示一回路压力边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '一回路破口或蒸汽传热管破裂导致安注手动或自动启动',
              value: '2_1',
            },
            {
              label: '任何指示一回路压力边界屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item3: {
      status: 0,
      name: '安全壳',
      fullName: '安全壳完整性',
      attrs: [
        {
          name: '堆芯热电偶温度高（FC2P-1)-潜在丧失',
          status: 0,
          content: '堆芯温度＞650℃超过15min',
          sort: 0,
        },
        {
          name: '安全壳放射性高（FR3P-1)-潜在丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞20Gy/h',
          sort: 1,
        },
        {
          name: '安全壳压力高(FC4P-1)-潜在丧失',
          status: 0,
          content: '安全壳压力＞5.2bar.a',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&FFP2_C2:1_2&FFP5_C1:2_1&FFL5_C1', // 1-潜在 2-丧失
          children: [
            {
              label: '安全壳氢气浓度＞4%',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '安全壳压力＞2.4bar.a且安喷未能在15min内投运%',
              value: '1_2',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '蒸发器传热管泄漏或破裂，且无法隔离',
              value: '2_1',
            },
            {
              label: '已隔离的安全壳经判断存在完整性丧失或向环境排放路径',
              value: '2_2',
            },
            {
              label: '存在一回路冷却剂安全壳外的泄漏',
              value: '2_3',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '2_4',
            },
          ],
        },
      ],
    },
  },
  unit_2: {
    item1: {
      status: 0,
      name: '燃料包壳',
      fullName: '燃料包壳',
      attrs: [
        {
          name: '压力容器水位过低（FF1P-1)-潜在丧失',
          status: 0,
          content: '压力容器水位低于TOC',
          sort: 1,
        },
        {
          name: '堆芯出口冷却剂过热（FF2P-1)-潜在丧失',
          status: 0,
          content: 'ΔTsat小于-ε',
          sort: 2,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FF2P-2)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 3,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '堆芯热电偶出口温度高(FF2L-1)-丧失',
          status: 0,
          content: '堆芯温度＞650℃',
          sort: 4,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '安全壳放射性高（FF3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞5Gy/h',
          sort: 5,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 6,
          //ealText: '1_1&ZR2P_1:1_2&ZF5P_1:2_1&ZF3L_1:2_2&ZF5L_1', // 1-潜在 2-丧失 // 固定格式
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '任何指示燃料包壳屏障潜在丧失的工况',
              value: '1_2',
            },
            {
              label: '冷却剂I-131当量浓度＞1.11E7MBq/t',
              value: '2_1', // <丧失>_<index>
            },
            {
              label: '任何指示燃料包壳屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item2: {
      status: 0,
      name: '一回路',
      fullName: '一回路压力边界',
      attrs: [
        {
          name: '压力容器面临热冲击或冷超压风险（FR1P-2)-潜在丧失',
          status: 0,
          content: 'RRA连接，一回路压力＞45bar.g;<br>RRA未连接，ΔTsat＞140℃',
          sort: 0,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FR2P-1)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 1,
        },
        {
          name: '安全壳放射性高（FR3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞0.02Gy/h',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&ZR2P_1:1_2&ZR1P_1:1_3&ZR5P_1:2_1&ZR1L_1:2_2&ZR5L_1', 1-潜在 2-丧失
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '一回路泄漏或蒸发器传热管泄漏导致超过单台上充泵补偿能力',
              value: '1_2',
            },
            {
              label: '任何指示一回路压力边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '一回路破口或蒸汽传热管破裂导致安注手动或自动启动',
              value: '2_1',
            },
            {
              label: '任何指示一回路压力边界屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item3: {
      status: 0,
      name: '安全壳',
      fullName: '安全壳完整性',
      attrs: [
        {
          name: '堆芯热电偶温度高（FC2P-1)-潜在丧失',
          status: 0,
          content: '堆芯温度＞650℃超过15min',
          sort: 0,
        },
        {
          name: '安全壳放射性高（FR3P-1)-潜在丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞20Gy/h',
          sort: 1,
        },
        {
          name: '安全壳压力高(FC4P-1)-潜在丧失',
          status: 0,
          content: '安全壳压力＞5.2bar.a',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&FFP2_C2:1_2&FFP5_C1:2_1&FFL5_C1', // 1-潜在 2-丧失
          children: [
            {
              label: '安全壳氢气浓度＞4%',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '安全壳压力＞2.4bar.a且安喷未能在15min内投运%',
              value: '1_2',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '蒸发器传热管泄漏或破裂，且无法隔离',
              value: '2_1',
            },
            {
              label: '已隔离的安全壳经判断存在完整性丧失或向环境排放路径',
              value: '2_2',
            },
            {
              label: '存在一回路冷却剂安全壳外的泄漏',
              value: '2_3',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '2_4',
            },
          ],
        },
      ],
    },
  },
  unit_3: {
    item1: {
      status: 0,
      name: '燃料包壳',
      fullName: '燃料包壳',
      attrs: [
        {
          name: '压力容器水位过低（FF1P-1)-潜在丧失',
          status: 0,
          content: '压力容器水位低于TOC',
          sort: 1,
        },
        {
          name: '堆芯出口冷却剂过热（FF2P-1)-潜在丧失',
          status: 0,
          content: 'ΔTsat小于-ε',
          sort: 2,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FF2P-2)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 3,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '堆芯热电偶出口温度高(FF2L-1)-丧失',
          status: 0,
          content: '堆芯温度＞650℃',
          sort: 4,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '安全壳放射性高（FF3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞5Gy/h',
          sort: 5,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 6,
          // value 1-潜在 2-丧失 _index
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '任何指示燃料包壳屏障潜在丧失的工况',
              value: '1_2',
            },
            {
              label: '冷却剂I-131当量浓度＞1.11E7MBq/t',
              value: '2_1', // <丧失>_<index>
            },
            {
              label: '任何指示燃料包壳屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item2: {
      status: 0,
      name: '一回路',
      fullName: '一回路压力边界',
      attrs: [
        {
          name: '压力容器面临热冲击或冷超压风险（FR1P-2)-潜在丧失',
          status: 0,
          content: 'RRA连接，一回路压力＞45bar.g;<br>RRA未连接，ΔTsat＞140℃',
          sort: 0,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FR2P-1)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 1,
        },
        {
          name: '安全壳放射性高（FR3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞0.02Gy/h',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&ZR2P_1:1_2&ZR1P_1:1_3&ZR5P_1:2_1&ZR1L_1:2_2&ZR5L_1', 1-潜在 2-丧失
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '一回路泄漏或蒸发器传热管泄漏导致超过单台上充泵补偿能力',
              value: '1_2',
            },
            {
              label: '任何指示一回路压力边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '一回路破口或蒸汽传热管破裂导致安注手动或自动启动',
              value: '2_1',
            },
            {
              label: '任何指示一回路压力边界屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item3: {
      status: 0,
      name: '安全壳',
      fullName: '安全壳完整性',
      attrs: [
        {
          name: '堆芯热电偶温度高（FC2P-1)-潜在丧失',
          status: 0,
          content: '堆芯温度＞650℃超过15min',
          sort: 0,
        },
        {
          name: '安全壳放射性高（FR3P-1)-潜在丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞20Gy/h',
          sort: 1,
        },
        {
          name: '安全壳压力高(FC4P-1)-潜在丧失',
          status: 0,
          content: '安全壳压力＞5.2bar.a',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&FFP2_C2:1_2&FFP5_C1:2_1&FFL5_C1', // 1-潜在 2-丧失
          children: [
            {
              label: '安全壳氢气浓度＞4%',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '安全壳压力＞2.4bar.a且安喷未能在15min内投运%',
              value: '1_2',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '蒸发器传热管泄漏或破裂，且无法隔离',
              value: '2_1',
            },
            {
              label: '已隔离的安全壳经判断存在完整性丧失或向环境排放路径',
              value: '2_2',
            },
            {
              label: '存在一回路冷却剂安全壳外的泄漏',
              value: '2_3',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '2_4',
            },
          ],
        },
      ],
    },
  },
  unit_4: {
    item1: {
      status: 0,
      name: '燃料包壳',
      fullName: '燃料包壳',
      attrs: [
        {
          name: '压力容器水位过低（FF1P-1)-潜在丧失',
          status: 0,
          content: '压力容器水位低于TOC',
          sort: 1,
        },
        {
          name: '堆芯出口冷却剂过热（FF2P-1)-潜在丧失',
          status: 0,
          content: 'ΔTsat小于-ε',
          sort: 2,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FF2P-2)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 3,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '堆芯热电偶出口温度高(FF2L-1)-丧失',
          status: 0,
          content: '堆芯温度＞650℃',
          sort: 4,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '安全壳放射性高（FF3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞5Gy/h',
          sort: 5,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 6,
          // value 1-潜在 2-丧失 _index
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '任何指示燃料包壳屏障潜在丧失的工况',
              value: '1_2',
            },
            {
              label: '冷却剂I-131当量浓度＞1.11E7MBq/t',
              value: '2_1', // <丧失>_<index>
            },
            {
              label: '任何指示燃料包壳屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item2: {
      status: 0,
      name: '一回路',
      fullName: '一回路压力边界',
      attrs: [
        {
          name: '压力容器面临热冲击或冷超压风险（FR1P-2)-潜在丧失',
          status: 0,
          content: 'RRA连接，一回路压力＞45bar.g;<br>RRA未连接，ΔTsat＞140℃',
          sort: 0,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FR2P-1)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 1,
        },
        {
          name: '安全壳放射性高（FR3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞0.02Gy/h',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&ZR2P_1:1_2&ZR1P_1:1_3&ZR5P_1:2_1&ZR1L_1:2_2&ZR5L_1', 1-潜在 2-丧失
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '一回路泄漏或蒸发器传热管泄漏导致超过单台上充泵补偿能力',
              value: '1_2',
            },
            {
              label: '任何指示一回路压力边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '一回路破口或蒸汽传热管破裂导致安注手动或自动启动',
              value: '2_1',
            },
            {
              label: '任何指示一回路压力边界屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item3: {
      status: 0,
      name: '安全壳',
      fullName: '安全壳完整性',
      attrs: [
        {
          name: '堆芯热电偶温度高（FC2P-1)-潜在丧失',
          status: 0,
          content: '堆芯温度＞650℃超过15min',
          sort: 0,
        },
        {
          name: '安全壳放射性高（FR3P-1)-潜在丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞20Gy/h',
          sort: 1,
        },
        {
          name: '安全壳压力高(FC4P-1)-潜在丧失',
          status: 0,
          content: '安全壳压力＞5.2bar.a',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&FFP2_C2:1_2&FFP5_C1:2_1&FFL5_C1', // 1-潜在 2-丧失
          children: [
            {
              label: '安全壳氢气浓度＞4%',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '安全壳压力＞2.4bar.a且安喷未能在15min内投运%',
              value: '1_2',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '蒸发器传热管泄漏或破裂，且无法隔离',
              value: '2_1',
            },
            {
              label: '已隔离的安全壳经判断存在完整性丧失或向环境排放路径',
              value: '2_2',
            },
            {
              label: '存在一回路冷却剂安全壳外的泄漏',
              value: '2_3',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '2_4',
            },
          ],
        },
      ],
    },
  },
  unit_5: {
    item1: {
      status: 0,
      name: '燃料包壳',
      fullName: '燃料包壳',
      attrs: [
        {
          name: '压力容器水位过低（FF1P-1)-潜在丧失',
          status: 0,
          content: '压力容器水位低于TOC',
          sort: 1,
        },
        {
          name: '堆芯出口冷却剂过热（FF2P-1)-潜在丧失',
          status: 0,
          content: 'ΔTsat小于-ε',
          sort: 2,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FF2P-2)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 3,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '堆芯热电偶出口温度高(FF2L-1)-丧失',
          status: 0,
          content: '堆芯温度＞650℃',
          sort: 4,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '安全壳放射性高（FF3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞5Gy/h',
          sort: 5,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 6,
          //ealText: '1_1&ZR2P_1:1_2&ZF5P_1:2_1&ZF3L_1:2_2&ZF5L_1', // 1-潜在 2-丧失 // 固定格式
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '任何指示燃料包壳屏障潜在丧失的工况',
              value: '1_2',
            },
            {
              label: '冷却剂I-131当量浓度＞1.11E7MBq/t',
              value: '2_1', // <丧失>_<index>
            },
            {
              label: '任何指示燃料包壳屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item2: {
      status: 0,
      name: '一回路',
      fullName: '一回路压力边界',
      attrs: [
        {
          name: '压力容器面临热冲击或冷超压风险（FR1P-2)-潜在丧失',
          status: 0,
          content: 'RRA连接，一回路压力＞45bar.g;<br>RRA未连接，ΔTsat＞140℃',
          sort: 0,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FR2P-1)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 1,
        },
        {
          name: '安全壳放射性高（FR3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞0.02Gy/h',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&ZR2P_1:1_2&ZR1P_1:1_3&ZR5P_1:2_1&ZR1L_1:2_2&ZR5L_1', 1-潜在 2-丧失
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '一回路泄漏或蒸发器传热管泄漏导致超过单台上充泵补偿能力',
              value: '1_2',
            },
            {
              label: '任何指示一回路压力边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '一回路破口或蒸汽传热管破裂导致安注手动或自动启动',
              value: '2_1',
            },
            {
              label: '任何指示一回路压力边界屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item3: {
      status: 0,
      name: '安全壳',
      fullName: '安全壳完整性',
      attrs: [
        {
          name: '堆芯热电偶温度高（FC2P-1)-潜在丧失',
          status: 0,
          content: '堆芯温度＞650℃超过15min',
          sort: 0,
        },
        {
          name: '安全壳放射性高（FR3P-1)-潜在丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞20Gy/h',
          sort: 1,
        },
        {
          name: '安全壳压力高(FC4P-1)-潜在丧失',
          status: 0,
          content: '安全壳压力＞5.2bar.a',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&FFP2_C2:1_2&FFP5_C1:2_1&FFL5_C1', // 1-潜在 2-丧失
          children: [
            {
              label: '安全壳氢气浓度＞4%',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '安全壳压力＞2.4bar.a且安喷未能在15min内投运%',
              value: '1_2',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '蒸发器传热管泄漏或破裂，且无法隔离',
              value: '2_1',
            },
            {
              label: '已隔离的安全壳经判断存在完整性丧失或向环境排放路径',
              value: '2_2',
            },
            {
              label: '存在一回路冷却剂安全壳外的泄漏',
              value: '2_3',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '2_4',
            },
          ],
        },
      ],
    },
  },
  unit_6: {
    item1: {
      status: 0,
      name: '燃料包壳',
      fullName: '燃料包壳',
      attrs: [
        {
          name: '压力容器水位过低（FF1P-1)-潜在丧失',
          status: 0,
          content: '压力容器水位低于TOC',
          sort: 1,
        },
        {
          name: '堆芯出口冷却剂过热（FF2P-1)-潜在丧失',
          status: 0,
          content: 'ΔTsat小于-ε',
          sort: 2,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FF2P-2)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 3,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '堆芯热电偶出口温度高(FF2L-1)-丧失',
          status: 0,
          content: '堆芯温度＞650℃',
          sort: 4,
          // manualInput: true,
          // unit: 'MBq/t',
        },
        {
          name: '安全壳放射性高（FF3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞5Gy/h',
          sort: 5,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 6,
          //ealText: '1_1&ZR2P_1:1_2&ZF5P_1:2_1&ZF3L_1:2_2&ZF5L_1', // 1-潜在 2-丧失 // 固定格式
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '任何指示燃料包壳屏障潜在丧失的工况',
              value: '1_2',
            },
            {
              label: '冷却剂I-131当量浓度＞1.11E7MBq/t',
              value: '2_1', // <丧失>_<index>
            },
            {
              label: '任何指示燃料包壳屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item2: {
      status: 0,
      name: '一回路',
      fullName: '一回路压力边界',
      attrs: [
        {
          name: '压力容器面临热冲击或冷超压风险（FR1P-2)-潜在丧失',
          status: 0,
          content: 'RRA连接，一回路压力＞45bar.g;<br>RRA未连接，ΔTsat＞140℃',
          sort: 0,
        },
        {
          name: '堆芯热量无法由蒸发器带出（FR2P-1)-潜在丧失',
          status: 0,
          content: 'RRA未连接，堆芯出口温度高 ',
          sort: 1,
        },
        {
          name: '安全壳放射性高（FR3L-1)-丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞0.02Gy/h',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&ZR2P_1:1_2&ZR1P_1:1_3&ZR5P_1:2_1&ZR1L_1:2_2&ZR5L_1', 1-潜在 2-丧失
          children: [
            {
              label: 'RRA连接下，RRA和SG均不可用，Δtsat＜ε且堆芯出口温度高于98℃',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '一回路泄漏或蒸发器传热管泄漏导致超过单台上充泵补偿能力',
              value: '1_2',
            },
            {
              label: '任何指示一回路压力边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '一回路破口或蒸汽传热管破裂导致安注手动或自动启动',
              value: '2_1',
            },
            {
              label: '任何指示一回路压力边界屏障丧失的工况',
              value: '2_2',
            },
          ],
        },
      ],
    },
    item3: {
      status: 0,
      name: '安全壳',
      fullName: '安全壳完整性',
      attrs: [
        {
          name: '堆芯热电偶温度高（FC2P-1)-潜在丧失',
          status: 0,
          content: '堆芯温度＞650℃超过15min',
          sort: 0,
        },
        {
          name: '安全壳放射性高（FR3P-1)-潜在丧失',
          status: 0,
          content: '安全壳剂量率KRT022/023MA＞20Gy/h',
          sort: 1,
        },
        {
          name: '安全壳压力高(FC4P-1)-潜在丧失',
          status: 0,
          content: '安全壳压力＞5.2bar.a',
          sort: 2,
        },
        {
          name: '指挥部判断',
          status: 0,
          content: '',
          sort: 3,
          // ealText: '1_1&FFP2_C2:1_2&FFP5_C1:2_1&FFL5_C1', // 1-潜在 2-丧失
          children: [
            {
              label: '安全壳氢气浓度＞4%',
              value: '1_1', // <潜在>_<index>
            },
            {
              label: '安全壳压力＞2.4bar.a且安喷未能在15min内投运%',
              value: '1_2',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '1_3',
            },
            {
              label: '蒸发器传热管泄漏或破裂，且无法隔离',
              value: '2_1',
            },
            {
              label: '已隔离的安全壳经判断存在完整性丧失或向环境排放路径',
              value: '2_2',
            },
            {
              label: '存在一回路冷却剂安全壳外的泄漏',
              value: '2_3',
            },
            {
              label: '任何指示一安全壳边界屏障潜在丧失的工况',
              value: '2_4',
            },
          ],
        },
      ],
    },
  },
};

const __ThreeBarriersConfigNameType__ = {
  '冷却剂I-131当量浓度':
    '反应堆冷却剂I-131当量浓度-第一道安全屏障燃料包壳丧失-unit-threeBarrier-manualInput',
  安全壳氢气浓度: '安全壳氢气浓度-第三道安全屏障潜在丧失-unit-threeBarrier-manualInput',
};
