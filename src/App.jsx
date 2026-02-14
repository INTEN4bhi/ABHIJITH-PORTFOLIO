import Navbar from "./components/Navbar";
import IntroLoader from "./components/IntroLoader";
import ParticlesBg from "./components/ParticlesBg";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Skills from "./sections/Skills";
import Tools from "./sections/Tools";
import Certifications from "./sections/Certifications";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="bg-bg min-h-screen relative">
      <ParticlesBg />
      <IntroLoader />

      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />

      {/* ✅ TOOLS SECTION ADDED HERE */}
      <Tools />

      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
