import "./App.css";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
