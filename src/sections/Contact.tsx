import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.section className="section contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <h1>Contact Me</h1>
      <p>Email: example@email.com</p>
      <p>LinkedIn: linkedin.com/in/example</p>
    </motion.section>
  );
};

export default Contact;
