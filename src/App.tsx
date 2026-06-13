import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformMarquee from './components/PlatformMarquee';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import AIContentPreview from './components/AIContentPreview';
import Features from './components/Features';
import Personas from './components/Personas';
import Trust from './components/Trust';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PlatformMarquee />
      <SocialProof />
      <HowItWorks />
      <AIContentPreview />
      <Features />
      <Personas />
      <Trust />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
