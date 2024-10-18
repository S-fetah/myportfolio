import "./App.css";
import Projects from "./components/projects/Projects";
import Hero from "./components/Hero/Hero";
import Skills from "./components/skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
