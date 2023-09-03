import React, { useRef, useState } from "react";
// emailjs
import emailjs from "@emailjs/browser";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// loader
import loader from "../assets/loader.svg";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// icons
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  const ref = useRef();
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const notify = (option) => {
    if (option === "a") {
      return toast.success(
        `Message sent successfully. I will get bak to you soon!`
      );
    } else if (option === "b") {
      return toast.error(`Error sending message, try again.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSendingEmail(true);

    emailjs
      .sendForm(
        "service_zoxx48n",
        "template_wpbg9k2",
        ref.current,
        "qshiveZWl15GpS-V0"
      )
      .then((result) => {
        // console.log(result.text);
        notify("a");
      })
      .catch((error) => {
        // console.log(error.text);
        notify("b");
      })
      .finally(() => {
        setIsSendingEmail(false);
      });
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
            className="flex flex-col items-start justify-center flex-1"
          >
            <div>
              <h2 className="h2">Get in touch.</h2>
              <h2 className="text-[20px] lg:text-[25px] leading-[46px]">
                Feel free to reach out at <br />
                <span className="font-semibold">fndo.ramos@outlook.com</span>, <br />
                whether it's to discuss a project, <br />
                share ideas, or just geek out about <br />
                the latest in the tech world. Looking <br />
                forward to connecting with you!
              </h2>
            </div>
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
          </motion.div>
          {/* form */}
          <motion.form
            ref={ref}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-start flex-1 p-6 pb-24 border rounded-2xl gap-y-6 bg-[#b2c5b21a]"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-[#1B2727]"
              type="text"
              name="name"
              required={true}
              placeholder="Your name"
            />
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-[#1B2727]"
              type="email"
              name="email"
              required={true}
              placeholder="Your email"
            />
            <textarea
              className="w-full py-12 mb-12 transition-all bg-transparent border-b outline-none resize-none placeholder:text-white focus:border-[#1B2727]"
              name="message"
              placeholder="Your message"
              required={true}
            ></textarea>
            {isSendingEmail ? (
              <button
                type="submit"
                className="flex items-center justify-center btn btn-lg bg-[#B2C5B2] hover:bg-[#B2C5B2] disabled:pointer-events-none"
                disabled
              >
                <img src={loader} alt="loader" className="w-10 h-10 mr-3" />
                Sending email...
              </button>
            ) : (
              <button type="submit" className="btn btn-lg">
                Send message
              </button>
            )}
          </motion.form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        closeButton={true}
        autoClose={6000}
      />
    </section>
  );
};

export default Contact;
