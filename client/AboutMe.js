import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div id="meParent">
      <img id="me" src="../public/assets/me.jpg" />
      <div id="meDesc">
        When I'm not building stuff, I enjoy taking pictures, reading, eating
        anything and everything within a 10m radius, and working out. If you
        want to get in touch with me, message me on LinkedIn.
      </div>
    </div>
  );
};

export default AboutMe;
