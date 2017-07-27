import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

  render() {
    return (
      <section id="homeScreen">
        <div className="home-bk">
          <div className="container home">
            <h1>Edward Shih</h1>
            <div className="split-line split-line-light"></div>
            <h2>RESUME</h2>
          </div>
          <Link to="" className="scroll-down">
            <span className="glyphicon glyphicon-chevron-down"></span>
          </Link>
        </div>
      </section>
    );
  }
}

export default Home;
