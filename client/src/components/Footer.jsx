// import React from "react";
// import { MdAlternateEmail } from "react-icons/md";
// import { BsLinkedin,BsFacebook } from "react-icons/bs";
// import {MdMarkEmailRead} from "react-icons/md";
// const Footer = () => {
//   return (
//     <>
//       <div>
//         <div className="container px-5 py-8 flex flex-wrap mx-auto items-start">

//           <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
//             <a href="mailto:Surakshaonepvt@gmail.com?Subject=Regarding Disease">
//               <MdMarkEmailRead className="w-6 h-6 text-indigo-500" />
//             </a>
//             <a href="https://www.linkedin.com/company/surakshaone/">
//               <BsLinkedin className="w-5 h-5 text-indigo-500 mx-3" />
//             </a>{" "}
//             <a href="https://www.facebook.com/surakshaone?mibextid=ZbWKwL">
//               <BsFacebook className="w-5 h-5 text-indigo-500 mx-1" />
//             </a>{" "}
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">CoinZ</h2>
          <p className="mt-2">1234 Ecommerce Street</p>
          <p>New York, NY 12345</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Customer Service</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Shipping Information</a>
            </li>
            <li>
              <a href="#">Returns & Exchanges</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="mt-2 flex space-x-4">
            <a href="mailto:Surakshaonepvt@gmail.com?Subject=Regarding Disease">
              <MdMarkEmailRead className="w-6 h-6 text-indigo-500" />
            </a>
            <a href="https://www.linkedin.com/company/surakshaone/">
              <BsLinkedin className="w-5 h-5 text-indigo-500 mx-3" />
            </a>{" "}
            <a href="https://www.facebook.com/surakshaone?mibextid=ZbWKwL">
              <BsFacebook className="w-5 h-5 text-indigo-500 mx-1" />
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
