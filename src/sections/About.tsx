import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section className="section about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <h1>About Me</h1>
      <p>I am passionate about software development and AI research.</p>
    </motion.section>
  );
};

export default About;
