import type { ResumeLocale } from '../types/resume'

export const en: ResumeLocale = {
  header: {
    name: 'Chen Zexin',
    title: 'Senior Frontend Developer',
    targetPosition: 'Target: Frontend Developer (20K-30K RMB)',
    targetCity: 'Target City: Guangzhou/Shenzhen',
    age: '31 years old',
    experience: '11.5 years exp',
    status: 'Available in 1 month',
    location: 'Guangzhou',
    phone: '15999562336',
    email: '15999562336@163.com',
    education: 'Bachelor\'s Degree',
    summary: 'Senior Frontend Developer specializing in power digitalization, GIS visualization, and data dashboards, PMP certified. Expert in Vue3 + TypeScript ecosystem with hands-on React (Hooks / Context) practice, and enterprise architecture design capabilities. Participated in frontend development for multiple provincial power grid projects. Skilled in WebGIS map visualization, micro-frontend architecture, and component library development with extensive ToB/ToG project delivery experience.'
  },
  sections: {
    experience: 'Work Experience',
    projects: 'Project Experience',
    education: 'Education',
    certificates: 'Certificates',
    skills: 'Professional Skills'
  },
  ui: {
    print: 'Print / Export PDF',
    expandProjects: 'Show more projects',
    collapseProjects: 'Collapse',
    footer: '© 2024 Chen Zexin | Built with React + TypeScript + Vite'
  },
  experience: [
    {
      company: 'Beijing Guoke Hengtong Technology Co., Ltd. (Guangzhou)',
      period: '2019.05 - Present',
      position: 'Senior Frontend Developer',
      description: 'Responsible for power digitalization, GIS visualization, digital twin and data dashboard system development, participating in multiple provincial power grid and energy industry projects.',
      responsibilities: [
        'Design large-scale frontend architecture and module splitting, supporting 10+ parallel business systems',
        'Lead WebGIS platform development, integrating Mapbox/OpenLayers dual engines with 50+ spatial analysis capabilities',
        'Drive Vue3 + TypeScript adoption, establishing team development standards and best practices',
        'Deepen React practice covering Hooks, Context, component composition and state lifting',
        'Build component library, SDK and common capabilities, delivering 40+ power industry components',
        'Develop data dashboards, real-time monitoring with map integration, supporting 1920×1080 large screen adaptation',
        'Implement qiankun micro-frontend architecture, enabling independent deployment and integration',
        'Collaborate with backend, product and operations teams, participating in technical reviews'
      ]
    },
    {
      company: 'Qixin Tongda (Beijing) Technology Co., Ltd.',
      period: '2017.01 - 2019.06',
      position: 'Web Frontend Developer',
      description: 'Responsible for enterprise-level frontend systems and emergency command platform development, participating in Southern Power Grid business system construction.',
      responsibilities: [
        'Develop Vue frontend pages and business modules, delivering 20+ feature modules',
        'Build map display and data visualization, implementing typhoon paths and outage range displays',
        'Implement permission systems and component encapsulation, building reusable component library',
        'Participate in large government and enterprise project delivery, gaining ToB/ToG experience'
      ]
    }
  ],
  projects: [
    {
      name: 'React Playground',
      period: '2025.08 - Present',
      tags: ['React 19', 'TypeScript', 'Vite', 'Hooks'],
      description: 'Todo practice project built with React 19 + TypeScript + Vite, systematically covering React core concepts: component composition, props/events unidirectional data flow, state lifting and custom Hook (useTodos), controlled components, list keys, conditional rendering, derived state, useEffect side effects (localStorage / document.title), and Context-based theme switching. Repo: https://github.com/water43/react-playground'
    },
    {
      name: 'Personal Resume Website',
      period: '2025.08 - Present',
      tags: ['React 19', 'TypeScript', 'Vite', 'GitHub Pages'],
      description: 'Online resume site built with React 19 + TypeScript + Vite, featuring Context-based zh/en switching, CSS Modules styling, and modular components (ResumeHeader, Experience, Projects, Education, Certificates, Skills). Content is data-driven via locale configs, with responsive layout and print/PDF export. Auto-deployed to GitHub Pages via GitHub Actions. Live: https://water43.github.io/water43-resume/  Repo: https://github.com/water43/water43-resume'
    },
    {
      name: 'DianhongOS Digital Twin Platform',
      period: '2026.01 - Present',
      tags: ['Vue3', 'TypeScript', 'MapLibre', 'ECharts'],
      description: 'Digital twin operation platform for new power system IoT ecosystem. Built with Vue3 + TypeScript + Vite Monorepo and Element Plus, featuring multi-tenant RBAC backend and portal dashboard: MapLibre map showing terminal distribution and operation metrics, ECharts displaying tenant growth, online rates, alerts, and device access statistics.'
    },
    {
      name: 'Five Transparencies Control Platform',
      period: '2025.10 - Present',
      tags: ['Vue3', 'MapBox GL', 'qiankun', 'UnoCSS'],
      description: 'Power equipment visualization control system built with Vue3 + TypeScript + MapBox GL. Integrates 2D/3D map switching, drill-down navigation, and device tree management, enabling real-time monitoring of five equipment states. Uses ECharts for data visualization dashboards with triple-screen linkage.'
    },
    {
      name: 'Power Grid Panoramic Cockpit',
      period: '2025.01 - 2025.12',
      tags: ['Vue3', 'Mapbox', 'ECharts', 'AntV'],
      description: 'Panoramic cockpit for provincial power grid planning, investment and construction management. Covers new power system metrics, grid planning, investment status, project processes, new energy access, and multi-level early warnings. Built with Vue3 + Vite + Pinia featuring v-scale-screen for 1920×1080 adaptation.'
    },
    {
      name: 'Distribution Network State Estimation System',
      period: '2024.01 - 2024.12',
      tags: ['Vue3', 'TypeScript', 'Amap', 'qiankun'],
      description: 'Frontend system for power distribution network state estimation and monitoring. Built with Vue3, TypeScript, Vite, integrated with Amap for spatial display of feeders and substations with operation and anomaly monitoring. Features state estimation overview and SVG single-line diagram display.'
    },
    {
      name: 'WebGIS Platform',
      period: '2024.01 - Present',
      tags: ['Monorepo', 'Mapbox-GL', 'OpenLayers', 'Turf.js'],
      description: 'Enterprise-grade GIS solution based on Monorepo architecture with core SDK, Vue2/Vue3 component libraries, and documentation. Built with TypeScript + Webpack, integrating dual map engines with 50+ spatial analysis capabilities and 40+ power industry components.'
    },
    {
      name: '**** Shanxi Virtual Power Plant',
      period: '2022.01 - 2024.02',
      tags: ['Vue2', 'Element UI', 'Vuex', 'ECharts'],
      description: 'B2B management platform for power aggregators and virtual power plant operations. Covers distributed resource access (PV, storage, charging stations), demand response trading, power prediction and baseline management, real-time operation monitoring.'
    },
    {
      name: '****** PMS3.0 One Map',
      period: '2021.01 - 2021.08',
      tags: ['Vue', 'GIS', 'Micro Apps'],
      description: 'Power equipment asset management system focused on transmission facility safety and power supply reliability. PMS3.0 features grid resource business middle platform, connecting intelligent devices and aggregating IoT data for field operations and decision analysis.'
    },
    {
      name: 'Power Grid Service Platform',
      period: '2020.07 - 2021.07',
      tags: ['Vue3', 'Vite', 'Component Library'],
      description: 'Frontend construction for **** service platform based on Hainan Digital Power Grid capabilities. Built component example center with reusable modules for routing diagrams, topology diagrams, and real-time data display using Vue3 + Vite.'
    },
    {
      name: '*** Boao Power Supply System',
      period: '2020.04 - 2022.01',
      tags: ['Vue', 'Power Supply', 'Smart'],
      description: 'Intelligent system for major activity power supply needs in Hainan Free Trade Port construction, covering power protection for major events.'
    },
    {
      name: 'Hainan Digital Power Grid',
      period: '2019.07 - 2021.07',
      tags: ['Vue3', 'Mapbox', 'ECharts', 'AntV'],
      description: '**** Hainan digital pilot frontend supporting smart grid and enterprise digitalization. Built with Vue3 + Vite + Pinia for adaptive dashboard, ECharts/AntV for metrics visualization, Mapbox + Turf for grid geographic display.'
    },
    {
      name: 'Emergency Command Platform',
      period: '2016.01 - 2018.01',
      tags: ['Vue', 'Maps', 'Real-time'],
      description: '**** emergency command platform for responding to emergencies and disasters. Provides unified dispatch, emergency event management, resource allocation, information sharing, and data analysis for safe grid operation.'
    }
  ],
  education: [
    {
      school: 'South China Normal University',
      degree: 'Bachelor\'s Degree',
      major: 'Computer Science and Technology'
    }
  ],
  certificates: [
    {
      name: 'PMP - Project Management Professional',
      issuer: 'PMI'
    },
    {
      name: 'AI Trainer (Level 3)',
      issuer: 'SAMR - State Administration for Market Regulation'
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
      title: 'Frontend Frameworks',
      items: ['Vue 2/3', 'React 19', 'React Hooks', 'Context', 'TypeScript', 'JavaScript ES6+']
    },
    gis: {
      title: 'GIS & Visualization',
      items: ['Mapbox GL', 'OpenLayers', 'Amap', 'Turf.js', 'ECharts', 'AntV', 'Three.js']
    },
    engineering: {
      title: 'Engineering',
      items: ['Vite', 'Webpack', 'Rspack', 'qiankun', 'Monorepo', 'Pnpm']
    },
    ui: {
      title: 'UI & Components',
      items: ['Element Plus', 'Ant Design Vue', 'UnoCSS', 'Tailwind CSS', 'SCSS']
    },
    tools: {
      title: 'Tools & Deployment',
      items: ['Git', 'Docker', 'Nginx', 'Jenkins', 'GitLab CI']
    }
  }
}
