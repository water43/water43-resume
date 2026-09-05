import type { ResumeLocale } from '../types/resume'

export const zh: ResumeLocale = {
  header: {
    name: '陈泽鑫',
    title: '高级前端开发工程师',
    targetPosition: '意向职位：前端开发（2万-3万·12薪）',
    targetCity: '意向城市：广州/深圳',
    age: '31岁',
    experience: '11.5年经验',
    status: '在职-月内到岗',
    location: '广州',
    phone: '15999562336',
    email: '15999562336@163.com',
    education: '本科',
    summary: '专注于电力数字化、GIS可视化与数据大屏领域的高级前端开发工程师，持有 PMP 项目管理专业认证。精通 Vue3 + TypeScript 技术体系，同时具备 React（Hooks / Context）实践能力，具备大型企业级系统架构设计能力，参与过多个省级电网项目的前端建设。擅长 WebGIS 地图可视化、微前端架构与组件库建设，具有丰富的 ToB/ToG 项目交付经验。'
  },
  sections: {
    experience: '工作经历',
    projects: '项目经历',
    education: '教育经历',
    certificates: '专业证书',
    skills: '专业技能'
  },
  ui: {
    print: '打印 / 导出 PDF',
    expandProjects: '展开更多项目',
    collapseProjects: '收起',
    footer: '© 2024 陈泽鑫 | Built with React + TypeScript + Vite'
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
        '持续深化 React 技术栈实践，掌握 Hooks、Context、组件拆分与状态提升等核心范式',
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
      name: 'WebGIS 地理信息平台',
      period: '2024.01 ~ 至今',
      tags: ['Monorepo', 'Mapbox-GL', 'OpenLayers', 'Turf.js'],
      description: '基于 Monorepo 架构的企业级 GIS 解决方案，包含核心 SDK、Vue2/Vue3 组件库、文档站点及开发示例。底层采用 TypeScript + Webpack 构建，集成 Mapbox-GL 与 OpenLayers 双地图引擎，封装 Turf.js 实现 50+ 空间分析能力（缓冲区、叠加分析、拓扑判断等）。业务层提供 40+ 电力行业组件（设备卡片、停电分析、台风路径、气象专题等），支持 Vue2/Vue3 双版本并行。'
    },
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
      description: '面向省级电网规划、投资与建设管理的全景驾驶舱。覆盖新型电力系统指标、电网规划（主配网）、投资情况、项目建设全过程与成效、新能源接入、数据治理及一/二/三级预警等专题。采用 Vue3 + Vite + Pinia，基于 v-scale-screen 适配 1920×1080 大屏；ECharts（含水球图等）与 AntV 呈现指标、进度与治理完成度；Mapbox 支撑网架全屏、多时态项目全景与地图编辑。'
    },
    {
      name: '个人简历网站',
      period: '2025.08 ~ 至今',
      tags: ['React 19', 'TypeScript', 'Vite', 'GitHub Pages'],
      description: '基于 React 19 + TypeScript + Vite 构建的在线简历站点，采用 Context 实现中英文切换，CSS Modules 模块化样式，按模块拆分 ResumeHeader、Experience、Projects、Education、Certificates、Skills 等组件；简历内容数据驱动（locales 配置），支持响应式布局与打印/PDF 导出，通过 GitHub Actions 自动部署至 GitHub Pages。在线地址：https://water43.github.io/water43-resume/  开源地址：https://github.com/water43/water43-resume'
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
    { name: 'React', level: 85, category: 'framework' },
    { name: 'WebGIS', level: 92, category: 'domain' },
    { name: 'ECharts', level: 90, category: 'visualization' },
    { name: 'Mapbox GL', level: 88, category: 'gis' },
    { name: 'Webpack/Vite', level: 85, category: 'tool' },
    { name: 'Node.js', level: 75, category: 'backend' }
  ],
  skillCategories: {
    frontend: {
      title: '前端框架',
      items: ['Vue 2/3', 'React 19', 'React Hooks', 'Context', 'TypeScript', 'JavaScript ES6+']
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
