export interface Text {
  ABOUT: About
  EXPERIENCES: Experience[]
  PROJECTS: Project[]
}

interface About {
  DESCRIPTION1: string
  DESCRIPTION2: string
  DESCRIPTION3: string
}

interface Experience {
  POSITION: string
  DESCRIPTION: string
}

interface Project {
  DESCRIPTION: string
  PURPOSE: string
  NOTE?: string
} 