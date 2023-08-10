import React from "react";

const Home = () => {
  return (
    <div
      className="flex text-center justify-center items-center   flex-col pt-[120px] "
      id="about"
    >
      <div className="inline z-10 w-[100%] md:container  font-bold uppercase txt-main mobile:text-[40px] lg:text-[50px] mobile:flex-col lg:flex-row">
        <span className="txt-light ">&nbsp;About Us</span>
      </div>
     
      <div className="z-10 mb-40 lg:mt-10 mobile:mt-10">
        <div className="txt-ternary-light capitalize md:w-[60%] mobile:w-[85%] mx-auto lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
          <div>
            We are a fintech-health tech company incorporated in 2022. At
            Suraksha One, we believe that everyone deserves access to quality
            healthcare, regardless of their financial circumstances. We are a
            dedicated team of professionals passionate about bridging the gap in
            healthcare financing and empowering individuals to take control of
            their well-being.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
