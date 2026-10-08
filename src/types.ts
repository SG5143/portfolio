export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectMedia {
  src?: string
  alt: string
  caption: string
}

export interface Project {
  id: string
  name: string
  period: string
  type: string
  role: string
  summary: string
  highlights: string[]
  stack: string[]
  media: ProjectMedia[]
  links: ProjectLink[]
}

export interface Experience {
  company: string
  period: string
  duration: string
  position: string
  summary: string
  contributions: string[]
  stack: string[]
}

export interface Education {
  category: 'Education' | 'Training'
  title: string
  period: string
  description?: string
  detail?: string
}

export interface Profile {
  name: string
  role: string
  introduction: string
  email: string
  github: string
}

export interface SkillGroup {
  index: string
  title: string
  description: string
  skills: string[]
}
