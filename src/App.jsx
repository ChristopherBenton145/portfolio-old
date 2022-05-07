import Loader from './components/Loader/Loader';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <div className='app'>
      <Loader color='#000' duration='2.5s' delay='2s' />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
