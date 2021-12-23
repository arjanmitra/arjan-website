import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div>
      <br />
      <br />
      <h1>
        <motion.div
          id="emoji"
          animate={{ rotate: 360 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          &#128075;
        </motion.div>
        <br />
        I'm glad you're here.
      </h1>
      <h2>In a hurry?</h2>
      <a
        href="public/assets/Arjan Mitra - SE Resume (Dec2021).pdf"
        target="_blank"
      >
        <button id="cv">cv</button>
      </a>
      <br />
      <a href="https://www.linkedin.com/in/arjanmitra" target="_blank">
        <button id="linkedin">
          <img src="public/assets/linkedinlogo.png" />
        </button>
      </a>
      <br />
      <a href="https://github.com/arjanmitra" target="_blank">
        <button id="github">
          <img src="public/assets/GitHub-Mark/PNG/GitHub-Mark-32px.png" />
        </button>
      </a>
      <br />
      <a href="https://www.instagram.com/arjanmitra.tv/" target="_blank">
        <button id="insta">
          <img src="public/assets/instalogo.png" />
        </button>
      </a>
      <div id="normaltext">Otherwise, keep scrolling.</div>
    </div>
  );
};

export default LandingPage;
