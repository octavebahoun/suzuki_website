import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="bg-premium-dark min-h-screen text-white selection:bg-red-600 selection:text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
