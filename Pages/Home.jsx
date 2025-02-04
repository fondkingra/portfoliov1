import React from "react";
import meImage from "../src/assets/ash2-Photoroom.png";
import Navbar from "../components/Navbar"; // Import Navbar
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar /> {/* Add Navbar here */}
      <div className="content">
        <img src={meImage} alt="Ash" className="profile-image" />
        <motion.h1
          initial={{ opacity: 0, y: -50 }} // Initial state (hidden and slightly above)
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 1 }} // Animation duration
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.h1
          className="name"
          initial={{ x: "-100vw" }} // Start off-screen to the left
          animate={{ x: "100vw" }} // Move to off-screen to the right
          transition={{
            duration: 7, // Duration of one full cycle
            repeat: Infinity, // Loop infinitely
            repeatType: "loop", // Smooth loop
            ease: "linear", // Linear movement
          }}
        >
          Ashwin Venkatesan
        </motion.h1>
        <p className="tagline">Computer Vision Engineer</p>
      </div>
    </div>
  );
};

export default Home;