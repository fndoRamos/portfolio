import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import JsLogo from "../assets/javascript.png"
import ReactLogo from "../assets/react.png"
import NodeJsLogo from "../assets/nodeJS.png"

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
              <button className="btn btn-sm">View all projects</button>
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
              {/* pretitle */}
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">Project title</span>
              </div>
              {/* title */}
              <div className="absolute z-50 flex transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="mx-2">
                  <img className="w-auto h-8 rounded-full" src={JsLogo} alt="javascript" />
                </span>
                <span className="mx-2">
                <img className="w-auto h-8 rounded-full" src={ReactLogo} alt="react" />
                </span>
                <span className="mx-2">
                <img className="w-auto h-8 rounded-full" src={NodeJsLogo} alt="nodejs" />
                </span>
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
