import React, { useEffect, useState } from "react";

import Confetti from "react-confetti";
const Authscreen = () => {
  const [verified, setVerified] = useState(false);
  const width = window.innerWidth;
  const height = window.innerHeight;
  useEffect(() => {
    setTimeout(() => {
      if (verified) {
        setVerified(false);
      }
    }, 5000);
  }, [verified]);
  return (
    <>
      {verified && <Confetti width={width} height={height} />}
      <div
        className="form-wrapper 
         min-h-screen
         [ p-4 md:p-6 lg:p-8 ]
         [ flex justify-center items-center ] bg-black"
      >
        <div
          className="
               max-w-xl
               rounded-2xl
                w-[40%]
               text-[#1A2421]
               bg-black
               [ p-8 md:p-10 lg:p-10 ]
               border"
        >
          <h1 className="mb-6 uppercase text-yellow-600 font-bold [ text-xl md:text-2xl lg:text-2xl ]">
            NFT-Gating Verification
          </h1>
          <p className="mb-6 [ text-sm text-[#1A2421]/70 text-opacity-50 ] text-blue-300">
            Paste Address for Verification
          </p>

          <label
            for="address"
            className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
          >
            <input
              className="form-input 
              border 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]"
              type="text"
              name="address"
              id="address"
              placeholder="0xcfa0b5...407891"
            />
          </label>

          <button
            className="form-input w-full rounded-lg  text-white focus:outline-none
                   [ p-3 md:p-4 lg:p-4 ] 
                   [ transition-colors duration-500 ] 
                   [ bg-blue-800 hover:bg-blue-700 ] cursor-pointer"
            onClick={() => setVerified(!verified)}
          >
            Verify
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Authscreen;
