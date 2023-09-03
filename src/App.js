import React from "react";
// components
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-hidden bg-no-repeat bg-cover bg-gradient-to-br from-bg1 via-bg2 to-bg3">
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
