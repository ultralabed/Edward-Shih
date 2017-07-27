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
            <p>{this.state.profileTitle}</p>
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <div className="flex">
            <article className="profile-about flex-1-3">
              <h4>About me</h4>
              <p>{this.state.aboutMeContent}</p>
            </article>
            <div className="profile-box flex-1-3">
              <div>
                <img className="profile-box-image" src="../../assets/me.jpg"></img>
              </div>
            </div>
            <article className="profile-details flex-1-3">
              <h4>Details</h4>
              <div className="profile-details-item">
                <h5>Name: </h5>
                <p>{this.state.name}</p>
              </div>
              <div className="profile-details-item">
                <h5>Age: </h5>
                <p>{this.state.age}</p>
              </div>
              <div className="profile-details-item">
                <h5>Location: </h5>
                <p>{this.state.location}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
