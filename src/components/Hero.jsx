import React from "react";

import IntroIllustration from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <section className="w-full py-8 ">
      {/* <div className="bg-[hero-pattern]"></div> */}
      <div className="flex flex-col-reverse md:mx-[10%] mx-[5%] md:flex-row md:items-center">
        <div className="text-center md:text-left">
          <h1 className="md:text-5xl text-4xl">
            Bring everyone together to build better products.
          </h1>
          <p className="py-6 md:w-[70%] text-lg md:text-base">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button>Get Started</button>
        </div>
        <img className="w-[100%]" src={IntroIllustration} alt="" />
      </div>
    </section>
  );
};

export default Hero;
