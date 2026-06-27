import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import fiverr from '../../assets/fiverr (2).png';
import career from '../../assets/career.jpg';
import zysoftec from '../../assets/Untitled design (1).png'; // Add appropriate path for ZySoftec logo
import fuzionDev from '../../assets/Untitled design (3).png'; // Add appropriate path for Fuzion Dev logo
import inthevisual from '../../assets/inthevisual.jpg'; // Add appropriate path for Fuzion Dev logo
import './Skills.scss';

const Experience = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'linear-gradient(135deg, #820dff, #4e0899)', color: 'white' }}
      contentArrowStyle={{ borderRight: '7px solid  #820dff' }}
      date="2025 - Present"
      icon={(
        <div className="expIcon">
          <img src={inthevisual} alt="ZySoftec" />
        </div>
      )}
    >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">Acceltor LTD - Remote</h4>
      <p>
        As a Senior Full Stack Flutter Developer, I specialize in building scalable cross-platform applications using Flutter, Node.js, Express.js, MongoDB, MySQL, Firebase, and Supabase. My expertise spans mobile app development for Android and iOS, backend architecture, RESTful API development, and cloud-based solutions. I have extensive experience with state management approaches including GetX, Provider, Riverpod, and BLoC, enabling me to create maintainable and high-performance applications. My role involves architecting robust software solutions, optimizing performance, ensuring security and scalability, and collaborating with teams to deliver high-quality digital products that meet business objectives.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'linear-gradient(135deg, #a1e22c, #759831)' }}
      contentArrowStyle={{ borderRight: '7px solid  #a1e22c' }}
      date="Jan 2024 - Dec 2024"
      icon={(
        <div className="expIcon">
          <img src={zysoftec} alt="ZySoftec" />
        </div>
      )}
    >
      <h3 className="vertical-timeline-element-title">Flutter Full Stack Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Paragon Logics IT & Solution - Faisalabad</h4>
      <p>
        As a Full Stack Flutter Developer at Paragon Logics, I develop high-performance mobile applications using Flutter, Firebase, Node.js, and Express.js. I work on intuitive user interfaces, scalable backend systems, and efficient database solutions with MySQL. My responsibilities include enhancing application performance, maintaining code quality, and working closely with the team to deliver reliable and user-focused software products.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="June 2022 - Dec 2023"
      icon={(
        <div className="expIcon">
          <img src={fuzionDev} alt="Fuzion Dev" />
        </div>
      )}
    >
      <h3 className="vertical-timeline-element-title">Flutter Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">FA Smart Tech & Solution - Faisalabad</h4>
      <p>
        As a full-stack Next.js developer at Fuzion Dev, I create dynamic web applications using React components and Next.js for server-side rendering. I integrate with databases and develop APIs for backend logic and authentication. My role involves optimizing performance, ensuring security, and deploying applications for seamless user experiences.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'linear-gradient(135deg, #1dbf73, #afe8d1)', color: 'black' }}
      contentArrowStyle={{ borderRight: '7px solid  #1dbf73' }}
      date="2021 - Present"
      icon={(
        <div className="expIcon">
          <img src={fiverr} alt="Fiverr" />
        </div>
      )}
    >
      <h3 className="vertical-timeline-element-title">Full Stack Flutter Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Freelancer on Fiverr</h4>
      <p>
        Experienced Full Stack Flutter Developer on Fiverr, building customized mobile and backend solutions since 2022. Leveraging Flutter, Firebase, Supabase, Node.js, Express.js, MongoDB, and MySQL to create scalable and high-performance applications. Skilled in state management solutions including GetX, Provider, Riverpod, and BLoC. Collaborating with global clients, I have successfully delivered multiple projects, transforming ideas into reliable and user-focused digital products. Proficient in optimizing performance and ensuring seamless user experiences.
      </p>
    </VerticalTimelineElement>


    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'linear-gradient(135deg, #0a6077, #0a6077, #076b6d)', color: 'white' }}
      contentArrowStyle={{ borderRight: '7px solid  #0a6077' }}
      date="2021 - 2022"
      icon={(
        <div className="expIcon">
          <img src={career} alt="Career Institute" />
        </div>
      )}
    >
      <h3 className="vertical-timeline-element-title">Full Stack Flutter Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Career Institute Faisalabad</h4>
      <p>
        A key contributor to the Career Institute team, specializing in developing cross-platform mobile applications powered by Flutter and backend technologies. Leveraging Flutter, Firebase, Node.js, and Express.js, I design and implement scalable, feature-rich solutions that meet client requirements. Collaborating seamlessly with colleagues, I help create high-performance applications with a strong focus on user experience, reliability, and security.
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

export default Experience;
