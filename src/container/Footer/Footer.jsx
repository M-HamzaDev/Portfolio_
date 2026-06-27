import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import whatsapp from '../../assets/whatsapp.jpg';
import './Footer.scss';

const Footer = () => (
  <div id="contact">
    <motion.h2
      whileInView={{ opacity: [0, 1], y: [-40, 0] }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.5 }}
      className="head-text"
    >
      Take a coffee & chat with me
    </motion.h2>

    <div className="app__footer-cards">
      <motion.div
        whileInView={{ opacity: [0, 1], y: [40, 0] }}
        transition={{ duration: 0.3, delay: 0, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
        className="app__footer-card"
      >
        <img src={images.email} alt="email" />
        <a href="mailto:mhamzaali51272@gmail.com" className="p-text">mhamzaali51272@gmail.com</a>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [40, 0] }}
        transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
        className="app__footer-card"
      >
        <img src={images.mobile} alt="phone" />
        <a href="tel:+923167980123" className="p-text">+92 316-7980123</a>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [40, 0] }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
        className="app__footer-card"
      >
        <img src={whatsapp} alt="phone" />
        <a
          href="https://wa.me/923167980123"
          target="_blank"
          rel="noopener noreferrer"
          className="p-text"
        >
          +92 316-7980123
        </a>
      </motion.div>
    </div>
    {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : ( */}
    {/* <div>
      <h3 className="head-text">
        Thank you for getting in touch!
      </h3>
    </div> */}
    {/* )} */}
  </div>
);

export default Footer;
