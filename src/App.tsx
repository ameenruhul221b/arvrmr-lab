import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Research from './components/Research';
import Training from './components/Training';
import Future from './components/Future';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Research />
      <Training />
      <Future />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;