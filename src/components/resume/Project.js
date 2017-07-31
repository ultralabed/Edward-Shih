import React, { Component } from 'react';
import data from './project.json';

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = data;
  }

  renderProjectView(projects) {
    let list = projects.map((project) => {
      return (
        <div className="col col-1-2 project-content-box">
          <figure className="effect">
      			<img src={project.image} alt={project.description} className="project-image"/>
      			<figcaption className="project-detail">
      				<h3>{project.title}</h3>
      				<p>{project.description}</p>
      				<p><br></br>＊ {project.tags}</p>
      				<a href={project.link} target="_blank">View more</a>
      				<span className="icon">
      					<span className="glyphicon glyphicon-link"></span>
      				</span>
      			</figcaption>
      		</figure>
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
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <div className="project-content">
            {this.renderProjectView(this.state.projects)}
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
