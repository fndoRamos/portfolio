import React from "react";
// countup
import CountUp from "react-countup";
// Intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col h-screen gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contain bg-about bg-no-repeat h-[640px] mix-blend-lighten bg-top"
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
      </div>
    </section>
  );
};

export default About;
