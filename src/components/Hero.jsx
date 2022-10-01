import React from "react";

import IntroIllustration from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <section className="w-full ">
      {/* <div className="bg-[hero-pattern]"></div> */}
      <div className="flex md:mx-[10%] mx-[5%] md:flex-row flex-col md:items-center">
        <div className="">
          <h1 className="font-bold md:text-5xl text-3xl ">
            Bring everyone together to build better products.
          </h1>
          <p className="py-4 md:w-[75%]">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="mt-4">Get Started</button>
        </div>
        <img className="max-w-[100%]" src={IntroIllustration} alt="" />
      </div>
    </section>
  );
};

export default Hero;
