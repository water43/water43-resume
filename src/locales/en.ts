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
      description: 'Focused on power digitalization, WebGIS and data dashboards; delivered frontend systems for provincial grid and energy projects with reusable GIS/visualization capabilities.',
      responsibilities: [
        'Designed large-scale frontend architecture and module boundaries, enabling 10+ business systems to iterate in parallel',
        'Led WebGIS Monorepo platform with Mapbox/OpenLayers dual engines and 50+ spatial analysis APIs reused across product lines',
        'Rolled out Vue3 + TypeScript engineering standards, reducing cross-project collaboration cost',
        'Delivered React Hooks/Context engineering practice via a production resume site with CI/CD publishing',
        'Built component library/SDK with 40+ power-industry components, cutting duplicated UI work',
        'Shipped 1920×1080 dashboards with map-linked monitoring for planning and operations scenarios',
        'Implemented qiankun micro-frontends and build optimizations (Vite/Rspack) for independent deploy and on-demand integration',
        'Partnered with backend/product/ops on reviews and releases to land provincial deliveries on schedule'
      ]
    },
    {
      company: 'Qixin Tongda (Beijing) Technology Co., Ltd.',
      period: '2017.01 - 2019.06',
      position: 'Web Frontend Developer',
      description: 'Built enterprise frontend and emergency-command systems, delivering visualization and permission capabilities for government/enterprise scenarios.',
      responsibilities: [
        'Delivered 20+ Vue business modules covering command dispatch and daily operations flows',
        'Implemented map topics such as typhoon paths and outage ranges for emergency analysis',
        'Encapsulated permission systems and reusable components to improve maintainability',
        'Joined large ToB/ToG delivery, integration and long-term maintenance'
      ]
    }
  ],
  projects: [
    {
      name: 'WebGIS Platform',
      period: '2024.01 - Present',
      tags: ['Monorepo', 'Mapbox-GL', 'OpenLayers', 'Turf.js'],
      description: 'Enterprise GIS capability platform: Monorepo SDK + Vue2/Vue3 component libraries + docs; Mapbox-GL/OpenLayers dual engines with 50+ Turf spatial APIs and 40+ power components. Impact: reused by 10+ business systems, reducing duplicated map work. Role: architecture and core SDK/component library.'
    },
    {
      name: 'DianhongOS Digital Twin Platform',
      period: '2026.01 - Present',
      tags: ['Vue3', 'TypeScript', 'MapLibre', 'ECharts'],
      description: 'Digital twin ops platform for new power IoT: Vue3 + TS + Vite Monorepo multi-tenant RBAC and portal dashboards; MapLibre terminal distribution, ECharts growth/online/alert/access metrics. Impact: scaled terminal monitoring with dual-API and dynamic permissions. Role: frontend architecture and core visualization modules.'
    },
    {
      name: 'Five Transparencies Control Platform',
      period: '2025.10 - Present',
      tags: ['Vue3', 'MapBox GL', 'qiankun', 'UnoCSS'],
      description: 'Equipment visualization control system: Vue3 + MapBox GL for 2D/3D switch, drill-down and five-state monitoring; ECharts triple-screen for assets/ops/work/environment. Impact: qiankun multi-env independent deploy improved parallel delivery. Role: map visualization and micro-app core development.'
    },
    {
      name: 'Power Grid Panoramic Cockpit',
      period: '2025.01 - 2025.12',
      tags: ['Vue3', 'Mapbox', 'ECharts', 'AntV'],
      description: 'Provincial planning/investment/construction cockpit covering metrics, grid planning, full project lifecycle, new energy and multi-level alerts; Vue3 + Pinia + v-scale-screen for 1920×1080, Mapbox for grid panorama. Impact: one-screen overview with topic drill-down for decision making. Role: dashboard architecture and core topic pages.'
    },
    {
      name: 'Personal Resume Website',
      period: '2025.08 - Present',
      tags: ['React 19', 'TypeScript', 'Vite', 'GitHub Pages'],
      description: 'Production-oriented React engineering practice (not a toy demo): React 19 + TypeScript + Vite, Context i18n, CSS Modules, locale-driven content, modular business components, print/PDF and responsive layout, GitHub Actions CI/CD to Pages. Impact: public portfolio validating React delivery capability. Live: https://water43.github.io/water43-resume/  Repo: https://github.com/water43/water43-resume'
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
