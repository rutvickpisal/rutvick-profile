import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import devImage from "../assets/dev.png"; // Replace with your illustration

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 overflow-hidden">
      {/* Waves Background */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,229.3C840,224,960,160,1080,122.7C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 relative z-10">
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <img src={devImage} alt="Developer" className="w-80 h-auto" />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/2 text-center md:text-left text-white"
        >
          <h1 className="text-5xl font-bold mb-4">
            <Typewriter
              words={["Hey folks,", "I'm Rutvick 👋"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg mb-6">
            With a passion for building seamless web experiences, I specialize
            in React, Tailwind, and modern web technologies to craft clean,
            performant, and engaging applications.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full shadow hover:bg-gray-100 transition"
          >
            ⬇ Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
