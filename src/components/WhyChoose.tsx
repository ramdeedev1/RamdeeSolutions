import { Award, Lock, Zap, Headphones as HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experienced Developers',
    description: 'Our team of certified professionals brings years of expertise in cutting-edge technologies.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Lock,
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security measures to protect your data and applications at all times.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Zap,
    title: 'Scalable Technology',
    description: 'Build solutions that grow with your business, from startup to enterprise scale.',
    image: 'https://images.pexels.com/photos/3143774/pexels-photo-3143774.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock technical support to keep your systems running smoothly.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose RamdeeSolution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with a team that's committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>

              <div className="p-6">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl blur-lg opacity-20" />
                  <div className="relative w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
