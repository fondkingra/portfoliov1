import React from "react";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="about-container">
      {/* Animated Title */}
      <motion.h1 
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Animated Description */}
      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hello! I'm <b>Ashwin</b>, a passionate **Computer Vision Engineer** with experience in AI, machine learning, and web development.
        I love solving real-world problems using technology and constantly strive to learn new things.
      </motion.p>

      {/* Skills Section */}
      <motion.div 
        className="skills-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Skills</h2>
        <ul>
          <li>👁️‍🗨️ Computer Vision (OpenCV, Deep Learning)</li>
          <li>💻 Web Development (React, Node.js)</li>
          <li>📊 Data Science & AI</li>
          <li>📡 IoT & Embedded Systems</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
