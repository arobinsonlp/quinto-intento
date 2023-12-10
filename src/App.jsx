import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";
import { LangProvider } from "./context/LangContext";
import KonamiCodeListener from "./components/KonamiCodeListener";
// import Form from './components/Form';

function App() {
  return (
    <>
      <LangProvider>
        <main className='bg-gradient-to-b from-[#22162b] to-[#682c58]'>
          <Navbar />
          <Home />
          <About />
          <KonamiCodeListener />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </main>
      </LangProvider>
    </>
  );
}

export default App;
