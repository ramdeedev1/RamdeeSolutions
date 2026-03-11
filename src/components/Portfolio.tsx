const projects = [
  {
    title: 'Shopbix',
    category: 'Item Sell & Business Listing',
    description: 'Item selling and business listing platform built to help users buy, sell, and discover local businesses.',
    bgImage: 'https://shopbix-admin.happyhomez.in/storage/settings/688dc2aa9c5f62.926327791754120874.svg',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'HappyHomez.in',
    category: 'Properties Platform',
    description: 'Properties platform focused on helping users explore and connect with the right property opportunities.',
    bgImage: 'https://happyhomez.in/images/new-logo.png',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Bricksgenie',
    category: 'Real Estate Agency',
    description: 'Best Property Dealers and real estate agency services in Chandigarh for trusted property guidance.',
    bgImage: 'https://bricksgenie.com/assets/img/65127f2a23da3.png',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
