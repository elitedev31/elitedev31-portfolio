import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import CaseStudies from './components/sections/CaseStudies';
import Testimonials from './components/sections/Testimonials';
import Resume from './components/sections/Resume';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/common/CustomCursor';
import './styles/global.css';

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        {/* Subtle noise texture with reduced opacity */}
        <div className="fixed inset-0 noise-bg pointer-events-none" />
        
        <Navbar className="glass-effect sticky top-0 z-50" />
        <main className="relative">
          <Hero className="glass-effect" />
          <About className="gradient-bg" />
          <Portfolio className="gradient-bg" />
          <Testimonials className="gradient-bg" />
          <Resume className="glass-effect" />
          <Process className="gradient-bg" />
          <Contact className="glass-effect" />
        </main>
        <Footer className="gradient-bg" />
      </div>
    </Router>
  );
}

export default App;