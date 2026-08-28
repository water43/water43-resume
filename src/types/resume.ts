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
  description: string
}

export interface Education {
  school: string
  degree: string
  period: string
  major: string
}

export interface Skill {
  name: string
  level: number
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
}

export interface Sections {
  experience: string
  projects: string
  education: string
  skills: string
}

export interface ResumeLocale {
  header: Header
  sections: Sections
  experience: Experience[]
  projects: Project[]
  education: Education[]
  skills: Skill[]
}
