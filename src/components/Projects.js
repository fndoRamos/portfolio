import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// images
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
import ExpressIcon from "../assets/icons-tech-stack/express-icon.png";
import DaisyuiIcon from "../assets/icons-tech-stack/daisyui-icon.png";
import HandlebarsIcon from "../assets/icons-tech-stack/handlebars-icon.png";
import BootstrapIcon from "../assets/icons-tech-stack/bootstrap-icon.png";
// icon
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

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
            className="flex flex-col justify-between flex-1 mb-10 gap-y-12 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="leading-tight h2">Projects.</h2>
              <p className="max-w-sm mb-16 text-xl">
                The following projects serve as demonstrations of my skills and
                experience. Accompanying each project is a short description,
                along with direct links to code repositories and live
                demonstrations.
              </p>
            </div>
            {/* project1 */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/80"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img1}
                alt="project1"
              />
              {/* title */}
              <div
                className="absolute z-40 flex justify-between items-center transition-all duration-500 w-[180px] -top-full left-2 
              group-hover:top-6 md:w-[720px] lg:w-[430px] xl:w-[550px]"
              >
                <span className="mr-4 text-xl md:text-3xl lg:text-2xl xl:text-3xl text-gradient">
                  DiveBook
                </span>
                <div className="flex items-center">
                  <div className="mx-2 my-1 icon-box w-[35px] h-[35px]">
                    <div className="icon-content">
                      <a
                        href="https://divebook.adaptable.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div className="mx-2 my-1 icon-box w-[35px] h-[35px]">
                    <div className="icon-content">
                      <a
                        href="https://github.com/project-2-diving-book/diving-book"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <BsGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* description */}
              <div className="absolute z-40 hidden transition-all duration-700 -top-full left-2 group-hover:top-16 xs:block">
                <span className="secondary lg:text-sm xl:text-lg text-[#d0d8d0] font-semibold">
                  Social-media platform dedicated to divers and sea lovers where
                  they can log and share their experiences. This is a full stack
                  project including full CRUD, login, map functionalities and
                  much more!
                </span>
              </div>
              {/* tech stack */}
              <div
                className="absolute z-40 xs:flex justify-between items-center transition-all duration-1000 bg-black/50 h-[40px] -bottom-full left-2 
                group-hover:bottom-6 lg:group-hover:bottom-2 xl:group-hover:bottom-6 rounded-full hidden"
              >
                <img
                  src={JavascriptIcon}
                  alt="JavaScript"
                  className="w-auto h-8 mx-4"
                  title="JavaScript"
                />
                <img
                  src={MongoDBIcon}
                  alt="MongoDB"
                  className="w-auto h-8 mx-4"
                  title="MongoDB"
                />
                <img
                  src={NodeJSIcon}
                  alt="NodeJS"
                  className="w-auto h-8 mx-4"
                  title="NodeJS"
                />
                <img
                  src={ExpressIcon}
                  alt="Express"
                  className="w-auto h-8 mx-4"
                  title="Express"
                />
                <img
                  src={HandlebarsIcon}
                  alt="Tailwind"
                  className="w-auto h-8 mx-4"
                  title="Handlebars"
                />
                <img
                  src={BootstrapIcon}
                  alt="DaisyUI"
                  className="w-auto h-8 mx-4"
                  title="Bootstrap"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-between flex-1 gap-y-10"
          >
            {/* project2 */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/80"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img2}
                alt="project1"
              />
              {/* title */}
              <div
                className="absolute z-40 flex justify-between items-center transition-all duration-500 w-[180px] -top-full left-2 
              group-hover:top-6 md:w-[720px] lg:w-[430px] xl:w-[550px]"
              >
                <span className="mr-4 text-xl md:text-3xl lg:text-2xl xl:text-3xl text-gradient">
                  RootSeeker
                </span>
                <div className="flex items-center">
                  <div className="mx-2 my-1 icon-box w-[35px] h-[35px]">
                    <div className="icon-content">
                      <a
                        href="https://rootseeker.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div className="mx-2 my-1 icon-box w-[35px] h-[35px]">
                    <div className="icon-content">
                      <a
                        href="https://github.com/RootSeeker-fullstack-app/rootseeker-client"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <BsGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* description */}
              <div className="absolute z-40 hidden transition-all duration-700 -top-full left-2 group-hover:top-16 xs:block">
                <span className="secondary lg:text-sm xl:text-lg text-[#d0d8d0] font-semibold">
                  Website for outdoor-activities where users
                  can search and book services or become hosts and offer them.
                  Full stack web application using MERN technologies. It is responsive
                  and supports CRUD operations.
                </span>
              </div>
              {/* tech stack */}
              <div
                className="absolute z-40 xs:flex justify-between items-center transition-all duration-1000 bg-black/50 h-[40px] -bottom-full left-2 
                group-hover:bottom-6 lg:group-hover:bottom-2 xl:group-hover:bottom-6 rounded-full hidden"
              >
                <img
                  src={JavascriptIcon}
                  alt="JavaScript"
                  className="w-auto h-8 mx-4"
                  title="JavaScript"
                />
                <img
                  src={ReactIcon}
                  alt="React"
                  className="w-auto h-8 mx-4"
                  title="React"
                />
                <img
                  src={MongoDBIcon}
                  alt="MongoDB"
                  className="w-auto h-8 mx-4"
                  title="MongoDB"
                />
                <img
                  src={NodeJSIcon}
                  alt="NodeJS"
                  className="w-auto h-8 mx-4"
                  title="NodeJS"
                />
                <img
                  src={ExpressIcon}
                  alt="Express"
                  className="w-auto h-8 mx-4"
                  title="Express"
                />
                <img
                  src={TailwindIcon}
                  alt="Tailwind"
                  className="w-auto h-8 mx-4"
                  title="Tailwind"
                />
                <img
                  src={DaisyuiIcon}
                  alt="DaisyUI"
                  className="w-auto h-8 mx-4"
                  title="DaisyUI"
                />
              </div>
            </div>
            {/* project3 */}
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              {/* overlay */}
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/80"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img3}
                alt="project1"
              />
              {/* title */}
              <div
                className="absolute z-40 flex justify-between items-center transition-all duration-500 w-[180px] -top-full left-2 
              group-hover:top-6 md:w-[720px] lg:w-[430px] xl:w-[550px]"
              >
                <span className="mr-4 text-xl md:text-3xl lg:text-2xl xl:text-3xl text-gradient">
                  SpaceScape
                </span>
                <div className="flex items-center">
                  <div className="mx-2 my-1 icon-box w-[35px] h-[35px]">
                    <div className="icon-content">
                      <a
                        href="https://fndoramos.github.io/SpaceSurvival"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div className="mx-2 my-1 icon-box w-[35px] h-[35px]">
                    <div className="icon-content">
                      <a
                        href="https://github.com/fndoRamos/SpaceSurvival"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <BsGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* description */}
              <div className="absolute z-40 hidden transition-all duration-700 -top-full left-2 group-hover:top-16 xs:block">
                <span className="secondary lg:text-sm xl:text-lg text-[#d0d8d0] font-semibold">
                  Single player browser game where the goal is to avoid
                  obstacles for as long as you can to get the highest score. The
                  project uses DOM manipulation and Object Oriented Programming.
                </span>
              </div>
              {/* tech stack */}
              <div
                className="absolute z-40 xs:flex justify-between items-center transition-all duration-1000 bg-black/50 h-[40px] max-w-[380px] -bottom-full left-2 
                group-hover:bottom-6 lg:group-hover:bottom-2 xl:group-hover:bottom-6 rounded-full hidden"
              >
                <img
                  src={JavascriptIcon}
                  alt="JavaScript"
                  className="w-auto h-8 mx-4"
                  title="JavaScript"
                />
                <img
                  src={HtmlIcon}
                  alt="React"
                  className="w-auto h-8 mx-4"
                  title="HTML"
                />
                <img
                  src={CssIcon}
                  alt="MongoDB"
                  className="w-auto h-8 mx-4"
                  title="CSS"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
