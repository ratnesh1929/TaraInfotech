import { ExternalLink, Github } from 'lucide-react'

export function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Fashion Store',
      description: 'A modern and fully responsive e-commerce platform for clothing with product search, size/color variations, secure checkout with multiple payment options, order tracking, and an intuitive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    },
    {
      title: 'Food Delivery Platform',
      description: 'Complete food delivery solution with real-time order tracking, restaurant management, multiple payment gateways, customer reviews, and delivery partner app integration.',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform for clinics and hospitals with patient records, appointment scheduling, prescription management, billing, and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
    },
    {
      title: 'Learning Management System',
      description: 'Online education platform with video streaming, live classes, assignments, quizzes, progress tracking, certificates, and interactive learning tools for students and educators.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop'
    },
    {
      title: 'Real Estate Portal',
      description: 'Property listing and management platform with advanced search filters, virtual tours, mortgage calculator, agent dashboard, and lead management system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'
    },
    {
      title: 'Mobile Banking Application',
      description: 'Secure banking app with biometric authentication, real-time transactions, bill payments, fund transfers, investment tracking, and financial analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
    }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">💼 Our Work</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 group border border-gray-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
