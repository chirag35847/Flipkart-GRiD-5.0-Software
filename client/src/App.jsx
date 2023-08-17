import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import BackGradients from "./components/BackGradients";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Info from "./components/Info";
import Top from "./components/Top";
import About from "./components/About";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RoadMap from "./components/RoadMap";
import { Routes, Route } from "react-router-dom";
import Authscreen from "./components/Authscreen";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import MarketPlace from "./components/MarketPlace";
import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        draggablePercent={60}
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route  exact path="/auth" element={<Authscreen />} />
        <Route
          path="/"
          exact
          element={
            <>
              <div className="-z-30 back-light transition-all">
                <Top />
                <NavBar />
                <Home />
                <Features />
                <About />
                <Solutions />
                <RoadMap />
                <Faq/>
                <Footer />
                <BackGradients />
              </div>
            </>
          }
        />
        <Route  exact path="/dashboard" element={<Dashboard />} />
        <Route  exact path="/marketplace" element={<MarketPlace />} />
        <Route  exact path="/register-user" element={< RegisterUser />} />
      </Routes>
    </>
  );
}

export default App;
