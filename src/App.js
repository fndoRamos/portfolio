import React, { useEffect } from "react";
// components
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorOutline.style.display = 'block'

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`
        },
        { duration: 500, fill: "forwards" }
      );
    });

    window.addEventListener("mouseout", () => {
      cursorOutline.style.display = "none";
    });
  }, []);
  return (
    <div className="overflow-hidden bg-no-repeat bg-cover bg-gradient-to-br from-bg1 via-bg2 to-bg3">
      <div className="cursor-outline" data-cursor-outline></div>
      <Banner />
      <Nav />
      <About />
      <Projects />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
