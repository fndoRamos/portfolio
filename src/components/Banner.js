import React, { useEffect } from "react";
import { Link } from "react-scroll";
// image
import profileImage from "../assets/image-avatar.jpg";
// icons
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
// animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
// kute
import KUTE from "kute.js";

const Banner = () => {
  // useEffect(() => {
  //   KUTE.fromTo(
  //     "#blob1",
  //     { path: "#blob1" },
  //     { path: "#blob2" },
  //     { repeat: Infinity, duration: 6000, yoyo: true }
  //   ).start();
  // });
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
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
              FERNANDO <span>RAMOS</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={["Full-Stack", 2000, "Developer", 2000]}
                speed={50}
                className="text-accent"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              ullam molestiae ea provident modi ex perspiciatis facere
              doloremque dolor quidem quae alias, nihil hic, dolore, voluptates
              nemo saepe suscipit ducimus!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <div className="icon-box">
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
              <div className="icon-box">
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
            <img src={profileImage} alt="Fernando Ramos" className="h-[500px] w-[auto] blob" />
            </div>
            {/* <svg
              id="visual"
              viewBox="0 0 900 900"
              width="900"
              height="900"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(500.39323758081855 318.60239032528267)">
                <path
                  id="blob1"
                  d="M347.9 -253.1C412.7 -196.1 400.8 -53.7 378.9 104.1C357 261.9 324.9 435 212.6 518.9C100.2 602.7 -92.4 597.3 -228.3 515.9C-364.2 434.4 -443.4 276.8 -478.2 112.5C-513.1 -51.8 -503.6 -222.9 -416.5 -285C-329.4 -347.1 -164.7 -300.1 -11.6 -290.9C141.5 -281.6 283 -310.1 347.9 -253.1"
                  fill="#BB004B"
                ></path>
              </g>
              <g transform="translate(467.18672497063585 438.9885256735413)" style={{visibility: "hidden"}}>
                <path
                  id="blob2"
                  d="M327 -247.1C387.6 -184.7 375.6 -50.9 333.3 52.7C291 156.2 218.4 229.5 122.2 289.5C26 349.6 -93.7 396.4 -159.1 355.4C-224.6 314.3 -235.7 185.3 -288.1 41.3C-340.4 -102.7 -434.1 -261.8 -393 -319.7C-351.8 -377.6 -175.9 -334.3 -21.4 -317.2C133.2 -300.2 266.3 -309.4 327 -247.1"
                  fill="#BB004B"
                ></path>
              </g>
            </svg> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
