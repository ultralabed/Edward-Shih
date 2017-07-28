import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <section id="footer">
        <div className="footer-bk">
          <div className="container footer">
            <h2>Contact</h2>
            <div className="split-line split-line-light"></div>
            <div className="flex footer-link">
            	<div className="col-1-2">
            		<ul className="no-bullets">
            			<li>
            				<a href="https://github.com/ultralabed" target="_blank">
            					<span className="icon icon-github"></span>
            					<span>https://github.com/ultralabed</span>
                    </a>
            			</li>
                  <li>
                    <a href="mailto:ultralabed@gmail.com">
                      <i className="icon icon-mail"></i>
                      <span>ultralabed@gmail.com</span>
                    </a>
                  </li>
            		</ul>
            	</div>
            	<div className="col-1-2">
            		<ul className="no-bullets">
                  <li>
                    <a href="https://goo.gl/MA91nQ" target="_blank">
                      <span className="icon icon-linkedin"></span>
                      <span>https://goo.gl/MA91nQ</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+886912834980" target="_blank">
                      <span className="icon icon-phone"></span>
                      <span>+886 912834980</span>
                    </a>
                  </li>
            		</ul>
            	</div>
            </div>
            <div className="split-line split-line-light"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
