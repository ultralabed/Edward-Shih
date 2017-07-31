import React, { Component } from 'react';
import data from './hackathon.json';

class Hackathon extends Component {
  constructor(props) {
    super(props)
    this.state = data;
  }

  renderHackathonView(hackathons) {
    let list = hackathons.map((hackathon) => {
      return (
        <div className="col col-1-2 project-content-box">
          <figure className="effect">
      			<img src={hackathon.image} alt={hackathon.description} className="project-image"/>
      			<figcaption className="project-detail">
      				<h3>{hackathon.title}</h3>
      				<p>{hackathon.description}</p>
      				<p><br></br>＊ {hackathon.tags}</p>
      				<a href={hackathon.link} target="_blank">View more</a>
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
      <section id="hackathon">
        <div className="container project">
          <div className="project-head">
            <h2>Hackathons</h2>
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <div className="project-content">
            {this.renderHackathonView(this.state.hackathons)}
          </div>
        </div>
      </section>
    );
  }
}

export default Hackathon;
