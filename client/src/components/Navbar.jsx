import React,{useState} from "react";
import { Link } from "react-router-dom"; 

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="z-20 mobile:px-10 lg:px-[10vw] lg:text-[18px] lg:h-[80px] mobile:h-[70px] w-[100vw] flex items-center justify-between font-normal shadow-md fixed nav-light txt-light">
        <div className="cursor-pointer w-[60%] md:w-[20%]">
        <img src="./assets/menu-dark.png" alt="Logo" className="w-auto h-10" />
        </div>
        <ul className="lg:justify-around md:justify-between items-center sm:flex hidden mt-2">
          <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
            <a href="#home" style={{fontSize:15}}>Home</a>
          </li>
          <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
            {" "}
            <a href="#features" style={{fontSize:15}}>Features</a>{" "}
          </li>
          <li className="list-none inline-block mx-2 font-medium hover:border-b-2  border-blue-600 cursor-pointer p-2 transition-all">
            <a href="#about" style={{fontSize:15}}>About Us</a>
          </li>
          <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
          <Link to="/market" style={{ fontSize: 15 }}>Marketplace</Link>
          </li>
          <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
            <a href="#faq" style={{fontSize:15}}>FAQs</a>
          </li>
          <li className="list-none inline-block mx-2 hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
            <a href="#userflow" style={{fontSize:15}}>User Flow</a>
          </li>
         

        </ul>
        <button
          type="button"
          onClick={() => setToggle(!toggle)}
          className="justify-end mt-1 items-center sm:hidden w-8"
        >
          <img id="menu" alt="hambuger menu" src="./assets/menu-dark.png" />
        </button>
      </div>

      {toggle?<div className="fixed sm:invisible top-[10.5%] divide-y divide-gray-100 nav-light txt-light shadow w-full">
        <ul className="py-2 text-sm" onClick={()=>setToggle(false)}>
          <li>
            <a
              href="#home"
              className="block px-4 py-1  hover:text-blue-400 focus:text-blue-500"
            >
              Home
            </a>
          </li>
          <li >
            <a
              href="#features"
      
              className="block px-4 py-1  hover:text-blue-400 focus:text-blue-500"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-4 py-1  hover:text-blue-400 focus:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-4 py-1  hover:text-blue-400 focus:text-blue-500"
            >
              Marketplace
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="block px-4 py-1  hover:text-blue-400 focus:text-blue-500"
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>:null}
    </>
  );
};

export default NavBar;
