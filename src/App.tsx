import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div data-motion="on" className="container">
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
