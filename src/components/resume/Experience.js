import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <div className="container experience">
          <div className="experience-head">
            <h2>Experience</h2>
            <p>Keep turning and learning</p>
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <section id="education">
            <div className="experience-education-head">
              <h2>Education</h2>
            </div>
            <div className="experience-education flex">
              <div className="flex-1-3 experience-title">
                <h4>NTUT</h4>
                <p>Sep 2012 - June 2014</p>
              </div>
              <div className="flex-2-3 experience-content">
                <h5>Master Electrical Engineering</h5>
                <p>Gamification is the application of game elements and digital game
                  design techniques to non-game problems, such as business and
                  social impact challenges. This course thought me about the
                  mechanisms of gamification, why it has such tremendous potential,
                  and how to use it effectively.
                </p>
              </div>
            </div>
          </section>
          <div className="split-line split-line-light flex-1-1"></div>
          <section id="careers">
            <div className="experience-careers-head">
              <h2>Careers</h2>
            </div>
            <div className="experience-careers flex">
              <div className="flex-1-3 experience-title">
                <h4>Cloudpe Corp.</h4>
                <p>Sep 2014 - Present</p>
              </div>
              <div className="flex-2-3 experience-content">
                <h5>Front-end Engineer / Software Engineer / Project Manager</h5>
                <p>Gamification is the application of game elements and digital game
                  design techniques to non-game problems, such as business and
                  social impact challenges. This course thought me about the
                  mechanisms of gamification, why it has such tremendous potential,
                  and how to use it effectively.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Experience;
