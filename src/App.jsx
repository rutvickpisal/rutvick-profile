import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
