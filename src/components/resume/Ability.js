import React, { Component } from 'react';

class Ability extends Component {

  render() {
    return (
      <section id="ability">
        <div className="container abilites">
          <div className="ability-head">
            <h2>Abilities</h2>
            <p>With the power of force, I am invincible.</p>
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <section id="skills">
            <div className="ability-skills-head">
              <h2>Skills</h2>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                <li className="list-left">
          				<span className="ability-title">AngularJS</span>
          				<span className="ability-score">
          					<span className="glyphicon glyphicon-star filled"></span>
          					<span className="glyphicon glyphicon-star filled"></span>
          					<span className="glyphicon glyphicon-star filled"></span>
          					<span className="glyphicon glyphicon-star filled"></span>
          					<span className="glyphicon glyphicon-star filled"></span>
          				</span>
          			</li>
              </ul>
              <ul className="flex-1-2 no-bullets">
                <li className="list-right">
                  <span className="ability-title">ReactJS</span>
                  <span className="ability-score">
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star"></span>
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section id="others">
            <div className="ability-others-head">
              <h2>Others</h2>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                <li className="list-left">
                  <span className="ability-title">MySQL</span>
                  <span className="ability-score">
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                  </span>
                </li>
                <li className="list-left">
                  <span className="ability-title">NodeJS</span>
                  <span className="ability-score">
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                  </span>
                </li>
              </ul>
              <ul className="flex-1-2 no-bullets">
                <li className="list-right">
                  <span className="ability-title">PHP</span>
                  <span className="ability-score">
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section id="languages">
            <div className="ability-languages-head">
              <h2>Languages</h2>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                <li className="list-left">
                  <span className="ability-title">Chinese (Native Speaker)</span>
                  <span className="ability-score">
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                  </span>
                </li>
                <li className="list-left">
                  <span className="ability-title">Japanese (Can servive)</span>
                  <span className="ability-score">
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                  </span>
                </li>
              </ul>
              <ul className="flex-1-2 no-bullets">
                <li className="list-right">
                  <span className="ability-title">English(Fluent)</span>
                  <span className="ability-score">
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                    <span className="glyphicon glyphicon-star filled"></span>
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Ability;
