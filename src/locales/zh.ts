import type { ResumeLocale } from '../types/resume'

export const zh: ResumeLocale = {
  header: {
    name: '陈泽鑫',
    title: '高级前端开发工程师',
    targetPosition: '意向职位：前端开发（薪资面议）',
    targetCity: '意向城市：广州/深圳',
    age: '31岁',
    experience: '11.5年经验',
    status: '在职-月内到岗',
    location: '广州',
    phone: '15999562336',
    email: '15999562336@163.com',
    education: '本科',
    summary: '专注电力数字化、WebGIS 与数据大屏的高级前端，持有 PMP 认证。精通 Vue3 + TypeScript，具备 React 工程实践，主导过企业级 GIS 平台与多个省级电网前端交付。擅长地图可视化、微前端与组件库建设，熟悉 ToB/ToG 项目落地，求职意向广州/深圳，薪资面议。'
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
      description: '聚焦电力数字化、WebGIS 与数据大屏方向，参与多个省级电网与能源行业前端交付，沉淀可复用 GIS 与可视化能力。',
      responsibilities: [
        '设计并落地大型前端架构与模块拆分方案，支撑 10+ 业务系统并行迭代与稳定交付',
        '主导 WebGIS Monorepo 平台建设，打通 Mapbox/OpenLayers 双引擎与 50+ 空间分析能力，复用于多条业务线',
        '推动 Vue3 + TypeScript 工程化落地，建立编码规范与组件规范，降低跨项目协作成本',
        '以 React Hooks / Context 完成工程化实践，沉淀可上线的简历站点与 CI/CD 发布流程',
        '沉淀组件库与 SDK，输出 40+ 电力行业通用组件，减少重复开发并统一交互体验',
        '打造 1920×1080 数据大屏与地图联动监控能力，服务规划投资与运行监视等核心场景',
        '落地 qiankun 微前端与构建优化（Vite/Rspack），实现多应用独立部署与按需集成',
        '协同后端、产品、运维完成方案评审与上线交付，保障省级项目按期落地'
      ]
    },
    {
      company: '琪信通达(北京)科技有限公司',
      period: '2017.01 ~ 2019.06',
      position: 'Web前端开发',
      description: '参与企业级前端与应急指挥类系统建设，完成政企场景下的可视化与权限能力交付。',
      responsibilities: [
        '基于 Vue 完成 20+ 业务模块交付，覆盖指挥调度与日常运维核心流程',
        '实现台风路径、停电范围等地图专题可视化，支撑应急研判与业务展示',
        '封装权限体系与业务组件库，提升页面复用率与后续维护效率',
        '参与大型政企项目联调上线与持续维护，积累 ToB/ToG 交付经验'
      ]
    }
  ],
  projects: [
    {
      name: 'WebGIS 地理信息平台',
      period: '2024.01 ~ 至今',
      tags: ['Monorepo', 'Mapbox-GL', 'OpenLayers', 'Turf.js'],
      description: '企业级 GIS 中台能力建设：基于 Monorepo 沉淀核心 SDK、Vue2/Vue3 组件库与文档站点；集成 Mapbox-GL / OpenLayers 双引擎，封装 Turf.js 50+ 空间分析能力，沉淀 40+ 电力行业组件。成果：支撑 10+ 业务系统复用同一套 GIS 能力，显著降低跨项目地图开发成本。职责：架构设计与核心 SDK / 组件库建设。'
    },
    {
      name: '电鸿新型电力系统生态孪生平台',
      period: '2026.01 ~ 至今',
      tags: ['Vue3', 'TypeScript', 'MapLibre', 'ECharts'],
      description: '新型电力系统物联网数字孪生运营平台：Vue3 + TypeScript + Vite Monorepo 建设多租户 RBAC 后台与门户大屏，MapLibre 展示终端分布，ECharts 呈现增长、在线率、告警与接入统计。成果：支撑终端规模化监控与多租户协同运营，完成双 API 对接与动态权限体系落地。职责：前端架构与核心可视化模块开发。'
    },
    {
      name: '五个透明管控平台',
      period: '2025.10 ~ 至今',
      tags: ['Vue3', 'MapBox GL', 'qiankun', 'UnoCSS'],
      description: '电力设备可视化管控系统：基于 Vue3 + MapBox GL 实现二三维切换、钻取导航与设备五态监控，ECharts 三屏联动展示资产/运维/作业/环境。成果：通过 qiankun 完成多环境独立部署与集成，提升多专题并行交付效率。职责：地图可视化与微前端子应用核心开发。'
    },
    {
      name: '电力全景驾驶舱可视化平台',
      period: '2025.01 ~ 2025.12',
      tags: ['Vue3', 'Mapbox', 'ECharts', 'AntV'],
      description: '省级电网规划投资建设全景驾驶舱：覆盖新型电力系统指标、主配网规划、投资建设全过程、新能源接入与多级预警；Vue3 + Pinia + v-scale-screen 适配 1920×1080，Mapbox 支撑网架全景与多时态编辑。成果：形成一屏总览 + 专题下钻的决策视图，服务省级规划与建设管理场景。职责：大屏架构与核心专题页开发。'
    },
    {
      name: '个人简历网站',
      period: '2025.08 ~ 至今',
      tags: ['React 19', 'TypeScript', 'Vite', 'GitHub Pages'],
      description: 'React 工程化实践项目（非 Demo）：基于 React 19 + TypeScript + Vite 搭建可维护的在线简历系统，Context 实现中英文切换，CSS Modules 模块化样式，locales 数据驱动内容；拆分 Header / Experience / Projects 等业务组件，配套打印/PDF 导出与响应式布局，GitHub Actions 自动构建部署。成果：形成可公开访问的作品页，验证 React 工程落地能力。在线：https://water43.github.io/water43-resume/  仓库：https://github.com/water43/water43-resume'
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
