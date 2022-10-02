import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manage from "./components/Manage";
import Testimonies from "./components/Testimonies";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Manage />
      <Testimonies />
    </div>
  );
}
