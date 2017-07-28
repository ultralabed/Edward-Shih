import React, { Component } from 'react';
import data from './profile.json';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = data;
  }
  render() {
    return (
      <section id="profile">
        <div className="container profile">
          <div className="profile-head">
            <h2>Profile</h2>
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <div className="flex">
            <article className="profile-about flex-1-3">
              <h3>About me</h3>
              <p>{this.state.aboutMeContent}</p>
            </article>
            <div className="profile-box flex-1-3">
              <div>
                <img className="profile-box-image" src="../../assets/me.jpg"></img>
              </div>
            </div>
            <article className="profile-details flex-1-3">
              <h3>Details</h3>
              <div className="profile-details-item">
                <p>
                  <strong>Name: </strong>
                  <br></br>
                  {this.state.name}
                  <br></br>
                  <strong>Age: </strong>
                  <br></br>
                  {this.state.age}
                  <br></br>
                  <strong>Location: </strong>
                  <br></br>
                  {this.state.location}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
