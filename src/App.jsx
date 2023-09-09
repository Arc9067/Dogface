import React, { useEffect, useRef } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";
import useSmoothScroll from "./utils/useSmoothScroll";
import { useAnimation } from "./utils/useAnimations";
import Map from "./Components/Map";

const App = () => {
  useEffect(() => {
    document.querySelectorAll("img").forEach((image) => {
      image.setAttribute("loading", "lazy");
    });
    document.querySelectorAll("a").forEach((a) => {
      a.setAttribute("target", "_blank");
    });
  }, []);
  const containerRef = useRef();
  useSmoothScroll();
  useAnimation(containerRef);
  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative bg-black text-white"
    >
      <Hero />
      <About />
      {/* <Mics /> */}
      {/* <Map /> */}
      <Footer />
    </div>
  );
};

export default App;
