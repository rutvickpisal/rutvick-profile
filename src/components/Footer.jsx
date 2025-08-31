import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-lg font-semibold mb-4">Connect with me</h2>

        {/* Socials Row */}
        <div className="flex justify-center gap-6 mb-6">
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/RutvickPisal/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-yellow-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="w-6 h-6"
            >
              <path
                fill="black"
                d="M615.7 835.8L410.3 630.5l-91.2-91.2 91.2-91.2L615.7 243l59.7 59.7-214.3 214.3 214.3 214.3-59.7 59.5z"
              />
              <path
                fill="#FFA116"
                d="M801.4 531.2c0 5.4-1.8 10.8-6.1 15.2-8.1 8.1-22.3 8.1-30.4 0L634.3 416.1c-8.1-8.1-8.1-22.3 0-30.4 8.1-8.1 22.3-8.1 30.4 0l130.5 130.5c4.5 4.5 6.2 9.9 6.2 15z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rutvick-pisal-6b8226189/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-500 transition"
          >
            <Linkedin className="w-6 h-6 text-blue-700" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rutvickpisal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-300 transition"
          >
            <Github className="w-6 h-6 text-black" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+91 8308871492</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>rutvick.pisal@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
