export const zh = {
  header: {
    name: '陈泽鑫',
    title: '高级前端开发工程师',
    targetPosition: '意向职位：前端开发（2万-3万·12薪）',
    targetCity: '意向城市：深圳',
    age: '31岁',
    experience: '11.5年经验',
    status: '在职-月内到岗',
    location: '广州',
    phone: '15999562336',
    email: '776025632(at)qq.com',
    education: '本科',
    summary: '专注于电力数字化、GIS可视化与数据大屏领域的高级前端开发工程师。精通 Vue3 + TypeScript 技术体系，具备大型企业级系统架构设计能力，参与过多个省级电网项目的前端建设。擅长 WebGIS 地图可视化、微前端架构与组件库建设，具有丰富的 ToB/ToG 项目交付经验。'
  },
  sections: {
    experience: '工作经历',
    projects: '项目经历',
    education: '教育经历',
    certificates: '专业证书',
    skills: '专业技能'
  },
  experience: [
    {
      company: '北京国科恒通科技股份有限公司广州分公司',
      period: '2019.05 ~ 至今',
      position: '高级前端开发',
      description: '负责电力数字化、GIS可视化、数字孪生及数据大屏相关系统开发，参与多个省级电网与能源行业项目建设。',
      responsibilities: [
        '负责大型前端系统架构设计与模块拆分，支撑 10+ 业务系统并行开发',
        '主导 WebGIS 平台建设，集成 Mapbox/OpenLayers 双引擎，封装 50+ 空间分析能力',
        '推进 Vue3 + TypeScript 技术体系落地，制定团队开发规范与最佳实践',
        '负责组件库、SDK 与公共能力沉淀，输出 40+ 电力行业通用组件',
        '负责数据大屏、实时监控与地图联动开发，支持 1920×1080 大屏适配',
        '推进工程化优化与 qiankun 微前端架构，实现多项目独立部署与集成',
        '与后端、产品、运维协同完成项目交付，参与技术方案评审与需求分析'
      ]
    },
    {
      company: '琪信通达(北京)科技有限公司',
      period: '2017.01 ~ 2019.06',
      position: 'Web前端开发',
      description: '负责企业级前端系统与应急指挥平台开发，参与南方电网相关业务系统建设。',
      responsibilities: [
        '负责 Vue 前端页面与业务模块开发，完成 20+ 功能模块交付',
        '负责地图展示与数据可视化开发，实现台风路径、停电范围等专题展示',
        '负责权限系统与组件封装，构建可复用的业务组件库',
        '参与大型政企项目交付与维护，积累 ToB/ToG 项目经验'
      ]
    }
  ],
  projects: [
    {
      name: '电鸿新型电力系统生态孪生平台',
      period: '2026.01 ~ 至今',
      tags: ['Vue3', 'TypeScript', 'MapLibre', 'ECharts'],
      description: '面向新型电力系统物联网生态的数字孪生运营平台。采用 Vue3 + TypeScript + Vite Monorepo 与 Element Plus，建设多租户 RBAC 后台及平台门户大屏：MapLibre 地图展示终端分布与运行指标，ECharts 呈现租户增长、在线率、告警、网关/直连/子终端接入及 TOP 租户统计。系统侧覆盖租户、站点、用户、角色、菜单与动态权限。双 API 对接物联网与业务服务，支撑终端规模化监控与生态协同运营。'
    },
    {
      name: '五个透明管控平台',
      period: '2025.10 ~ 至今',
      tags: ['Vue3', 'MapBox GL', 'qiankun', 'UnoCSS'],
      description: '基于 Vue3 + TypeScript + MapBox GL 构建的电力设备可视化管控系统。集成二三维地图切换、地图钻取导航、设备树管理等功能，实现设备五态（运行、检修、故障等）实时监控与透明化展示。采用 ECharts 进行数据可视化大屏展示，支持三屏联动展示资产、运维、作业、环境等业务模块。使用 Vite 构建工具链、Pinia 状态管理、UnoCSS 原子化样式，通过 qiankun 微前端架构支持多环境部署。'
    },
    {
      name: '电力全景驾驶舱可视化平台',
      period: '2025.01 ~ 2025.12',
      tags: ['Vue3', 'Mapbox', 'ECharts', 'AntV'],
      description: '面向省级电网规划、投资与建设管理的全景驾驶舱。覆盖新型电力系统指标、电网规划（主配网）、投资情况、项目建设全过程与成效、新能源接入、数据治理及一/二/三级预警等专题。采用 Vue3 + Vite + Pinia，基于 v-scale-screen 适配 1920×1080 大屏；ECharts（含水球图等）与 AntV 呈现指标、进度与治理完成度；Mapbox 支撑贵州网架全屏、多时态项目全景与地图编辑。'
    },
    {
      name: '电力配网状态估计可视化系统',
      period: '2024.01 ~ 2024.12',
      tags: ['Vue3', 'TypeScript', '高德地图', 'qiankun'],
      description: '面向电力配电网的状态估计与运行监测前端系统。采用 Vue3、TypeScript、Vite 技术栈，集成高德地图，实现馈线、变电站等设备的空间展示及运行、异常、电压、光伏、可观测性等专题监测。提供状态估计总览、明细分析（计算结果、潮流越限、估计偏差、量测完整性、拓扑/参数异常等）和 SVG 单线图断面展示。支持 Qiankun 微前端嵌入与多形态独立构建部署。'
    },
    {
      name: 'WebGIS 地理信息平台',
      period: '2024.01 ~ 至今',
      tags: ['Monorepo', 'Mapbox-GL', 'OpenLayers', 'Turf.js'],
      description: '基于 Monorepo 架构的企业级 GIS 解决方案，包含核心 SDK、Vue2/Vue3 组件库、文档站点及开发示例。底层采用 TypeScript + Webpack 构建，集成 Mapbox-GL 与 OpenLayers 双地图引擎，封装 Turf.js 实现 50+ 空间分析能力（缓冲区、叠加分析、拓扑判断等）。业务层提供 40+ 电力行业组件（设备卡片、停电分析、台风路径、气象专题等），支持 Vue2/Vue3 双版本并行。'
    },
    {
      name: '华能山西虚拟电厂',
      period: '2022.01 ~ 2024.02',
      tags: ['Vue2', 'Element UI', 'Vuex', 'ECharts'],
      description: '面向电力聚合商与虚拟电厂运营的 B 端综合管理平台，采用 Vue2 + Element UI + Vuex 技术栈。覆盖分布式资源（光伏、储能、充电桩、可调负荷）接入与聚合、需求响应交易申报、功率预测与基线管理、实时运行监视等核心业务模块。'
    },
    {
      name: '南瑞国网PMS3.0的一张图项目',
      period: '2021.01 ~ 2021.08',
      tags: ['Vue', 'GIS', '微应用'],
      description: 'PMS是以设备管理和资产管理为基础，以提高输变电设施安全运行水平和供电可靠性为目标的电力设备资产管理系统。PMS3.0以电网资源业务中台为核心，向下广泛接入智能设备，汇聚物联感知数据，向上根据电网组织架构按需灵活定制微应用群，支撑现场作业、业务管控、分析决策、生态共享等业务开展。'
    },
    {
      name: '电网综合服务平台',
      period: '2020.07 ~ 2021.07',
      tags: ['Vue3', 'Vite', '组件库'],
      description: '面向南方电网业务场景的电网综合服务平台前端建设，以海南数字电网平台能力为底座，建设组件示例中心，沉淀沿布图、拓扑图、实时数据展示等典型场景的可复用模块。基于 Vue3 + Vite 按场景拆分封装地图、图表与业务卡片组件，配套示例页与接入文档。'
    },
    {
      name: '海研院博鳌保供电系统',
      period: '2020.04 ~ 2022.01',
      tags: ['Vue', '保供电', '智能化'],
      description: '针对海南自贸港建设重大活动保供电需求开发的智能化系统。全面推进保供电工作常态化、智能化、智慧化，覆盖博鳌亚洲论坛、文昌航天发射基地等重大活动的电力保障。'
    },
    {
      name: '海南数字电网',
      period: '2019.07 ~ 2021.07',
      tags: ['Vue3', 'Mapbox', 'ECharts', 'AntV'],
      description: '南方电网海南数字电网示范试点前端建设，承接智能电网与电网智能化、企业数字化目标，支撑生产营销数据质量提升、电网精益管理、规划辅助决策及全景电网模拟仿真。基于 Vue3 + Vite + Pinia 构建 1920 自适应大屏，ECharts/AntV 呈现新型电力系统指标、投资与建设全过程；Mapbox + Turf 实现电网沿布图、拓扑图与网架地理展示。'
    },
    {
      name: '应急指挥平台',
      period: '2016.01 ~ 2018.01',
      tags: ['Vue', '地图', '实时监控'],
      description: '南方电网应急指挥平台是为应对突发事件和灾害而建立的指挥中心。提供统一指挥调度、突发事件管理、应急资源调配、信息共享与通信、数据分析与预测等核心功能，确保电网的安全稳定运行，保障用户用电需求。'
    }
  ],
  education: [
    {
      school: '华南师范大学',
      degree: '本科',
      major: '计算机科学与技术'
    }
  ],
  certificates: [
    {
      name: 'PMP 项目管理专业人士认证',
      issuer: 'PMI'
    },
    {
      name: '人工智能训练师（三级）',
      issuer: '国家市场监督管理总局'
    }
  ],
  skills: [
    { name: 'Vue.js', level: 95, category: 'framework' },
    { name: 'TypeScript', level: 90, category: 'language' },
    { name: 'JavaScript', level: 95, category: 'language' },
    { name: 'React', level: 75, category: 'framework' },
    { name: 'WebGIS', level: 92, category: 'domain' },
    { name: 'ECharts', level: 90, category: 'visualization' },
    { name: 'Mapbox GL', level: 88, category: 'gis' },
    { name: 'Webpack/Vite', level: 85, category: 'tool' },
    { name: 'Node.js', level: 75, category: 'backend' }
  ],
  skillCategories: {
    frontend: {
      title: '前端框架',
      items: ['Vue 2/3', 'React', 'Angular', 'TypeScript', 'JavaScript ES6+']
    },
    gis: {
      title: 'GIS & 可视化',
      items: ['Mapbox GL', 'OpenLayers', '高德地图', 'Turf.js', 'ECharts', 'AntV', 'Three.js']
    },
    engineering: {
      title: '工程化',
      items: ['Vite', 'Webpack', 'Rspack', 'qiankun', 'Monorepo', 'Pnpm']
    },
    ui: {
      title: 'UI & 组件库',
      items: ['Element Plus', 'Ant Design Vue', 'UnoCSS', 'Tailwind CSS', 'SCSS']
    },
    tools: {
      title: '工具 & 部署',
      items: ['Git', 'Docker', 'Nginx', 'Jenkins', 'GitLab CI']
    }
  }
}
