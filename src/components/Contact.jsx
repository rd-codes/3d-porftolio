import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// import "dotenv/config";
// require("dotenv").config();

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //initialize emailJs with public key
    emailjs.init("SJCz1K8O8TE4wo2ho");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // log the get in touch attempt
    console.log('attempting to send email with data:', form)
    
    emailjs
      .send(
        "service_3h3tixj",
        "template_biwgv5h",
        {
         from_name: form.from_name,
         reply_to: form.from_email,
         from_email: form.from_email,   
         message: form.message,
         to_name: "Rudolph",
         to_email: "rdbhembe@gmail.com",
        },
        "SJCz1K8O8TE4wo2ho"
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          console.log(form.from_email)
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.error('FAILED...',error);
          setLoading(false);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={styles.sectionHeadText}>Get In Touch.</h3>
        
        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <p>Feel free to reach out for collaborations, opportunities, or just a friendly chat!</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href="https://github.com/rd-codes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915eff] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rudolph-dumisani/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915eff] transition-colors">
              LinkedIn
            </a>
            <a href="mailto:rdbhembe@gmail.com" className="text-white hover:text-[#915eff] transition-colors">
              Email
            </a>
          </div>
        </div>
        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="What's your Name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-5 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
