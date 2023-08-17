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
import KUTE from "kute.js"

const Banner = () => {
  useEffect(() => {
    KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: Infinity, duration: 3000, yoyo: true }
    ).start();
  })
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
              <div className="avatar-box">
                <div className="avatar-content">
                  <a
                    href="https://linkedin.com/in/fernando-ramos-webdev"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className="avatar-box">
                <div className="avatar-content">
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
            className="hidden lg:flex flex-1 max-w-[400px]"
          >
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(438.6595315915146 323.65384530369823)">
                <path id="blob1"
                  d="M145.2 -142.4C195.2 -95.2 247.6 -47.6 241.5 -6.1C235.4 35.4 170.7 70.7 120.7 106.5C70.7 142.4 35.4 178.7 -8.4 187.1C-52.1 195.4 -104.2 175.8 -146.5 140C-188.8 104.2 -221.4 52.1 -219.2 2.2C-216.9 -47.6 -179.9 -95.2 -137.6 -142.4C-95.2 -189.6 -47.6 -236.3 0 -236.3C47.6 -236.3 95.2 -189.6 145.2 -142.4"
                  fill="#BB004B"
                ></path>
              </g>
              <g transform="translate(485.6055898393938 299.6117870528524)" style={{visibility: "hidden"}}>
                <path id="blob2"
                  d="M158.4 -153.9C188 -128.7 183 -64.3 185.8 2.8C188.7 70 199.3 140 169.7 165C140 190 70 170 10 160C-50 150 -99.9 149.9 -149.9 124.9C-199.9 99.9 -250 50 -259.5 -9.5C-269.1 -69.1 -238.1 -138.1 -188.1 -163.3C-138.1 -188.5 -69.1 -169.7 -2.4 -167.4C64.3 -165 128.7 -179 158.4 -153.9"
                  fill="#BB004B"
                ></path>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
