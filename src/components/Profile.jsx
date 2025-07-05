import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { Download, ExternalLink } from "lucide-react";

import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-gray-600 bg-gradient-to-br from-slate-50 via-white to-blue-50 body-font pt-16 lg:min-h-75vh"
    >
      <div className="p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-orange-100 rounded-3xl transform rotate-3 animate-pulse"></div>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative bg-white p-2 rounded-3xl shadow-2xl"
          >
            <img
              className="object-cover object-center border-2 border-white pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200 w-full h-full"
              alt={ProfileData.name}
              src={ProfileData.img}
            />
          </motion.div>
        </motion.div>

        {/* Profile Info */}
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          <SocialHandles textColor="black" />

          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-black"
          >
            👋 Hello I am{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {ProfileData.name}
            </span>
          </h2>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl text-black mb-4 font-medium lg:inline-block"
          >
            &nbsp;
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>

          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="false"
              className="mb-2 text-black text-lg md:text-xl leading-relaxed"
            >
              {item}
            </p>
          ))}

          {/* CTA Buttons */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-4 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
          >
            {/* Resume Download Button */}
            <a href={ProfileData.resume} download target="_blank" rel="noopener noreferrer">
              <button className="group leading-none cursor-pointer text-whitesmoke bg-black border hover:border-black hover:bg-whitesmoke hover:text-black py-3 px-4 rounded-lg font-medium text-lg flex items-center gap-2">
                Resume
                <Download className="w-5 h-5 text-whitesmoke group-hover:text-black transition-colors duration-200" />
              </button>
            </a>

            {/* Hire Me Scroll Button */}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              className="cursor-pointer"
            >
              <button className="group leading-none cursor-pointer text-black bg-white border border-black hover:border-black hover:bg-black hover:text-white py-3 px-4 rounded-lg font-medium text-lg flex items-center gap-2">
                Hire Me
                <ExternalLink className="w-5 h-5 text-black group-hover:text-white transition-colors duration-200" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Wave />
    </section>
  );
};

export default Profile;
