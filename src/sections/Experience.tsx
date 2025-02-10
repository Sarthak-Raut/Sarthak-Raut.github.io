import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <motion.section className="section experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <h1>Experience</h1>
      <p>I have worked on various research and development projects.</p>
    </motion.section>
  );
};


export default Experience;
