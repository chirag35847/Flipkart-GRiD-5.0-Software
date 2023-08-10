import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BsLinkedin,BsFacebook } from "react-icons/bs";
import {MdMarkEmailRead} from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div>
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-start">
          
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a href="mailto:Surakshaonepvt@gmail.com?Subject=Regarding Disease">
              <MdMarkEmailRead className="w-6 h-6 text-indigo-500" />
            </a>
            <a href="https://www.linkedin.com/company/surakshaone/">
              <BsLinkedin className="w-5 h-5 text-indigo-500 mx-3" />
            </a>{" "}
            <a href="https://www.facebook.com/surakshaone?mibextid=ZbWKwL">
              <BsFacebook className="w-5 h-5 text-indigo-500 mx-1" />
            </a>{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
