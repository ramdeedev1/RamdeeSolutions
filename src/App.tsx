import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Statistics />
      <CTA />
    </div>
  );
}

export default App;
