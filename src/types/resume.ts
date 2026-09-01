export type Locale = 'zh' | 'en'

export interface Experience {
  company: string
  period: string
  position: string
  description: string
  responsibilities: string[]
}

export interface Project {
  name: string
  period: string
  tags?: string[]
  description: string
}

export interface Education {
  school: string
  degree: string
  period?: string
  major: string
}

export interface Certificate {
  name: string
  issuer: string
}

export interface Skill {
  name: string
  level: number
  category?: string
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface Header {
  name: string
  title: string
  targetPosition: string
  targetCity: string
  age: string
  experience: string
  status: string
  location: string
  phone: string
  email: string
  education: string
  summary?: string
}

export interface Sections {
  experience: string
  projects: string
  education: string
  certificates: string
  skills: string
}

export interface UI {
  print: string
  expandProjects: string
  collapseProjects: string
  footer: string
}

export interface ResumeLocale {
  header: Header
  sections: Sections
  ui: UI
  experience: Experience[]
  projects: Project[]
  education: Education[]
  certificates: Certificate[]
  skills: Skill[]
  skillCategories: Record<string, SkillCategory>
}
