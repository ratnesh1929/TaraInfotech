"use client";

import { FileText, AlertCircle, Scale, CheckCircle } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <FileText className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Tara Infotech. By accessing or using our website and services, you agree to be bound by these Terms 
              of Service (&quot;Terms&quot;). Please read these Terms carefully before using our services. If you do not agree to these 
              Terms, please do not use our website or services.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Definitions</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;</strong> refers to Tara Infotech
              </li>
              <li>
                <strong>&quot;Services&quot;</strong> refers to all services, products, and features provided by Tara Infotech
              </li>
              <li>
                <strong>&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;</strong> refers to any individual or entity using our services
              </li>
              <li>
                <strong>&quot;Website&quot;</strong> refers to our website and all associated platforms
              </li>
            </ul>
          </section>

          {/* Use of Services */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Use of Services</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Eligibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least 18 years old to use our services. By using our services, you represent and warrant 
                  that you meet this age requirement and have the legal capacity to enter into these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Registration</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  When creating an account with us, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Acceptable Use</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any laws, regulations, or third-party rights</li>
                  <li>Transmit any harmful code, viruses, or malicious software</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the integrity of our services</li>
                  <li>Collect or harvest information about other users</li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Intellectual Property Rights</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  All content, features, and functionality on our website, including but not limited to text, graphics, logos, 
                  images, software, and design, are owned by Tara Infotech or our licensors and are protected by copyright, 
                  trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  You retain ownership of any content you submit to us. By submitting content, you grant us a worldwide, 
                  non-exclusive, royalty-free license to use, reproduce, modify, and display your content in connection with 
                  providing our services.
                </p>
              </div>
            </div>
          </section>

          {/* Services and Deliverables */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services and Deliverables</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Scope</h3>
                <p className="text-gray-700 leading-relaxed">
                  All projects will be defined by a separate agreement or statement of work that outlines the specific 
                  deliverables, timelines, and payment terms. Changes to the project scope may result in additional fees 
                  and timeline adjustments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Responsibilities</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Providing timely feedback and approvals</li>
                  <li>Supplying necessary materials and information</li>
                  <li>Ensuring content accuracy and legal compliance</li>
                  <li>Making timely payments as agreed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                <strong>Fees:</strong> All fees are specified in the project agreement and are due according to the payment 
                schedule outlined therein.
              </p>
              <p className="leading-relaxed">
                <strong>Late Payments:</strong> Late payments may incur additional fees and may result in suspension of services.
              </p>
              <p className="leading-relaxed">
                <strong>Refunds:</strong> Refund policies will be specified in individual project agreements. Generally, 
                deposits and work already completed are non-refundable.
              </p>
            </div>
          </section>

          {/* Warranties and Disclaimers */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Warranties and Disclaimers</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Warranty</h3>
                <p className="text-gray-700 leading-relaxed">
                  We warrant that our services will be performed in a professional and workmanlike manner. Any warranty 
                  claims must be made within 30 days of project completion.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                  OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR 
                  IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TARA INFOTECH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY 
              OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Tara Infotech and its officers, directors, employees, and 
              agents from any claims, liabilities, damages, losses, and expenses arising out of or related to your use of 
              our services or violation of these Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause, 
              with or without notice. Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your right to use our services will immediately cease</li>
              <li>You remain liable for any outstanding payments</li>
              <li>Provisions that should survive termination will remain in effect</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising 
              from these Terms shall be resolved through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation, if negotiation fails</li>
              <li>Binding arbitration or litigation in the appropriate jurisdiction</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by 
              posting the updated Terms on our website. Your continued use of our services after such changes constitutes 
              acceptance of the new Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong>mundratechworks@gmail.com</p>
              <p><strong>Phone:</strong> +91 8866661624</p>
              <p><strong>Address:</strong> Central Bazaar,Navsari</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
