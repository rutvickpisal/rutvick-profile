import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import devImage from "../assets/dev6.png"; // Replace with your illustration

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 overflow-hidden">
      {/* Waves Background */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full h-24 sm:h-32 md:h-40 overflow-hidden">
          {/* Back wave (slower, lighter) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-[200%] h-full animate-wave-slow opacity-70"
          >
            <path
              d="M0,49 C150,149 350,-49 600,49 C850,149 1050,-49 1200,49 L1200,120 L0,120Z"
              fill="#e0f2fe"
            ></path>
          </svg>
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
  className="absolute top-0 left-0 w-[200%] h-full animate-wave-mid opacity-80"
>
  <path
    d="M0,39 C200,129 400,-39 600,39 C800,129 1000,-39 1200,39 L1200,120 L0,120Z"
    fill="#bae6fd"  // Tailwind's sky-200
  ></path>
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
  className="absolute top-0 left-[100%] w-[200%] h-full animate-wave-mid opacity-80"
>
  <path
    d="M0,39 C200,129 400,-39 600,39 C800,129 1000,-39 1200,39 L1200,120 L0,120Z"
    fill="#bae6fd"
  ></path>
</svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-[100%] w-[200%] h-full animate-wave-slow opacity-70"
          >
            <path
              d="M0,49 C150,149 350,-49 600,49 C850,149 1050,-49 1200,49 L1200,120 L0,120Z"
              fill="#e0f2fe"
            ></path>
          </svg>

          {/* Front wave (faster, solid white) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-[200%] h-full animate-wave-fast"
          >
            <path
              d="M0,49 C150,149 350,-49 600,49 C850,149 1050,-49 1200,49 L1200,120 L0,120Z"
              fill="#ffffff"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-[100%] w-[200%] h-full animate-wave-fast"
          >
            <path
              d="M0,49 C150,149 350,-49 600,49 C850,149 1050,-49 1200,49 L1200,120 L0,120Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-2 md:px-6 relative z-10">
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="absolute -z-10 w-80 h-80 bg-cyan-400 rounded-full blur-2xl opacity-0"></div>
  <motion.img
    src={devImage}
    alt="Developer"
    className="w-[500px] object-contain"
  style={{
    mixBlendMode: "multiply", // or 'darken'
    opacity: 1,
    WebkitMaskImage: "linear-gradient(black, black)", // ensures alpha respected
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
  }}
    initial={{ y: 0 }}
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
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
              loop={3}
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
            href="rutvick_resume.pdf"
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
