import React from "react";
import { Link } from "react-scroll";
// image
import profileImage from "../assets/image-avatar.png";
// icons
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
// animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
// cv
import cv from "../assets/cv.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center pt-11"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              FERNANDO
              <br />
              RAMOS
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                sequence={["Full-Stack", 2000, "Web Developer", 2000]}
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-br from-[#b5f77e] to-[#B2C5B2]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-lg mx-auto mb-8 lg:mx-0"
            >
              Hello and welcome! I'm thrilled to share
              with you my journey in the tech world. My name is
              Fernando Ramos, a full stack web developer. Passionate about crafting digital
              experiences that seamlessly blend creativity and functionality.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col lg:flex-row items-center text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <div className="flex my-4 gap-x-4">
                <div className="icon-box w-[35px] h-[35px]">
                  <div className="icon-content">
                    <a
                      href="https://linkedin.com/in/fernando-ramos-webdev"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
                <div className="icon-box w-[35px] h-[35px]">
                  <div className="icon-content">
                    <a
                      href="https://github.com/fndoRamos"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <BsGithub />
                    </a>
                  </div>
                </div>
              </div>
              <Link
                to="contact"
                smooth={true}
                spy={true}
                className="flex items-center justify-center mb-4 cursor-pointer lg:mb-0 btn btn-sm"
              >
                Contact me
              </Link>
              <a
                href={cv}
                download="Fernando Ramos resume"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center cursor-pointer btn btn-sm"
              >
                Download CV
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 justify-center max-w-[400px]"
          >
            <div className="h-[570px] w-[380px] flex justify-center items-center">
              <img
                src={profileImage}
                alt="Fernando Ramos"
                className="h-[500px] w-[auto] blob"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
