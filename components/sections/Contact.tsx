"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          {/* <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">💬 Let's Talk</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have an idea or project in mind? We&apos;re here to turn your vision into
            reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-300 h-full relative overflow-hidden group">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-1.5 h-8 bg-gradient-primary rounded-full mr-3"></span>
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-all placeholder-gray-400 hover:border-gray-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl flex items-start space-x-3 animate-fade-in ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <p
                      className={`text-sm ${
                        submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white py-4 px-6 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-secondary"></div>
            <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity"></div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1.5 h-8 bg-gradient-secondary rounded-full mr-3"></span>
                  Contact Information
                </h3>
                <p className="text-gray-600 max-w-md leading-relaxed">
                  We&apos;re always happy to connect. Reach out using any of the
                  methods below — our team will respond promptly.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Email",
                    icon: Mail,
                    details: ["tarasoftwareworks@gmail.com"],
                  },
                  {
                    title: "Phone",
                    icon: Phone,
                    details: ["+91 8866661624"],
                  },
                  {
                    title: "Address",
                    icon: MapPin,
                    details: ["Central Bazar, Navsari, Gujarat, India"],
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group/item">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <item.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((d, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5 Working Days Statement, and Notes */}
            <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-6 border border-primary-100 shadow-lg hover:shadow-xl transition-all mt-6 relative z-10">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">📌</span>
                Important Notes
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <p className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-0.5">•</span>
                  <span>We are available 5 working days a week (Monday to Friday).</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-0.5">•</span>
                  <span>For prompt assistance, please expect a reply within 24 hours during working days.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-0.5">•</span>
                  <span>All information submitted is protected and confidential.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-0.5">•</span>
                  <span>For career opportunities, please email your resume to{" "}
                  <span className="font-semibold text-primary-600">hr@tarainfotech.com</span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
