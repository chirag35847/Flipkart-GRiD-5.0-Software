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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import RoadMap from './components/RoadMap';

function App() {
  return (
    <div className='-z-30 back-light transition-all'>
    <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <Top/>
      <NavBar/>
      <Home/>
      <Features/>
      <About/>
      {/* <Faq/> */}
      <Solutions/>
      <Footer/>
      {/* <BackGradients/>
      <div id="test-space" className="h-[5000px]"></div> */}
     
    </div>
  )
}

export default App;
