import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-800 text-white py-8 mt-5 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-normal text-blue-400 mt-10">Decentra-Shop</h2>
          <p className="mt-2">IIIT Dharwad Campus, Ittigatti Road,</p>
          <p>Near Sattur Colony, Dharwad 580009</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="mt-2 flex space-x-4">
            <a href="mailto:Surakshaonepvt@gmail.com?Subject=Regarding Disease">
              <MdMarkEmailRead className="w-6 h-6 text-indigo-500" />
            </a>
            <a href="https://www.linkedin.com/company/surakshaone/">
              <BsLinkedin className="w-5 h-5 text-indigo-500 mx-3" />
            </a>
            <a href="https://www.facebook.com/surakshaone?mibextid=ZbWKwL">
              <BsFacebook className="w-5 h-5 text-indigo-500 mx-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Decentra-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
