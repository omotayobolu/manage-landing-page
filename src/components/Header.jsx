import Logo from "../assets/logo.svg";
import Hamburger from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  const ToggleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="w-screen h-[100px] relative z-10">
      <div className="lg:px-[10%] px-[5%] flex items-center justify-between h-full w-full">
        <img src={Logo} alt="" />
        <ul className="hidden lg:flex gap-8">
          <li className="text-darkBlue cursor-pointer">Pricing</li>
          <li className="text-darkBlue cursor-pointer">Product</li>
          <li className="text-darkBlue cursor-pointer">About Us</li>
          <li className="text-darkBlue cursor-pointer">Careers</li>
          <li className="text-darkBlue cursor-pointer">Community</li>
        </ul>
        <button className="hidden lg:flex">Get Started</button>
        <div
          className="lg:hidden flex items-center cursor-pointer"
          onClick={ToggleNav}
        >
          {nav ? <img src={Close} alt="" /> : <img src={Hamburger} alt="" />}
        </div>
        {nav && (
          <ul className="absolute text-center  w-screen mt-80 py-4 bg-white drop-shadow-2xl">
            <li className="my-4 text-base font-semibold text-darkBlue">
              Pricing
            </li>
            <li className="my-4 text-base font-semibold text-darkBlue">
              Product
            </li>
            <li className="my-4 text-base font-semibold text-darkBlue">
              About Us
            </li>
            <li className="my-4 text-base font-semibold text-darkBlue">
              Careers
            </li>
            <li className="my-4 text-base font-semibold text-darkBlue">
              Community
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
