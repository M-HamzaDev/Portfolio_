import React from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import './Skills.scss';
import flutterLogo from '../../assets/flutter.png';
import dart from '../../assets/dart.png';
import android from '../../assets/android.png';
import ios from '../../assets/ios.png';
import getX from '../../assets/getX.png';
import provider from '../../assets/provider.png';
import restApi from '../../assets/restApi.png';
import websocket from '../../assets/websocket.png';
import react from '../../assets/react.png';
import bs5 from '../../assets/bs5.jpg';
import chakra from '../../assets/chakra.jpg';
import redux from '../../assets/redux.png';
import cpp from '../../assets/cpp.png';
import csharp from '../../assets/csharp.png';
import node from '../../assets/node.png';
import express from '../../assets/express.jpg';
import graphql from '../../assets/graphql.png';
import firebase from '../../assets/firebase.png';
import sql from '../../assets/sql.png';
import mongo from '../../assets/mongo.png';
import Experience from './Experience';

const skillsData = [
  {
    name: 'Flutter',
    bgColor: '',
    icon: flutterLogo,
  },
  {
    name: 'Dart',
    bgColor: '',
    icon: dart,
  },
  {
    name: 'Android',
    bgColor: '',
    icon: android,
  },
  {
    name: 'iOS',
    bgColor: '',
    icon: ios,
  },
  {
    name: 'GetX',
    bgColor: '',
    icon: getX,
    imgStyle: { filter: 'brightness(0)' },
  },
  {
    name: 'Provider',
    bgColor: '',
    icon: provider,
  },
  {
    name: 'Riverpod',
    bgColor: '',
    icon: react,
  },
  {
    name: 'BLoC Pattern',
    bgColor: '#ffff',
    icon: bs5,
  },
{
    name: 'Node js',
    bgColor: '',
    icon: node,
  },
  {
    name: 'Express js',
    bgColor: '#ffff',
    icon: express,
  },
  {
    name: 'GraghQL',
    bgColor: '#ffff',
    icon: graphql,
  },
  {
    name: 'Supabase',
    bgColor: '#ffff',
    icon: chakra,
  },
  {
    name: 'Git & GitHub',
    bgColor: '#ffff',
    icon: redux,
  },
  {
    name: 'C++',
    bgColor: '',
    icon: cpp,
  },
  {
    name: 'C#',
    bgColor: '#ffff',
    icon: csharp,
  },
  {
    name: 'REST APIs',
    bgColor: '#ffff',
    icon: restApi,
  },
  
  {
    name: 'WebSockets',
    bgColor: '#ffff',
    icon: websocket,
  },
  {
    name: 'MongoDb',
    bgColor: '#ffff',
    icon: mongo,
  },
  {
    name: 'Firebase',
    bgColor: '#ffff',
    icon: firebase,
  },
  {
    name: 'MySQL',
    bgColor: '#ffff',
    icon: sql,
  },
  // Add more static skills data entries as needed.
];

// const experiencesData = [
//   {
//     year: '2022',
//     works: [
//       {
//         name: 'Work 1',
//         company: 'Company 1',
//         desc: 'Description for Work 1.',
//       },
//       {
//         name: 'Work 2',
//         company: 'Company 2',
//         desc: 'Description for Work 2.',
//       },
//       // Add more static works data entries as needed.
//     ],
//   },
//   {
//     year: '2021',
//     works: [
//       {
//         name: 'Work 3',
//         company: 'Company 3',
//         desc: 'Description for Work 3.',
//       },
//       // Add more static works data entries for 2021 as needed.
//     ],
//   },
//   // Add more static experience data entries as needed.
// ];

const Skills = () => (
  <div id="skills">
    <h2 className="head-text">Skills & Experiences</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skillsData.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={skill.icon} alt={skill.name} style={skill.imgStyle} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    {/* <div className="app__skills-exp">
      {experiencesData.map((experience) => (
        <motion.div
          className="app__skills-exp-item"
          key={experience.year}
        >
          <div className="app__skills-exp-year">
            <p className="bold-text">{experience.year}</p>
          </div>
          <motion.div className="app__skills-exp-works">
            {experience.works.map((work) => (
              <React.Fragment key={work.name}>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                >
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                </motion.div>
                <ReactTooltip
                  id={work.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {work.desc}
                </ReactTooltip>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div> */}
    <Experience />
  </div>
);

export default Skills;
