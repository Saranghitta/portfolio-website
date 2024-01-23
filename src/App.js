import './App.css';
import Nav from "./components/Nav.js"
import Header from './components/Header.js';
import Toolkit from './components/Toolkit.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Toolkit/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;