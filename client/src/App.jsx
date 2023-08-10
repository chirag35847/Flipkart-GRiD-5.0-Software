import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import BackGradients from './components/BackGradients';
import Faq from './components/Faq';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Info from './components/Info';
import Top from './components/Top';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className='-z-30 back-light transition-all'>
      <Top/>
      <NavBar/>
      <Home/>
      <Features/>
      <About/>
      {/* <Faq/>
      <Solutions/> */}
      
      {/* <BackGradients/> */}
      {/* <div id="test-space" className="h-[5000px]"></div> */}
      <Footer/>
    </div>
  )
}

export default App;
