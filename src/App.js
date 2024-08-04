import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <Hero />
      <div className="flex flex-col lg:flex-row justify-between pt-14 bg-[#f1f0eb] text-black lg:h-[50vh] h-[100vh]">
        {/* Experience section */}
        <Experience />
        {/* Skills section */}
        <Skills />
      </div>
      {/* Projects section */}
      <Projects />
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
