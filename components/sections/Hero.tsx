'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  
  const heroTexts = [
    'Web Development',
    'Mobile Applications',
    'Digital Solutions',
    'UI/UX Design'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [heroTexts.length])

  // lock background scroll and handle Esc to close modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDemoOpen(false)
    }

    if (isDemoOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKey)
      return () => {
        document.body.style.overflow = prev
        window.removeEventListener('keydown', handleKey)
      }
    }
  }, [isDemoOpen])

  // play/pause/reset video when modal opens/closes
  useEffect(() => {
    if (isDemoOpen) {
      videoRef.current?.play().catch(() => {
        /* autoplay may be blocked; user can use controls */
      })
    } else {
      if (videoRef.current) {
        videoRef.current.pause()
        try { videoRef.current.currentTime = 0 } catch {}
      }
    }
  }, [isDemoOpen])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                We Build Amazing
                <span className="block gradient-text">
                  {heroTexts[currentText]}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Transform your business with cutting-edge technology solutions. 
                We deliver innovative web and mobile applications that drive growth and success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors group"
              >
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/hero.jpg"
                  alt="Digital Vision"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20"></div>
      </div>

      {/* Demo Modal */}
      {isDemoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={() => setIsDemoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsDemoOpen(false)}
              aria-label="Close demo"
              className="absolute -top-6 right-0 text-white bg-black bg-opacity-50 rounded-full p-2 hover:opacity-90"
            >
              ✕
            </button>

            <div className="w-full h-0 pb-[56.25%] relative"> 
              <video
                ref={videoRef}
                src="/Video.mp4"
                controls
                className="absolute inset-0 w-full h-full rounded-lg bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
