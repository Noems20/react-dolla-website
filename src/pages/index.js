import React, { useState } from 'react';

import HeroSection from '../components/hero/hero.component';
import Navbar from '../components/navbar/navbar.component';
import Sidebar from '../components/sidebar/sidebar.component';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
