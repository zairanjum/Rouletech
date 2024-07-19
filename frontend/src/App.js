import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Textform from './Components/Textform';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Navbar Tittle='Roulettech Inc Assignment' AboutText='About' HomeText='Home' />
      <Header />
      <div className="container">
      <Projects/>
        <Skills />
      </div>
      <Counter />
       <Textform />
       <Footer />
    </div>
  );
}

export default App;
