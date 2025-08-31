import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white backdrop-blur-sm shadow z-20">
  <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
    <a href="#" className="text-xl font-bold text-blue-400">Rutvick</a>
    {/* Hamburger for mobile */}
    <button
      className="md:hidden text-blue-600 text-2xl focus:outline-none"
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
    >
      {open ? "✕" : "☰"}
    </button>
    {/* Links */}
    <div
      className={`${
        open ? "flex" : "hidden"
      } flex-col absolute top-full left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:w-auto md:bg-transparent md:shadow-none space-y-2 md:space-y-0 md:space-x-6 font-medium text-gray-700 z-30`}
    >
      <a href="#" className="hover:text-blue-600 transition px-4 py-2">About</a>
      <a href="#experience" className="hover:text-blue-600 transition px-4 py-2">Experience</a>
      <a href="#projects" className="hover:text-blue-600 transition px-4 py-2">Projects</a>
      <a href="#contact" className="hover:text-blue-600 transition px-4 py-2">Contact</a>
    </div>
  </div>
</nav>
  );
};
export default Navbar;