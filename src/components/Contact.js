import React, { useRef, useState } from "react";
// emailjs
import emailjs from "@emailjs/browser";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  const ref = useRef();
  const [succcess, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zoxx48n",
        "template_wpbg9k2",
        ref.current,
        "qshiveZWl15GpS-V0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-start flex-1"
          >
            <div>
              <h4 className="mb-2 text-xl font-medium tracking-wide uppercase text-accent">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={ref}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-start flex-1 p-6 pb-24 border rounded-2xl gap-y-6"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
              type="text"
              name="name"
              placeholder="Your name"
            />
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <textarea
              className="w-full py-12 mb-12 transition-all bg-transparent border-b outline-none resize-none placeholder:text-white focus:border-accent"
              name="message"
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
            {succcess && "Your message has been sent, I will get back to you soon!"}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
