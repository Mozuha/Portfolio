// in case of want to object-ize the detail property
// interface Details {
//   purpose: string[],
//   techStack: string[],
//   note?: string[],
// }

export interface ProjectInfo {
  title: string
  image?: string
  description?: string
  detail?: string[]
  link?: string
  github?: string
}