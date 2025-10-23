import { Code, Smartphone, Palette, Zap } from 'lucide-react'
import Image from 'next/image'
import target_img from '../../public/images/20945375.jpg'

export function About() {
  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring quick turnaround times without compromising quality.'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">Why Choose Us</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">Tara InfoTech?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with creative vision to deliver solutions that exceed expectations and drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 group border border-gray-100 hover:border-primary-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon size={36} className="text-primary-600 group-hover:text-primary-700 transition-colors" />
                </div>
                <div className="absolute inset-0 bg-primary-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-left">
            {/* <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full">
              <span className="text-primary-600 font-semibold text-sm">🎯 Our Mission</span>
            </div> */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Empowering Your <span className="gradient-text">Digital Future</span>
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower businesses with innovative digital solutions that fuel growth and efficiency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We transform ideas into powerful realities through technology, creativity, and excellence.
                Every project we deliver drives connection, impact, and lasting success.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-green-700">Innovation First</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold text-blue-700">Quality Driven</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-semibold text-purple-700">Client Focused</span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 mix-blend-overlay"></div>
                <img src="/mission.webp" alt="Our Mission" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
