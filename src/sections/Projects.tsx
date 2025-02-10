import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <motion.section className="section projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <h1>Projects</h1>
      <p>Here are some of the projects I have worked on.</p>
    </motion.section>
  );
};

export default Projects;
