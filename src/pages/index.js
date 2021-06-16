import React, { useState } from 'react';

import HeroSection from '../components/hero/hero.component';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/info/Data';
import InfoSection from '../components/info/info.component';
import Navbar from '../components/navbar/navbar.component';
import Sidebar from '../components/sidebar/sidebar.component';
import Services from '../components/services/services.component';
import Footer from '../components/footer/footer.component';

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
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
