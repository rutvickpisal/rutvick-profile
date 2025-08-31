const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white backdrop-blur-sm shadow z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-4 px-4 md:px-6">
        <a href="#" className="text-xl font-bold text-blue-400 mb-2 md:mb-0">Rutvick</a>
        <div className="flex flex-col md:flex-row justify-center flex-1 space-y-2 md:space-y-0 md:space-x-6 font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;