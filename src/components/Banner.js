import React from "react";
import Image from "../assets/image-avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";


const Banner = () => {
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
              <a href="https://linkedin.com/in/fernando-ramos-webdev" target="_blank" rel="noreferrer noopener">
                <FaLinkedin />
              </a>
              <a href="https://github.com/fndoRamos" target="_blank" rel="noreferrer noopener">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="avatar-box hidden lg:flex flex-1 max-w-[400px]"
          >
            <div className="avatar-content">
              <img src={Image} alt="Fernando Ramos" />
              <h2>
                Fernando Ramos
                <br /> <span>Full-Stack Developer</span>
              </h2>
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="p-1 my-8 cursor-pointer btn tbn-sm"
              >
                Contact me!
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
