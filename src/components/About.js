import React from "react";
// countup
import CountUp from "react-countup";
// Intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
//icons
import JavascriptIcon from "../assets/icons-tech-stack/javascript-icon.png";
import HtmlIcon from "../assets/icons-tech-stack/html-icon.png";
import CssIcon from "../assets/icons-tech-stack/css-icon.png";
import ReactIcon from "../assets/icons-tech-stack/react-icon.png";
import MongoDBIcon from "../assets/icons-tech-stack/mongodb-icon.png";
import NodeJSIcon from "../assets/icons-tech-stack/nodejs-icon.png";
import TailwindIcon from "../assets/icons-tech-stack/tailwind-icon.png";
import GitIcon from "../assets/icons-tech-stack/git-icon.png";
import ExpressIcon from "../assets/icons-tech-stack/express-icon.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col h-[450px] gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contain bg-about bg-no-repeat h-[540px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="mb-4 h3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              ab dolor cupiditate asperiores ipsam.
            </h3>
            <p className="mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus a illum facilis, maxime ipsum commodi laborum
              exercitationem animi neque sapiente pariatur aliquam
              necessitatibus! Consequuntur odio magnam voluptas a accusamus.
              Cum.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col my-10">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="my-8 h2 text-accent"
          >
            Tech stack.
          </motion.h2>
          <div className="flex items-center justify-between my-10">
            <motion.img
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="JavaScript"
              src={JavascriptIcon}
              alt="JavaScript"
            />
            <motion.img
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="React"
              src={ReactIcon}
              alt="ReactIcon"
            />
            <motion.img
              variants={fadeIn("down", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="HTML"
              src={HtmlIcon}
              alt="HtmlIcon"
            />
            <motion.img
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="CSS"
              src={CssIcon}
              alt="CssIcon"
            />
            <motion.img
              variants={fadeIn("down", 1.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="MongoDB"
              src={MongoDBIcon}
              alt="MongoDBIcon"
            />
            <motion.img
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="Express"
              src={ExpressIcon}
              alt="ExpressIcon"
            />
            <motion.img
              variants={fadeIn("down", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="NodeJS"
              src={NodeJSIcon}
              alt="NodeJSIcon"
            />
            <motion.img
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="Tailwind"
              src={TailwindIcon}
              alt="TailwindIcon"
            />
            <motion.img
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-auto mx-4 h-14 animate-bounce"
              title="Git"
              src={GitIcon}
              alt="GitIcon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
