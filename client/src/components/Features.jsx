import React from "react";
import {AiOutlineFileDone} from "react-icons/ai"
import {BsCheck2Circle} from "react-icons/bs";
import {TbCashOff} from "react-icons/tb";
const Features = () => {
  return (
    <>
      <div className="sm:container  flex justify-center items-center flex-col mx-auto ">
      <div className=" container z-10 font-bold uppercase mobile:text-center mobile:w-[100%] txt-main mobile:text-[40px] lg:text-[50px] mobile:flex-col lg:flex-row">
        <span className="txt-light ">&nbsp;Features</span>
      </div>
     
        <div className=" mobile:w-[80%] w-full">
          <div  id="features" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20  pb-10 lg:pt-40 lg:pb-20">
            <div className="p-6 bg-gray-100  rounded-lg">
              <div className="mb-3">
                <svg
                  className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-md font-semibold mb-3">
                Low-Interest Personal Health Loans
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Access affordable financing options for medical treatments
                through our partnership with major banks.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-3">
                <svg
                  className="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Streamlined Loan Application
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Our user-friendly platform simplifies the application process,
                reducing paperwork and minimizing manual errors.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-3">
              <BsCheck2Circle className="w-10 h-10 text-indigo-500" />
               
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Expedited Loan Approval
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Experience prompt loan approvals, ensuring timely access to the
                funds you need for medical expenses.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-3">
                <AiOutlineFileDone className="w-10 h-10 text-indigo-500" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Secure File Sharing
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Your data is protected with advanced encryption, ensuring the
                confidentiality and privacy of your sensitive information.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-3">
                
              <TbCashOff className="w-10 h-10 text-indigo-500" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Cashless Treatment Integration
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Enjoy the convenience of cashless treatment by seamlessly
                coordinating with our partnered hospitals and financial
                institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
