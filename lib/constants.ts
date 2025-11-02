export const SITE_CONFIG = {
  name: 'MundraTech',
  description: 'Leading technology solutions provider specializing in web development, mobile apps, and digital transformation.',
  url: 'https://tarainfotech.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/tarainfotech',
    github: 'https://github.com/tarainfotech',
    linkedin: 'https://linkedin.com/company/tarainfotech',
    facebook: 'https://facebook.com/tarainfotech',
    instagram: 'https://instagram.com/tarainfotech',
  },
}

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    icon: 'Globe',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible'],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'Smartphone',
    features: ['Native Performance', 'Cross-platform', 'App Store Ready', 'Push Notifications'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
    icon: 'Palette',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    icon: 'BarChart3',
    features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
    technologies: ['Google Analytics', 'Facebook Ads', 'Google Ads', 'HubSpot', 'Mailchimp'],
  },
  {
    id: 'security-solutions',
    title: 'Security Solutions',
    description: 'Robust security measures to protect your applications and data.',
    icon: 'Shield',
    features: ['SSL Certificates', 'Data Encryption', 'Security Audits', 'Compliance'],
    technologies: ['AWS Security', 'Azure Security', 'OWASP', 'Penetration Testing', 'GDPR'],
  },
  {
    id: 'support-maintenance',
    title: 'Support & Maintenance',
    description: 'Ongoing support and maintenance to keep your applications running smoothly.',
    icon: 'Headphones',
    features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Bug Fixes'],
    technologies: ['Monitoring Tools', 'CI/CD', 'Docker', 'Kubernetes', 'Cloud Services'],
  },
]

export const CONTACT_INFO = {
  email: 'mundratechworks@gmail.com',
  phone: '+91 8866661624',
  address: '123 Tech Street, Innovation District, City, State 12345',
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
}

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/tarainfotech',
  twitter: 'https://twitter.com/tarainfotech',
  linkedin: 'https://linkedin.com/company/tarainfotech',
  instagram: 'https://instagram.com/tarainfotech',
  youtube: 'https://youtube.com/tarainfotech',
  github: 'https://github.com/tarainfotech',
}

export const COMPANY_STATS = {
  projectsCompleted: 100,
  happyClients: 50,
  yearsExperience: 5,
  teamMembers: 15,
}

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'John Smith',
    company: 'TechCorp Inc.',
    role: 'CEO',
    content: 'MundraTech delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
    avatar: '/images/testimonials/john-smith.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'StartupXYZ',
    role: 'Founder',
    content: 'The mobile app they developed for us has been a game-changer. User engagement increased by 300% within the first month of launch.',
    rating: 5,
    avatar: '/images/testimonials/sarah-johnson.jpg',
  },
  {
    id: 3,
    name: 'Michael Brown',
    company: 'Enterprise Solutions',
    role: 'CTO',
    content: 'Professional, reliable, and innovative. MundraTech transformed our digital presence and helped us scale our business significantly.',
    rating: 5,
    avatar: '/images/testimonials/michael-brown.jpg',
  },
]

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with payment integration and admin dashboard.',
    image: '/images/portfolio/ecommerce-platform.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/tarainfotech/ecommerce-platform',
    featured: true,
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    image: '/images/portfolio/mobile-banking.jpg',
    technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL'],
    category: 'Mobile Development',
    liveUrl: 'https://apps.apple.com/banking-app',
    githubUrl: 'https://github.com/tarainfotech/mobile-banking',
    featured: true,
  },
  {
    id: 3,
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management system for clinics and hospitals.',
    image: '/images/portfolio/healthcare-system.jpg',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    category: 'Web Development',
    liveUrl: 'https://healthcare-system.com',
    githubUrl: 'https://github.com/tarainfotech/healthcare-system',
    featured: false,
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Online learning platform with video streaming and interactive features.',
    image: '/images/portfolio/lms-platform.jpg',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    category: 'Web Development',
    liveUrl: 'https://lms-platform.com',
    githubUrl: 'https://github.com/tarainfotech/lms-platform',
    featured: true,
  },
  {
    id: 5,
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search and virtual tour features.',
    image: '/images/portfolio/real-estate.jpg',
    technologies: ['Angular', 'Express.js', 'MongoDB', 'Cloudinary'],
    category: 'Web Development',
    liveUrl: 'https://real-estate-portal.com',
    githubUrl: 'https://github.com/tarainfotech/real-estate-portal',
    featured: false,
  },
  {
    id: 6,
    title: 'Food Delivery App',
    description: 'Food delivery application with real-time tracking and multiple payment options.',
    image: '/images/portfolio/food-delivery.jpg',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
    category: 'Mobile Development',
    liveUrl: 'https://play.google.com/food-delivery',
    githubUrl: 'https://github.com/tarainfotech/food-delivery',
    featured: false,
  },
]

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years of experience in technology and business development.',
    image: '/images/team/alex-johnson.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/alex-johnson',
      twitter: 'https://twitter.com/alexjohnson',
    },
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Technical expert specializing in scalable architecture and modern development practices.',
    image: '/images/team/sarah-chen.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarah-chen',
      github: 'https://github.com/sarahchen',
    },
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    bio: 'Full-stack developer passionate about creating innovative solutions and mentoring teams.',
    image: '/images/team/michael-rodriguez.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
      github: 'https://github.com/michaelrodriguez',
    },
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on user-centered design and creating exceptional digital experiences.',
    image: '/images/team/emily-davis.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/emily-davis',
      dribbble: 'https://dribbble.com/emilydavis',
    },
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
    content: 'Full blog post content...',
    author: 'Alex Johnson',
    publishedAt: '2024-01-15',
    image: '/images/blog/web-development-trends.jpg',
    tags: ['Web Development', 'Technology', 'Trends'],
    slug: 'future-web-development-trends-2024',
  },
  {
    id: 2,
    title: 'Building Scalable Mobile Applications: Best Practices',
    excerpt: 'Learn the essential practices for creating mobile apps that can grow with your business.',
    content: 'Full blog post content...',
    author: 'Sarah Chen',
    publishedAt: '2024-01-10',
    image: '/images/blog/mobile-app-best-practices.jpg',
    tags: ['Mobile Development', 'Best Practices', 'Scalability'],
    slug: 'building-scalable-mobile-applications',
  },
  {
    id: 3,
    title: 'UI/UX Design Principles for Better User Engagement',
    excerpt: 'Discover key design principles that can significantly improve user engagement and satisfaction.',
    content: 'Full blog post content...',
    author: 'Emily Davis',
    publishedAt: '2024-01-05',
    image: '/images/blog/ui-ux-design-principles.jpg',
    tags: ['UI/UX', 'Design', 'User Experience'],
    slug: 'ui-ux-design-principles-user-engagement',
  },
]


