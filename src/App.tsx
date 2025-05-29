import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import CaseStudies from './components/sections/CaseStudies';
import Testimonials from './components/sections/Testimonials';
import Resume from './components/sections/Resume';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <CaseStudies />
          <Testimonials />
          <Resume />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;