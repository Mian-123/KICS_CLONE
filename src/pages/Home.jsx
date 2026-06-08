import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import Stats from '../components/Stats';
import AboutPreview from '../components/AboutPreview';
import ResearchLabs from '../components/ResearchLabs';
import TechEcosystem from '../components/TechEcosystem';
import InformationHub from '../components/InformationHub';
import Collaborations from '../components/Collaborations';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Stats />
      <AboutPreview />
      <ResearchLabs />
      <TechEcosystem />
      <InformationHub />
      <Collaborations />
    </>
  );
};

export default Home;
