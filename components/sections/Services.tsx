'use client'

import { useState } from 'react'
import { Globe, Smartphone, Palette, BarChart3, Shield, Headphones, Cloud, Database, ShoppingCart, Zap, Code2, Layers } from 'lucide-react'

export function Services() {
  const [showAll, setShowAll] = useState(false)
  
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with React, Next.js, and modern frameworks.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Performance', 'Cross-platform', 'App Store Ready', 'Push Notifications']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Gateway', 'Shopping Cart', 'Order Management', 'Admin Dashboard']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services for your applications.',
      features: ['AWS/Azure/GCP', 'Auto Scaling', 'Load Balancing', 'Cloud Migration']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management solutions.',
      features: ['SQL/NoSQL', 'Data Modeling', 'Performance Tuning', 'Backup Solutions']
    },
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business needs.',
      features: ['Business Analysis', 'Custom Features', 'Integration', 'Scalable Architecture']
    },
    {
      icon: Zap,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration and data exchange.',
      features: ['REST APIs', 'GraphQL', 'API Documentation', 'Third-party Integration']
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
      icon: Layers,
      title: 'CMS Development',
      description: 'Content Management Systems for easy website content updates and management.',
      features: ['WordPress', 'Custom CMS', 'Content Migration', 'Plugin Development']
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security audits and quality assurance testing services.',
      features: ['Security Audits', 'Penetration Testing', 'QA Testing', 'Code Review']
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.',
      features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Bug Fixes']
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">🚀 What We Offer</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering end-to-end technology solutions designed to empower your business, enhance efficiency, and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, showAll ? services.length : 6).map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100 hover:border-primary-200 relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon size={36} className="text-primary-600 group-hover:text-primary-700 transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-primary-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>{showAll ? 'Show Less Services' : 'View All Services'}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
