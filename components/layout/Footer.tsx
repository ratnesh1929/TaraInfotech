import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div> */}
              <h3 className="text-3xl font-extrabold gradient-text">Tara InfoTech</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Tara Infotech, we create innovative web, mobile, and software solutions that empower businesses to grow and succeed. Technology meets creativity here—where your vision transforms into scalable, future-ready solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Facebook size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Twitter size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-all hover:translate-x-1 inline-block group">
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all"></span>
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-all hover:translate-x-1 inline-block group">
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all"></span>
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-all hover:translate-x-1 inline-block group">
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all"></span>
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-all hover:translate-x-1 inline-block group">
                  <span className="flex items-center">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all"></span>
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                Web Development
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                Mobile Apps
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                UI/UX Design
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                Digital Marketing
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors flex-shrink-0">
                  <Mail size={16} className="text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed break-all">tarasoftwareworks@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors flex-shrink-0">
                  <Phone size={16} className="text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">+91 8866661624</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors flex-shrink-0">
                  <MapPin size={16} className="text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">Central Bazar, Navsari, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tara InfoTech. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-gray-700">|</span>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-gray-700">|</span>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
