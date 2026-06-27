/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';
import fullStack from '../../assets/about04.png';
import mobile from '../../assets/about02.png';
import nextjs from '../../assets/about01.png';
import wordpress from '../../assets/about03.png';
import './About.scss';

const abouts = [
  {
    title: 'Full Stack Application Development',
    description: 'Full-stack web development framework that uses MongoDB, Express.js, React, and Node.js to build scalable and efficient web applications',
    imgUrl: fullStack, // Remove the curly braces to correctly import the image
  },
  {
    title: 'Cross-Platform Mobile Applications',
    description: 'Android and iOS application developed using React Native for cross-platform mobile development.',
    imgUrl: mobile,
  },
  {
    title: 'Backend API & Database Development',
    description: 'React and Next.js application is a server-rendered web application framework that allows for efficient rendering of dynamic content with React components.',
    imgUrl: nextjs,
  },
  {
    title: 'State Management & App Architecture',
    description: ' A versatile content management system (CMS) often used for blogging, websites, and e-commerce',
    imgUrl: wordpress,
  },
];

const About = () => (
  <div id="about">
    {/* <h2 className="head-text">I Know that <span>Good App</span> <br />means  <span>Good Business</span></h2> */}

    <div id="testimonials">
      <div className="app__testimonial-item app__flex">
        <div className="app__testimonial-content">
          <p className="p-text">I am Full Stack Flutter Developer with 4+ years of experience in mobile app and backend development. I help startups, businesses, and entrepreneurs build scalable, high-quality applications using Flutter, Node.js, Firebase, Supabase, MongoDB, and MySQL. Experienced in GetX, Provider, Riverpod, and BLoC state management, I create clean, maintainable, and high-performance applications with excellent user experiences. From UI implementation to backend architecture and API development, I can handle the complete development lifecycle. My goal is simple: deliver reliable, scalable, and business-focused solutions that help clients achieve their objectives faster and more efficiently.</p>
        </div>
      </div>
    </div>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: [0, 1], y: [60, 0] }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, delay: index * 0.15, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imgUrl} alt="" />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          {/* <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p> */}
        </motion.div>
      ))}
    </div>
  </div>
);

export default About;
