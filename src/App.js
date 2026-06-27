import React from 'react';

import { Navbar } from './components';
import './App.scss';
import Header from './container/Header/Header';
import About from './container/About/About';
import Work from './container/Work/Work';
import Skills from './container/Skills/Skills';
import Testimonial from './container/Testimonial/Testimonial';
import Footer from './container/Footer/Footer';
// eslint-disable-next-line import/order, import/no-unresolved
// import { Analytics } from '@vercel/analytics/react';

const App = () => (
  // <Analytics>
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Testimonial />
    <Footer />
  </div>
  // </Analytics>
);

export default App;
