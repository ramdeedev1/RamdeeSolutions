import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-orange-50/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} />
        <div className={`absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-3xl transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                🚀 Welcome to RamdeeSolution
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Smart IT Solutions For{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              RamdeeSolution helps companies grow with modern web development, cloud solutions, AI integration, and secure IT infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 border border-gray-200">
                <Play className="w-5 h-5 fill-orange-500 text-orange-500" />
                Our Services
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">300+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-2xl opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-2xl opacity-20 animate-pulse delay-75" />

              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/3852589/pexels-photo-3852589.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team collaborating on IT solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Smart IT Solutions
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Transforming businesses with cutting-edge technology and expert guidance
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                      <div className="text-2xl font-bold mb-1">98%</div>
                      <div className="text-xs opacity-90">Success Rate</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-xs opacity-90">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 right-12 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Project</div>
                    <div className="text-sm font-semibold text-gray-900">Completed!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
