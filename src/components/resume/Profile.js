import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <section id="profile">
        <div className="container profile">
          <div className="profile-head">
            <h2>Profile</h2>
            <p>I am a passionate Front-end developer</p>
            <div className="split-line split-line-light flex-1-1"></div>
          </div>
          <div className="flex">
            <article className="profile-about flex-1-3">
              <h4>About me</h4>
              <p>
                I am a front-end engineer with 3 years of experience in web
                development, and I have used AngularJS and ReactJS to build web
                applications for more than 2 years. I also learned Python, Docker
                and other programming tools by myself and use it in the companys
                side projects.
              </p>
            </article>
            <div className="profile-box flex-1-3">
              <div>
                <img className="profile-box-image" src="./assets/me.jpg"></img>
              </div>
            </div>
            <article className="profile-details flex-1-3">
              <h4>Details</h4>
              <div className="profile-details-item">
                <h5>Name: </h5>
                <p>Edward Shih</p>
              </div>
              <div className="profile-details-item">
                <h5>Age: </h5>
                <p>28</p>
              </div>
              <div className="profile-details-item">
                <h5>Location: </h5>
                <p>Taipei, Taiwan</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
