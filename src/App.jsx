import Loader from './components/Loader/Loader';
import Header from './sections/Header/Header';

function App() {
  return (
    <>
      <Loader color='#000' duration='2.5s' delay='2s' />
      <Header />
    </>
  );
}

export default App;
