'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-gray-100/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have an idea or project in mind? We’re here to turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 h-full">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-l-4 border-primary-500 pl-3">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 h-full">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all placeholder-white"
                  placeholder="What’s this about?"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all placeholder-white"
                  placeholder="Tell us about your project... "
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-primary-500 pl-3">
                  Contact Information
                </h3>
                <p className="text-gray-600 max-w-md">
                  We’re always happy to connect. Reach out using any of the methods below — our team will respond promptly.
                </p>
              </div>

              <div className="space-y-6">
               {[
{
  title: 'Email',
 icon: Mail,
details: ['tarasoftwareworks@gmail.com', 'support@tarainfotech.com']
}, {
title: 'Phone',
icon: Phone,
 details: ['+91 8866661624', '+1 (555) 987-6543']
},
{
 title: 'Address',
 icon: MapPin,
 details: ['123 Tech Street', 'Innovation District', 'City, State 12345']
}
].map((item, index) => (
 <div key={index} className="flex items-start space-x-4">
 <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
 <item.icon size={24} className="text-primary-600" />
 </div>
<div>
 <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
 {item.details.map((d, i) => (
 <p key={i} className="text-gray-600">{d}</p>
 ))}
 </div>
 </div>
))}

              </div>
            </div>

            {/* 5 Working Days Statement, and Notes */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Notes
              </h4>
              <div className="space-y-1 text-gray-600">
                <p>We are available 5 working days a week (Monday to Friday).</p>
                <p>For prompt assistance, please expect a reply within 24-48 hours during working days.</p>
                <p>All information submitted is protected and confidential.</p>
                <p>
                  For career opportunities, please email your resume to{' '}
                  <a
                    href="mailto:hr@tarainfotech.com"
                    className="text-primary-600 underline hover:text-primary-700"
                  >
                    hr@tarainfotech.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
