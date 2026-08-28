export const en = {
  header: {
    name: 'Chen Zexin',
    title: 'Senior Frontend Developer',
    targetPosition: 'Target: Frontend Developer (20K-30K RMB)',
    targetCity: 'Target City: Shenzhen',
    age: '31 years old',
    experience: '11.5 years exp',
    status: 'Employed - Available within 1 month',
    location: 'Location: Guangzhou',
    phone: '15999562336',
    email: '776025632@qq.com',
    education: 'Bachelor\'s Degree'
  },
  sections: {
    experience: 'Work Experience',
    projects: 'Project Experience',
    education: 'Education',
    skills: 'Professional Skills'
  },
  experience: [
    {
      company: 'Beijing Guoke Hengtong Technology Co., Ltd. (Guangzhou Branch)',
      period: '2019.05 - Present',
      position: 'Frontend Developer',
      description: 'Responsible for power digitalization, GIS visualization, digital twin and data dashboard system development, participating in multiple provincial power grid and energy industry projects.',
      responsibilities: [
        'Design large-scale frontend system architecture and module splitting',
        'Build WebGIS platform and map visualization capabilities',
        'Lead Vue3 + TypeScript technology stack implementation',
        'Develop component libraries, SDKs and common capabilities',
        'Build data dashboards, real-time monitoring and map integration',
        'Promote engineering optimization and micro-frontend architecture',
        'Collaborate with backend, product and operations teams for project delivery'
      ]
    },
    {
      company: 'Qixin Tongda (Beijing) Technology Co., Ltd.',
      period: '2017.01 - 2019.06',
      position: 'Web Frontend Developer',
      description: 'Responsible for enterprise-level frontend systems and emergency command platform development, participating in Southern Power Grid business system construction.',
      responsibilities: [
        'Develop Vue frontend pages and business modules',
        'Build map display and data visualization features',
        'Implement permission systems and component encapsulation',
        'Participate in large government and enterprise project delivery and maintenance'
      ]
    }
  ],
  projects: [
    {
      name: 'DianhongOS New Power System Digital Twin Platform',
      period: '2026.01 - Present',
      description: 'Digital twin operation platform for new power system IoT ecosystem. Built with Vue3 + TypeScript + Vite Monorepo and Element Plus, featuring multi-tenant RBAC backend and portal dashboard: MapLibre map showing terminal distribution and operation metrics, ECharts displaying tenant growth, online rates, alerts, gateway/direct/sub-terminal access and TOP tenant statistics.'
    },
    {
      name: 'Five Transparencies Control Platform',
      period: '2025.10 - Present',
      description: 'Power equipment visualization control system built with Vue3 + TypeScript + MapBox GL. Integrates 2D/3D map switching, map drill-down navigation, and device tree management, enabling real-time monitoring of five equipment states (running, maintenance, fault, etc.). Uses ECharts for data visualization dashboards, supporting triple-screen linkage for assets, operations, work orders, and environment modules.'
    },
    {
      name: 'Power Grid Panoramic Cockpit Platform',
      period: '2025.01 - 2025.12',
      description: 'Panoramic cockpit for provincial power grid planning, investment and construction management. Covers new power system metrics, grid planning (main/distribution network), investment status, project construction processes, new energy access, data governance and multi-level early warnings. Built with Vue3 + Vite + Pinia, featuring v-scale-screen for 1920×1080 adaptation.'
    },
    {
      name: 'Distribution Network State Estimation Visualization System',
      period: '2024.01 - 2024.12',
      description: 'Frontend system for power distribution network state estimation and operation monitoring. Built with Vue3, TypeScript, Vite, integrated with Amap, implementing spatial display of feeders, substations and equipment with operation, anomaly, voltage, PV, and observability topic monitoring. Supports Qiankun micro-frontend embedding and multi-form independent deployment.'
    },
    {
      name: 'WebGIS Geographic Information Platform',
      period: '2024.01 - Present',
      description: 'Enterprise-grade GIS solution based on Monorepo architecture, including core SDK, Vue2/Vue3 component libraries, documentation site and development examples. Built with TypeScript + Webpack, integrating Mapbox-GL and OpenLayers dual map engines, wrapping Turf.js for 50+ spatial analysis capabilities. Business layer provides 40+ power industry components.'
    },
    {
      name: 'Huaneng Shanxi Virtual Power Plant',
      period: '2022.01 - 2024.02',
      description: 'B2B comprehensive management platform for power aggregators and virtual power plant operations, built with Vue2 + Element UI + Vuex. Covers distributed resource (PV, storage, charging stations, adjustable loads) access and aggregation, demand response trading, power prediction and baseline management, real-time operation monitoring.'
    },
    {
      name: 'NARI State Grid PMS3.0 One Map Project',
      period: '2021.01 - 2021.08',
      description: 'PMS is a power equipment asset management system based on equipment and asset management, aimed at improving transmission and substation facility safety and power supply reliability. PMS3.0 features a power grid resource business middle platform as its core, connecting intelligent devices downstream and supporting field operations, business control, analysis and decision-making.'
    },
    {
      name: 'Power Grid Comprehensive Service Platform',
      period: '2020.07 - 2021.07',
      description: 'Frontend construction for Southern Power Grid business scenario service platform, based on Hainan Digital Power Grid platform capabilities. Built component example center with reusable modules for routing diagrams, topology diagrams, and real-time data display. Vue3 + Vite based scene-specific component encapsulation.'
    },
    {
      name: 'Hainan Research Institute Boao Power Supply System',
      period: '2020.04 - 2022.01',
      description: 'Intelligent system developed for major activity power supply needs in Hainan Free Trade Port construction. Promotes normalization, intelligence and smart operation of power supply work, covering Boao Forum for Asia and Wenchang Space Launch Base.'
    },
    {
      name: 'Hainan Digital Power Grid',
      period: '2019.07 - 2021.07',
      description: 'Southern Power Grid Hainan digital power grid pilot frontend construction, supporting smart grid and enterprise digitalization goals. Built with Vue3 + Vite + Pinia for 1920 adaptive dashboard, ECharts/AntV for new power system metrics; Mapbox + Turf for grid routing and topology geographic display.'
    },
    {
      name: 'Emergency Command Platform',
      period: '2016.01 - 2018.01',
      description: 'Southern Power Grid emergency command platform for responding to emergencies and disasters. Provides unified command and dispatch, emergency event management, emergency resource allocation, information sharing and communication, data analysis and prediction capabilities to ensure safe and stable grid operation.'
    }
  ],
  education: [
    {
      school: 'South China Normal University (Online Education)',
      degree: 'Bachelor\'s Degree',
      period: '2013.09 - 2017.06',
      major: 'Computer Science and Technology'
    },
    {
      school: 'Guangdong Mechanical & Electrical Polytechnic',
      degree: 'Associate Degree',
      period: '2013.01 - 2016.01',
      major: 'Software Technology'
    }
  ],
  skills: [
    { name: 'Vue', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 75 },
    { name: 'Angular', level: 70 },
    { name: 'Node.js', level: 75 },
    { name: 'Webpack/Vite', level: 85 },
    { name: 'ECharts', level: 90 },
    { name: 'WebGIS', level: 90 },
    { name: 'HTML5/CSS3', level: 95 }
  ]
}
