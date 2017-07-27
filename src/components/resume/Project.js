import React, { Component } from 'react';

class Project extends Component {

  render() {
    return (
      <section id="project">
        <div className="container project">
          <div className="project-head">
            <h2>Projects</h2>
            <p>Making a better world</p>
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <div className="flex">
            <div className="flex-1-2 project-box">
              <img src="./assets/kg.jpg" alt="Kidguard" className="project-image"/>
            </div>
            <div className="flex-1-2 project-box">
              <img src="./assets/orderspoon.jpg" alt="Orderspoon project" className="project-image"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
