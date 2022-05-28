import React, { memo } from 'react';
import Loader from './components/Loader/Loader';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Loader duration='3000' delay='1000' />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default memo(App);
