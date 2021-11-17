import './App.scss';
import Header from './components/Header'
import Banner from './components/Banner'
import Portifolio from './components/Portifolio'
import Sobre from './components/Sobre'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
        <Header/>
        <Banner />
        <Portifolio />
        <Sobre />
        <Footer />
    </div>
  );
}

export default App;
