import { Code, Smartphone, Palette, Zap } from 'lucide-react'

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Tara InfoTech?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with creative vision to deliver solutions that exceed expectations and drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-600 transition-colors">
                <feature.icon size={32} className="text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
             Our mission is to empower businesses with innovative digital solutions that fuel growth and efficiency..
            </p>
            <p className="text-gray-600">
We transform ideas into powerful realities through technology, creativity, and excellence.
Every project we deliver drives connection, impact, and lasting success.            </p>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <img src="/mission.webp" alt="Our Mission" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
