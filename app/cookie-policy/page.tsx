"use client";

import { Cookie, Settings, BarChart, Shield, Info } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <Cookie className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files placed on your device when you visit our website. They help us provide a better 
              experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          {/* Types of Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Essential Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Necessary for the website to function. Enable basic functions like page navigation and secure area access.
                </p>
                <p className="text-sm text-gray-600 italic">Duration: Session or up to 1 year</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-blue-600" />
                  Analytics Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Help us understand visitor interactions anonymously. Used to improve website performance and user experience.
                </p>
                <p className="text-sm text-gray-600 italic">Duration: Up to 2 years</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-green-600" />
                  Functionality Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Remember your preferences and choices to provide enhanced, personalized features.
                </p>
                <p className="text-sm text-gray-600 italic">Duration: Up to 1 year</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Targeting/Advertising Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Track your browsing habits to deliver relevant advertisements and measure campaign effectiveness.
                </p>
                <p className="text-sm text-gray-600 italic">Duration: Up to 2 years</p>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may use third-party services that set cookies on our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
              <li><strong>Social Media Platforms:</strong> Social sharing and integration features</li>
              <li><strong>Advertising Networks:</strong> Targeted advertising and remarketing</li>
              <li><strong>Payment Processors:</strong> Secure payment processing</li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">How to Manage Cookies</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Browser Settings</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Most browsers allow you to control cookies through settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Block all cookies</li>
                  <li>Accept only first-party cookies</li>
                  <li>Delete cookies when closing your browser</li>
                  <li>View and delete individual cookies</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Browser-Specific Instructions:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                  <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-gray-700 text-sm">
                  <strong>Note:</strong> Blocking or deleting cookies may impact your experience on our website and limit 
                  certain features.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Consent */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cookie Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              When you first visit our website, you&apos;ll see a cookie banner asking for your consent. You can choose to 
              accept all cookies, reject non-essential cookies, or customize your preferences. You can change your 
              preferences at any time through our cookie settings.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our 
              practices. Please review this page periodically for any updates.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> mundratechworks@gmail.com</p>
              <p><strong>Phone:</strong> +91 8866661624</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
