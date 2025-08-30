const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 backdrop-blur-sm shadow z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold text-blue-600">Rutvick</div>
        <div className="space-x-6 font-medium text-gray-700">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#resume" className="hover:text-blue-600 transition">Resume</a>
          <a href="#certifications" className="hover:text-blue-600 transition">Certifications</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
