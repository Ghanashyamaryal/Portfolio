import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Navlinks from "../data/navlinks";
import ProfileData from "../data/profile";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="text-black fixed inset-x-0 z-50 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 h-[60px] lg:h-[90px]">

   
      <div className="mx-auto py-2 px-5 flex flex-row justify-between lg:justify-around items-center lg:py-3">
        {/* Logo */}
        <Link
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex justify-center items-center w-fit cursor-pointer"
        >
          <img
            className="h-[35px] lg:h-[58px]  w-auto ml-3 lg:pl-5 object-cover scale-150 bg-gradient-to-br from-slate-50 via-white to-blue-50 "
            src={ProfileData.logo}
            alt={ProfileData.name}
          />

        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:mx-auto lg:flex items-center text-lg gap-12">
          {Navlinks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              activeClass="active"
              className="group relative cursor-pointer text-gray-800 hover:text-black transition-colors duration-300"
            >
              {item.title}
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
              />
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden mr-2">
          <button onClick={toggleMenu} className="p-2 text-black">
            {isMenuOpen ? <MdClose className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop CTA */}
        <button className="hidden lg:flex items-center justify-center w-fit">
        <Link
  to="contact"
  spy={true}
  smooth={true}
  offset={-100}
  duration={750}
  className="leading-none text-white bg-black border border-black hover:bg-white hover:text-black hover:border-black py-3 px-4 rounded-lg font-medium text-lg transition cursor-pointer hidden lg:flex items-center justify-center w-fit"
>
  Let's Talk
</Link>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-lg px-5 pb-4">
            <nav className="flex flex-col gap-y-7 text-xl">
              {Navlinks.map((item) => (
                <Link
                  key={item.title}
                  onClick={() => setIsMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={750}
                  to={item.link}
                  activeClass="active"
                  className="cursor-pointer hover:text-black text-gray-800"
                >
                  {item.title}
                </Link>
              ))}
             <Link
  to="contact"
  spy={true}
  smooth={true}
  offset={-100}
  duration={750}
  className="leading-none text-white bg-black border border-black hover:bg-white hover:text-black hover:border-black py-3 px-4 rounded-lg font-medium text-lg transition cursor-pointer hidden lg:flex items-center justify-center w-fit"
>
  Let's Talk
</Link>
            </nav>
          </div>
        )}
      </div>
      </div>
    </header>
  );
};

export default Navbar;
