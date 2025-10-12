export interface NavItem {
  name: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  technologies: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
    dribbble?: string
  }
}

export interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar: string
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  image: string
  tags: string[]
  slug: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface CompanyStats {
  projectsCompleted: number
  happyClients: number
  yearsExperience: number
  teamMembers: number
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
  businessHours: {
    weekdays: string
    saturday: string
    sunday: string
  }
}

export interface SocialLinks {
  facebook: string
  twitter: string
  linkedin: string
  instagram: string
  youtube: string
  github: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: SocialLinks
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
}

export interface AnimationProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

export interface SeoProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface FilterProps {
  category?: string
  technology?: string
  featured?: boolean
}

export interface SearchProps {
  query: string
  results: (Project | BlogPost)[]
  total: number
}

export interface NewsletterFormData {
  email: string
  name?: string
}

export interface QuoteFormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  timeline: string
  description: string
}

export interface CareerPosition {
  id: number
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  description: string
  requirements: string[]
  benefits: string[]
  postedAt: string
  applicationDeadline?: string
}

export interface CaseStudy {
  id: number
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  image: string
  featured: boolean
  publishedAt: string
  slug: string
}
