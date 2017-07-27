import React, { Component } from 'react';
import data from './ability.json';

class Ability extends Component {
  constructor(props) {
    super(props)
    this.state = data;
  }

  renderLeftList(skills, listDirection) {
    let list = skills.map((data) => {
      let stars = data.stars;
      let starList = []
      let unStarList = []
      for (let i=5; i>0;i--) {
        if (stars > 0) {
          starList.push((<span className="glyphicon glyphicon-star filled" key={`${data.skill}${i}`}></span>))
        } else {
          unStarList.push((<span className="glyphicon glyphicon-star"></span>))
        }
        stars--;
      }
      starList.push(unStarList)
      return (
        <li className={listDirection} key={data.skill}>
          <span className="ability-title">{data.skill}</span>
          <span className="ability-score">
            {starList}
          </span>
        </li>
      )
    });
    return [list]
  }

  render() {
    return (
      <section id="ability">
        <div className="container abilites">
          <div className="ability-head">
            <h2>Abilities</h2>
            <p>With the power of the force, I am invincible.</p>
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <section id="skills">
            <div className="ability-skills-head">
              <h2>Fronend</h2>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.frontend.splice(0, Math.ceil(this.state.frontend.length / 2)),
                  'list-left')
                }
              </ul>
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.frontend.splice(Math.ceil(this.state.frontend.length / 2)-1, this.state.frontend.length),
                  'list-right')
                }
              </ul>
            </div>
          </section>
          <section id="backend">
            <div className="ability-others-head">
              <h2>Backend</h2>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.backend.splice(0, Math.ceil(this.state.backend.length / 2)),
                  'list-left')
                }
              </ul>
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.backend.splice(Math.ceil(this.state.backend.length / 2)-1, this.state.backend.length),
                  'list-right')
                }
              </ul>
            </div>
          </section>
          <section id="others">
            <div className="ability-others-head">
              <h2>Others</h2>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.others.splice(0, Math.ceil(this.state.others.length / 2)),
                  'list-left')
                }
              </ul>
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.others.splice(Math.ceil(this.state.others.length / 2)-1, this.state.others.length),
                  'list-right')
                }
              </ul>
            </div>
          </section>
          <section id="languages">
            <div className="ability-languages-head">
              <h2>Languages</h2>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.languages.splice(0, Math.ceil(this.state.languages.length / 2)),
                  'list-left')
                }
              </ul>
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.languages.splice(Math.ceil(this.state.languages.length / 2)-1, this.state.languages.length),
                  'list-right')
                }
              </ul>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Ability;
