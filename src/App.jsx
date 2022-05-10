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
      {/* <Loader color='#000' duration='2.5s' delay='2s' /> */}
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
