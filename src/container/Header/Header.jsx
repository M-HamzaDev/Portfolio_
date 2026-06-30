/* eslint-disable react/jsx-indent */
/* eslint-disable quotes */
import React from 'react';
import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
import './Header.scss';
import Amazon from '../../assets/profile-pic (1).png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import { IconCloud } from '../../components/hero-section';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };
const iconSlugs = [
  // MERN Stack
  "react",
  "nextdotjs",
  "nodedotjs",
  "express",
  "mongodb",
  "graphql",
  "redux",
  "typescript",
  "javascript",

  // Frontend Development
  "html5",
  "css3",
  "sass",
  "bootstrap",
  "tailwindcss",
  "materialui",

  // Backend & Databases
  "mysql",
  "postgresql",
  "firebase",
  "prisma",
  "sequelize",

  // Mobile Development
  "flutter",
  "android",
  "ios",

  // E-commerce & CMS
  "woocommerce",
  "shopify",
  "wordpress",
  "strapi",
  "contentful",

  // DevOps & Cloud
  "docker",
  "kubernetes",
  "amazonaws",
  "googlecloud",
  "microsoftazure",

  // Version Control & CI/CD
  "github",
  "git",

  // Testing Tools
  "jest",
  "selenium",

  // Payment Gateways
  "stripe",
  "paypal",

  // Tools & Utilities
  "npm",
  "yarn",
  "webpack",
  "babel",
  "eslint",
  "prettier",
  "vite",
  "postman",

  // UI/UX Design
  "figma",
  "sketch",

  // General Purpose Libraries
  "chartdotjs",

  // Authentication & Security
  "auth0",
  "passport",
  "jsonwebtokens",

  // Mobile-related libraries
  "expo",
  "capacitor",

  // Miscellaneous
  "heroku",
  "netlify",
  "vercel",
  "digitalocean",
  "nginx",
];

const Header = () => (
  <div className="app__header app__flex" id="home">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Muhammad Hamza</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Software Engineer</p>
          <p className="p-text">Flutter Full Stack Developer</p>
        </div>
      </div>
      <div className="w-right">

        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle profileIMG">
            <img src={Amazon} alt="" />
          </div>{' '}
          <a href="https://www.linkedin.com/in/muhammad-hamza-16ba44269" target="_blank" rel="noreferrer">
            <div className="w-secCircle">
              <img src={linkedin} alt="" />
            </div>
          </a>
          <a href="https://github.com/M-HamzaDev" target="_blank" rel="noreferrer">
            <div className="w-secCircle">
              <img src={github} alt="" />
            </div>
          </a>
        </motion.div>
        {/* background Circles */}
        {/* <div className="w-backCircle blueCircle" />
        <div className="w-backCircle yellowCircle" /> */}
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <IconCloud iconSlugs={iconSlugs} />

      {/* <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
    </motion.div>

    {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.node, images.react, images.next].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}
  </div>
);

export default Header;
