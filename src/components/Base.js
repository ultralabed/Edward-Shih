import React from 'react';
import Home from './resume/Home';
import Profile from './resume/Profile';
import Experience from './resume/Experience';
import Ability from './resume/Ability';
import Project from './resume/Project';
import Hackathon from './resume/Hackathon';
import Footer from './resume/Footer';

const Base = ({ children }) => {
  return (
    <div className="top-container">
      <Home />
      <Profile />
      <Experience />
      <Ability />
      <Hackathon />
      <Project />
      <Footer />
    </div>
  );
};

export default Base;
