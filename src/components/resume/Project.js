import React, { Component } from 'react';
import data from './project.json';

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = data;
  }

  renderProjectView(projects) {
    console.log(projects)
    let list = projects.map((project) => {
      return (
        <div className="flex-1-2 project-box">
          <img src={project.image} alt={project.description} className="project-image"/>
        </div>
      );
    });
    return [list];
  }

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
            {this.renderProjectView(this.state.projects)}
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
