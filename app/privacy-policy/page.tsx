"use client";

import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At Tara Infotech, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Fill out contact forms or request information</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Register for an account or use our services</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  This information may include: name, email address, phone number, company name, job title, and any other 
                  information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Clickstream data and usage patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Providing, maintaining, and improving our services</li>
              <li>Responding to your inquiries and customer service requests</li>
              <li>Sending you technical notices, updates, and support messages</li>
              <li>Communicating with you about products, services, and promotional offers</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Detecting, preventing, and addressing technical issues or fraudulent activity</li>
              <li>Complying with legal obligations and enforcing our terms</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the 
              following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and services</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more details, 
              please see our <a href="/cookie-policy" className="text-primary-600 hover:text-primary-700 font-semibold">Cookie Policy</a>.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
              content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
              from children. If you become aware that a child has provided us with personal information, please contact us, and 
              we will take steps to delete such information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically 
              for any changes.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> privacy@tarainfotech.com</p>
              <p><strong>Phone:</strong> +91 (XXX) XXX-XXXX</p>
              <p><strong>Address:</strong> Your Company Address</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
