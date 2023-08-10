import React, { useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
const Home = () => {
  const TEXTS = ["NFTs", "Tokens", "Rewards", "Loyalty", "Transparency", "End-to-End Transactions" ,"Secure-Safe"];
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div
      className="flex text-center justify-center items-center flex-col pt-[120px] "
      id="home"
    >
      <div className="z-10 mb-60 lg:mt-20 mobile:mt-20">
        <div className="font-bold txt-light mobile:text-[40px] lg:text-[64px] flex justify-center items-center flex-col">
          <h1>Seamless Ecommerce Evolution :</h1>
          <TextTransition delay={10} className="mt-5" springConfig={presets.wobbly}>
            <span className="txt-main text-center">
              &nbsp;{TEXTS[index % TEXTS.length]}{" "}
            </span>
          </TextTransition>
        </div>
        <div className="txt-ternary-light capitalize w-[50%] mobile:w-[80%] mx-auto lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
          <div>
        
          </div>
        </div>

        <button className="text-white back-main px-[30px] py-[10px] mt-20 rounded-md text-[15px] hover:bg-blue-400 active:bg-blue-500 transition-all">
          <a href="https://calendly.com/suraksha1/suraksha-one">
            Let's Connect
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
