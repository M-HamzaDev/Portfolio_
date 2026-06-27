/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
// import p1 from '../../assets/about01.png';
import bridge from '../../assets/Projects/bridge.png';
import lawd from '../../assets/Projects/lawd.png';
import aicity from '../../assets/Projects/aicity.png';
import nft from '../../assets/Projects/nft.png';
import zimo from '../../assets/Projects/zimo.png';
import ecommernce from '../../assets/Projects/Ecommernce.png';
import qzeto from '../../assets/Projects/qzeto.png';
import amer from '../../assets/Projects/Blue And White Modern Responsive Website Development Services Instagram Post.png';
import yllc from '../../assets/Projects/1 (1).png';
import fusco from '../../assets/Projects/1 (2).png';
import Rev from '../../assets/Projects/1 (3).png';
import sub from '../../assets/Projects/1 (4).png';
import nev from '../../assets/Projects/1 (5).png';
import dashboard from '../../assets/Projects/dashboard.png';
// import { urlFor, client } from '../../client';
import './Work.scss';

const works = [
  {
    imgUrl: amer,
    name: ' Libas Collective   ',
    projectLink: 'https://play.google.com/store/apps/details?id=com.libas.libas&hl=en',
    codeLink: 'https://play.google.com/store/apps/details?id=com.libas.libas&hl=en',
    title: 'Libas Collective    ',
    description: 'Libas Collective is a luxury fashion marketplace for authenticated pre-owned designer items at discounted prices. I worked as a Flutter developer, building responsive UI and smooth mobile experience for Android and iOS. My role focused on performance optimization and ensuring a clean, user-friendly interface.',
    tags: ['Mobile Apps', 'All'],
  },
  {
    imgUrl: dashboard,
    name: ' Dashboard Sky - AI Chatbot for Writing',
    projectLink: 'https://play.google.com/store/apps/details?id=com.foresko.sky',
    codeLink: 'https://play.google.com/store/apps/details?id=com.foresko.sky',
    title: 'Dashboard Sky - AI Chatbot for Writing    ',
    description: 'Sky is an AI-powered chatbot and writing assistant for content creation and productivity. I worked as a Full Stack Developer on both frontend and backend development. My role included integrating OpenAI GPT-4 API for AI-powered conversations, content generation. I also developed APIs and optimized the overall application performance.',
    tags: ['AI-Powered Applications', 'Full Stack Applications', 'All'],
  },
  {
    imgUrl: fusco,
    name: ' ECG Practice  ',
    projectLink: 'https://apps.apple.com/il/app/ecg-practice/id6740402133',
    codeLink: 'https://apps.apple.com/il/app/ecg-practice/id6740402133',
    title: 'ECG Practice    ',
    description: 'ECG Practice is a medical learning app designed to help users understand and practice ECG interpretation in an interactive way. I worked as a Flutter developer, building a responsive and smooth mobile interface for iOS and Android. My contribution focused on UI implementation, performance optimization.',
    tags: ['Mobile Apps', 'AI-Powered Applications', 'Firebase & Supabase', 'All'],
  },
  {
    imgUrl: sub,
    name: ' Aditt - Earn Money  ',
    projectLink: 'https://apps.apple.com/us/app/aditt-earn-money/id6748659738',
    codeLink: 'https://apps.apple.com/us/app/aditt-earn-money/id6748659738',
    title: 'Aditt - Earn Money    ',
    description: 'Aditt Earn Money is a fintech app that enables users to earn and withdraw money securely. I worked as a Full Stack Flutter developer using Flutter, Node.js, and MongoDB. My role included payment integration, face verification using Stripe, and secure withdrawal system implementation for safe transactions.',
    tags: ['Full Stack Applications', 'All'],
  },
  {
    imgUrl: nev,
    name: ' Book Jacks  ',
    projectLink: 'https://apps.apple.com/us/app/book-jacks/id6743059958',
    codeLink: 'https://apps.apple.com/us/app/book-jacks/id6743059958',
    title: 'Book Jacks    ',
    description: 'Jacks Marketplace is an on-demand driver platform for personal and business use. I worked as a Full Stack Developer using Flutter, Node.js, and MongoDB, building the driver booking flow and flexible scheduling system. I also developed backend APIs and real-time availability features with secure performance.',
    tags: ['Full Stack Applications', 'All'],
  },
  {
    imgUrl: Rev,
    name: ' OGA ',
    projectLink: 'https://apps.apple.com/us/app/oga-i-on-good-authority/id6739505173',
    codeLink: 'https://apps.apple.com/us/app/oga-i-on-good-authority/id6739505173',
    title: 'OGA     ',
    description: 'OGA (On Good Authority) is a social app where users share text posts, like, comment, and connect through messages. I worked as a Flutter developer using Firebase, implementing posts, interactions, and real-time updates. My role focused on authentication, feed features, and smooth user engagement.',
    tags: ['Firebase & Supabase', 'All'],
  },
  {
    imgUrl: yllc,
    name: ' HABO',
    projectLink: 'https://play.google.com/store/apps/details?id=com.pavlenko.Habo',
    codeLink: 'https://play.google.com/store/apps/details?id=com.pavlenko.Habo',
    title: 'HABO    ',
    description: 'Habo is a minimalist habit tracker designed to help users build streaks and maintain routines. I worked on updating the application using Flutter and Firebase, enhancing frontend and backend functionality. My contributions included implementing new features, improving workflows, and optimizing app performance.',
    tags: ['Firebase & Supabase', 'All'],
  },
  {
    imgUrl: qzeto,
    name: ' Kera Chrom',
    projectLink: 'https://play.google.com/store/apps/details?id=com.kerachrom.app',
    codeLink: 'https://play.google.com/store/apps/details?id=com.kerachrom.app',
    title: 'Kera Chrom    ',
    description: 'Kera Chrom is an AI-powered photo editing app for background removal and image enhancement. I worked on the backend using Node.js, Express.js, and MongoDB, developing APIs and managing application data. My role also included integrating AI image-processing services for editing and enhancement features.',
    tags: ['AI-Powered Applications', 'All'],
  },
  {
    imgUrl: ecommernce,
    name: ' HardLab - Gym Workout Tracker',
    projectLink: 'https://play.google.com/store/apps/details?id=app.hardlab.android',
    codeLink: 'https://play.google.com/store/apps/details?id=app.hardlab.android',
    title: 'HardLab - Gym Workout Tracker    ',
    description: 'HardLab is a fitness tracking app for workouts, nutrition, and progress monitoring. I worked on both frontend and backend using Flutter, Firebase, and Node.js, developing core tracking features. I also integrated AI-powered fitness insights using the OpenAI API and managing user data through Firebase.',
    tags: ['AI-Powered Applications', 'Firebase & Supabase', 'All'],
  },
  {
    imgUrl: bridge,
    name: ' Chatway_SaaS',
    projectLink: 'https://play.google.com/store/apps/details?id=com.chatway.mobile',
    codeLink: 'https://play.google.com/store/apps/details?id=com.chatway.mobile',
    title: 'Chatway_SaaS',
    description: 'Chatway is a customer support platform that helps businesses manage website and customer conversations in real time. I worked on the frontend using Flutter, implementing live chat interfaces, push notifications, and customer interaction features. My focus was on delivering a smooth and responsive support experience for agents.',
    tags: ['Mobile Apps', 'All'],
  },
  {
    imgUrl: lawd,
    name: ' Foodour',
    projectLink: 'https://play.google.com/store/apps/details?id=pk.com.foodour',
    codeLink: 'https://play.google.com/store/apps/details?id=pk.com.foodour',
    title: 'Foodour',
    description: 'Foodour is a food and grocery delivery platform that enables users to order meals and daily essentials. I worked as a Full Stack Developer using Flutter, Node.js, Express.js, and MongoDB. My role included developing frontend screens and backend APIs. I also implemented order management and real-time tracking features.',
    tags: ['Full Stack Applications', 'All'],
  },
  {
    imgUrl: aicity,
    name: ' Instant Doctor-Telehealth',
    projectLink: 'https://apps.apple.com/pk/app/instant-doctor-telehealth/id6753775573',
    codeLink: 'https://apps.apple.com/pk/app/instant-doctor-telehealth/id6753775573',
    title: 'Instant Doctor-Telehealth ',
    description: 'Instant Doctor Telehealth is a platform for connecting patients with doctors online. I worked as a Full Stack Developer on both frontend and backend development. My role included appointment booking, API integration, and patient management features. I also helped ensure a secure and smooth user experience.',
    tags: ['Full Stack Applications', 'All'],
  },
  {
    imgUrl: nft,
    name: ' AI Docu Chatbot',
    projectLink: 'https://apps.apple.com/us/app/ai-docu-chatbot/id6749878878',
    codeLink: 'https://apps.apple.com/us/app/ai-docu-chatbot/id6749878878',
    title: 'AI Docu Chatbot ',
    description: 'AI Docu Chatbot is an AI-powered assistant for document analysis and intelligent conversations. I worked as a Full Stack Developer, building both frontend and backend functionality. My role included integrating the OpenAI API, developing APIs, and implementing AI-driven chat and document processing features.',
    tags: ['AI-Powered Applications', 'Full Stack Applications', 'All'],
  },
  {
    imgUrl: zimo,
    name: ' One Way Taxi Driver',
    projectLink: 'https://play.google.com/store/apps/details?id=com.gopaytaxi.mobile',
    codeLink: 'https://play.google.com/store/apps/details?id=com.gopaytaxi.mobile',
    title: 'One Way Taxi Driver    ',
    description: 'This is a ride-hailing platform that enables users to book and manage rides seamlessly. I worked as a Full Stack Developer on both frontend and backend development. My role included developing booking flows, backend APIs, and real-time ride management features. I also focused on performance, scalability, and smooth user experience.',
    tags: ['Full Stack Applications', 'All'],
  },

  // Add more static data entries as needed.
];

const Work = () => {
  const [filterWork, setFilterWork] = useState(works); // Initialize with all works.
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works); // Show all works when 'All' is selected.
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="work">
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [-40, 0] }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        className="head-text"
      >
        My Creative <span>Portfolio</span>
      </motion.h2>

      <div className="app__work-filter">
        {['All', 'Full Stack Applications', 'Firebase & Supabase', 'AI-Powered Applications', 'Mobile Apps'].map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: [0, 1], scale: [0.7, 1] }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            viewport={{ once: false, amount: 0.5 }}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <motion.div
            className="app__work-item app__flex"
            key={index}
            whileInView={{ opacity: [0, 1], y: [60, 0] }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.12, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.15 }}
          >
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />
              {/* <video src={work.videoUrl} loop autoPlay /> */}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {/* <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a> */}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
