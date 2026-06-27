import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import fiver from '../../assets/fiverr (2).png';
import upwork from '../../assets/upwork.png';
import linkedin from '../../assets/linkedin.png';
import alayzone from '../../assets/alayzone.jpg';
import zysoftec from '../../assets/Untitled design (1).png'; // Update path as needed
import fuzionDev from '../../assets/Untitled design (3).png'; // Update path as needed
import './Testimonial.scss';

const testimonials = [
  {
    _id: 1,
    name: 'ismailjaddad',
    company: 'Fiverr',
    imgurl: fiver,
    feedback: 'I had the pleasure of working with Hamza on deploying my code, and the experience was truly exceptional...',
  },
  {
    _id: 2,
    name: 'Faizan',
    company: 'India',
    imgurl: linkedin,
    feedback: 'Excellent service! This guy is amazing! Plus they have a good feel for the design so any missing parts they added were perfectly fit for the design...',
  },
  {
    _id: 3,
    name: 'dsdigital11',
    company: 'Fiverr',
    imgurl: fiver,
    feedback: 'Excellent service! These guys are amazing! They truly do pixel-perfect delivery and have great attention to detail...',
  },
  {
    _id: 4,
    name: 'usmanasif11',
    company: 'Fiverr',
    imgurl: fiver,
    feedback: 'Great Work! He did an excellent job on our Flutter, Node js project. We will definitely work with him again...',
  },
  {
    _id: 5,
    name: 'jorgewmp',
    company: 'Upwork',
    imgurl: upwork,
    feedback: 'From the beginning, he made prior consultations to know in detail the task to be carried out, which provides a lot of confidence...',
  },
  {
    _id: 6,
    name: 'Emily Evans',
    company: 'LinkedIn',
    imgurl: linkedin,
    feedback: 'Hamza is a really professional and competent individual, so I was happy to have found him. My expectations were met...',
  },
  {
    _id: 7,
    name: 'ahmerhh',
    company: 'Upwork',
    imgurl: upwork,
    feedback: 'Working with this seller was an absolute pleasure! They not only delivered a perfect job but also demonstrated a deep understanding of the task...',
  },
  // Add more testimonials if needed
];

const brands = [
  {
    _id: 1,
    name: 'ZySoftec',
    imgUrl: zysoftec,
  },
  {
    _id: 2,
    name: 'FuzionDev',
    imgUrl: fuzionDev,
  },
  {
    _id: 3,
    name: 'Fiverr',
    imgUrl: fiver,
  },
  {
    _id: 4,
    name: 'Alayzone',
    imgUrl: alayzone,
  },
  {
    _id: 5,
    name: 'Upwork',
    imgUrl: upwork,
  },
  {
    _id: 6,
    name: 'LinkedIn',
    imgUrl: linkedin,
  },
  // Add more brands if needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="testimonials">
      {testimonials.length && (
        <>
          <motion.div
            whileInView={{ opacity: [0, 1], x: [-60, 0] }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="app__testimonial-item app__flex"
          >
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.5 }}
            className="app__testimonial-btns app__flex"
          >
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </motion.div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, i) => (
          <motion.div
            whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
            transition={{ duration: 0.3, delay: i * 0.08, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            key={i}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
