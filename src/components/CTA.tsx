import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-orange-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready To Build Your Digital Future?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's transform your ideas into powerful digital solutions. Our team is ready to help you succeed.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button className="group px-8 py-4 bg-white text-purple-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                  Schedule a Call
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-white/90">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>contact@ramdee.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center">
        <div className="max-w-7xl mx-auto px-6 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2024 RamdeeSolution. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
