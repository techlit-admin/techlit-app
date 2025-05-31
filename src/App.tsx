import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QuickAccessButton from "./components/QuickAccessButton";
import Instagram from "./components/Instagram";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Instagram />
      <About />
      <Services />
      <Packages />
      <Portfolio />
      <Contact />
      <Footer />
      <QuickAccessButton />
    </div>
  );
}

export default App;
