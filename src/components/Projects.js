import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//images
import Img1 from "../assets/dive-book-project-preview.png";
import Img2 from "../assets/rootseeker-project-preview.png";
import Img3 from "../assets/spacescape-project-preview.png";
import JavascriptIcon from "../assets/icons-tech-stack/javascript-icon.png";
import HtmlIcon from "../assets/icons-tech-stack/html-icon.png";
import CssIcon from "../assets/icons-tech-stack/css-icon.png";
import ReactIcon from "../assets/icons-tech-stack/react-icon.png";
import MongoDBIcon from "../assets/icons-tech-stack/mongodb-icon.png";
import NodeJSIcon from "../assets/icons-tech-stack/nodejs-icon.png";
import TailwindIcon from "../assets/icons-tech-stack/tailwind-icon.png";
import GitIcon from "../assets/icons-tech-stack/git-icon.png";
import ExpressIcon from "../assets/icons-tech-stack/express-icon.png";
import DaisyuiIcon from "../assets/icons-tech-stack/daisyui-icon.png";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 mb-10 gap-y-12 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="leading-tight h2 text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut est
                error a veritatis fugiat ipsa dicta et vel deserunt.
              </p>
            </div>
            {/* project1 */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img1}
                alt="project1"
              />
              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">WEB DEV</span>
              </div>
              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-10"
          >
            {/* project2 */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img2}
                alt="project1"
              />
              {/* title */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-56">
                <span className="text-2xl text-gradient">Project title</span>
              </div>
              {/* description */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-48">
                <span className="secondary">Lorem, ipsum dolor sit amet consectetur</span>
              </div>
              {/* tech stack */}
              <div className="absolute z-50 flex justify-between items-center transition-all duration-1000 bg-black/50 h-[40px] -bottom-full left-10 
              group-hover:bottom-6 rounded-full">
                <img src={JavascriptIcon} alt="JavaScript" className="w-auto h-8 mx-4" title="JavaScript" />
                <img src={ReactIcon} alt="React" className="w-auto h-8 mx-4" title="React" />
                <img src={MongoDBIcon} alt="MongoDB" className="w-auto h-8 mx-4" title="MongoDB" />
                <img src={NodeJSIcon} alt="NodeJS" className="w-auto h-8 mx-4" title="NodeJS" />
                <img src={ExpressIcon} alt="Express" className="w-auto h-8 mx-4" title="Express" />
                <img src={TailwindIcon} alt="Tailwind" className="w-auto h-8 mx-4" title="Tailwind" />
                <img src={DaisyuiIcon} alt="DaisyUI" className="w-auto h-8 mx-4" title="DaisyUI" />
              </div>
            </div>
            {/* project3 */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img3}
                alt="project1"
              />
              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">WEB DEV</span>
              </div>
              {/* title */}
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
