import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manage from "./components/Manage";
import Testimonies from "./components/Testimonies";

export default function App() {
  return (
    <div className=" bg-[url('/src/assets/bg-tablet-pattern.svg')] bg-no-repeat lg:bg-[right_-10rem_top_-10rem] bg-[right_-3rem_top_-5rem] lg:bg-auto bg-contain">
      <Header />
      <section className="bg-[url('/src/assets/bg-tablet-pattern.svg')] bg-no-repeat lg:bg-[left_-35rem_bottom_10rem] bg-[right_-15rem_top_20rem] lg:bg-auto bg-contain">
        <Hero />
        <Manage />
        <Testimonies />
      </section>
      <Footer />
    </div>
  );
}
