import React, { Component } from 'react';
import data from './experience.json';

class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = data
  }

  renderEducationView(educations) {
    let educationsView = educations.map((data) => {
      return (
        <div className="experience-education flex">
          <div className="flex-1-3 experience-title">
            <h4>{data.school}</h4>
            <p>{data.duration}</p>
          </div>
          <div className="flex-2-3 experience-content">
            <h4>{data.degree}</h4>
          </div>
        </div>
      )
    });
    return [ educationsView ]
  }

  renderCareerView(careers) {
    let educationsView = careers.map((data) => {
      return (
        <div className="experience-careers flex">
          <div className="flex-1-3 experience-title">
            <h4>{data.company}</h4>
            <p>{data.duration}</p>
          </div>
          <div className="flex-2-3 experience-content">
            <h4>{data.role}</h4>
            <h5>Job Description</h5>
            {[data.jobDescription.map((data) => <p>{data}</p>)]}
            {data.achievements.length > 0 && <h5>Achievements</h5>}
            {data.achievements.length > 0 && <ul>{[data.achievements.map((data) => <li>{data}</li>)]}</ul>}
          </div>
        </div>
      )
    });
    return [ educationsView ]
  }


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
            {this.renderEducationView(this.state.educations)}
          </section>
          <div className="split-line split-line-light flex-1-1"></div>
          <section id="careers">
            <div className="experience-careers-head">
              <h2>Careers</h2>
            </div>
            {this.renderCareerView(this.state.careers)}
          </section>
        </div>
      </section>
    );
  }
}

export default Experience;
