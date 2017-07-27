import React from 'react';
import Home from './resume/Home';
import Profile from './resume/Profile';
import Experience from './resume/Experience';
import Ability from './resume/Ability';
import Project from './resume/Project';
import Footer from './resume/Footer';

const Base = ({ children }) => {
  return (
    <div className="top-container">
      <Home />
      <Profile />
      <Experience />
      <Ability />
      <Project />
      <Footer />
    </div>
  );
};

export default Base;
