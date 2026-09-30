import type { ResumeLocale } from '../types/resume'

export const en: ResumeLocale = {
  header: {
    name: 'Chen Zexin',
    title: 'Senior Frontend Developer',
    targetPosition: 'Target: Senior Frontend Engineer | Vue3 / TypeScript | WebGIS / Data Visualization',
    targetCity: 'Target City: Guangzhou/Shenzhen',
    experience: '9+ years exp',
    location: 'Guangzhou',
    phone: '15999562336',
    email: '15999562336@163.com',
    github: 'https://github.com/water43',
    education: 'Bachelor\'s Degree',
    summary: 'Senior frontend engineer with 9+ years of enterprise experience in power digitalization, WebGIS and data visualization, PMP certified. Expert in Vue3 + TypeScript with hands-on React engineering practice; led enterprise GIS platform development and contributed to multiple provincial grid deliveries. Experienced in frontend architecture, micro-frontends, component libraries and cross-functional delivery across ToB/ToG projects.'
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
    footer: '© 2026 Chen Zexin | Built with React + TypeScript + Vite'
  },
  experience: [
    {
      company: 'Beijing Guoke Hengtong Technology Co., Ltd. (Guangzhou Branch)',
      period: '2019.07 - Present',
      position: 'Senior Frontend Developer',
      description: 'Owned frontend architecture and core modules for power digitalization, WebGIS and data visualization; led reusable enterprise GIS capability development and contributed to provincial grid and energy deliveries.',
      responsibilities: [
        'Designed large-scale frontend architecture and module boundaries, enabling multiple business systems to iterate in parallel',
        'Led WebGIS Monorepo platform with Mapbox/OpenLayers dual engines and 50+ spatial analysis APIs reused across product lines',
        'Rolled out Vue3 + TypeScript engineering standards, reducing cross-project collaboration cost',
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
        'Delivered multiple Vue business modules covering command dispatch and daily operations flows',
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
      description: 'Enterprise GIS capability platform: Monorepo SDK + Vue2/Vue3 component libraries + docs; Mapbox-GL/OpenLayers dual engines with 50+ Turf spatial APIs, 40+ power components and 200+ example pages. Impact: reused by multiple business systems, reducing duplicated map work. Role: architecture and core SDK/component library.'
    },
    {
      name: 'New Power System Digital Twin Platform',
      period: '2026.01 - Present',
      tags: ['Vue3', 'TypeScript', 'MapLibre', 'ECharts'],
      description: 'Digital twin ops platform for new power IoT: Vue3 + TS + Vite Monorepo multi-tenant RBAC and portal dashboards; MapLibre terminal distribution, ECharts growth/online/alert/access metrics. Impact: scaled terminal monitoring with dual-API and dynamic permissions. Role: frontend architecture and core visualization modules.'
    },
    {
      name: 'Power Equipment Transparency Control Platform',
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
      description: 'Maintainable online resume built with React 19 + TypeScript + Vite. Uses Context for zh/en switching, CSS Modules for scoped styling and locale configs for data-driven content; splits Header, Experience and Projects into focused components, supports responsive layout and print/PDF export, and deploys automatically to GitHub Pages via GitHub Actions.',
      links: [
        { label: 'Live site', url: 'https://water43.github.io/water43-resume/' },
        { label: 'Source code', url: 'https://github.com/water43/water43-resume' }
      ]
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
      issuer: 'Certification and Accreditation Technology Research Center, SAMR'
    }
  ],
  skillCategories: {
    frontend: {
      title: 'Core Frontend',
      items: ['Vue 2/3', 'TypeScript', 'JavaScript ES6+', 'React 19', 'React Hooks', 'Context']
    },
    gis: {
      title: 'GIS & Visualization',
      items: ['Mapbox GL', 'MapLibre', 'OpenLayers', 'Amap', 'Turf.js', 'ECharts', 'AntV']
    },
    engineering: {
      title: 'Engineering',
      items: ['Vite', 'Webpack', 'Rspack', 'SWC', 'qiankun', 'Monorepo']
    },
    ui: {
      title: 'UI & Components',
      items: ['Element Plus', 'Element UI', 'UnoCSS', 'CSS Modules', 'SCSS']
    },
    tools: {
      title: 'Tools & Deployment',
      items: ['Git', 'Docker', 'Nginx', 'GitHub Actions', 'GitHub Pages']
    }
  }
}
