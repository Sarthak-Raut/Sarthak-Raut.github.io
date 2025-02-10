import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.section
      className="section home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm a Master's student in Computer Science.</p>
    </motion.section>
  );
};

export default Home;
