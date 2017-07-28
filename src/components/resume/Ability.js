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
          </div>
          <section id="skills">
            <div className="split-line split-line-light flex-1-1"></div>
            <div className="ability-skills-head">
              <h3>Fronend</h3>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.frontend.slice(0, Math.ceil(this.state.frontend.length / 2)),
                  'list-left')
                }
              </ul>
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.frontend.slice(Math.ceil(this.state.frontend.length / 2), this.state.frontend.length),
                  'list-right')
                }
              </ul>
            </div>
          </section>
          <section id="backend">
            <div className="split-line split-line-light flex-1-1"></div>
            <div className="ability-others-head">
              <h3>Backend</h3>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.backend.slice(0, Math.ceil(this.state.backend.length / 2)),
                  'list-left')
                }
              </ul>
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.backend.slice(Math.ceil(this.state.backend.length / 2), this.state.backend.length),
                  'list-right')
                }
              </ul>
            </div>
          </section>
          <section id="others">
            <div className="split-line split-line-light flex-1-1"></div>
            <div className="ability-others-head">
              <h3>Others</h3>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.others.slice(0, Math.ceil(this.state.others.length / 2)),
                  'list-left')
                }
              </ul>
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.others.slice(Math.ceil(this.state.others.length / 2), this.state.others.length),
                  'list-right')
                }
              </ul>
            </div>
          </section>
          <section id="languages">
            <div className="split-line split-line-light flex-1-1"></div>
            <div className="ability-languages-head">
              <h3>Languages</h3>
            </div>
            <div className="flex">
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.languages.slice(0, Math.ceil(this.state.languages.length / 2)),
                  'list-left')
                }
              </ul>
              <ul className="flex-1-2 no-bullets">
                {
                  this.renderLeftList(
                  this.state.languages.slice(Math.ceil(this.state.languages.length / 2), this.state.languages.length),
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
