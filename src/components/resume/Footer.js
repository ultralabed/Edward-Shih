import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <section id="footer">
        <div className="footer-bk">
          <div className="container footer">
            <h1>Contact</h1>
            <div className="split-line split-line-light"></div>
            <div className="flex footer-link">
            	<div className="flex-1-2">
            		<ul className="no-bullets">
            			<li>
            				<a href="https://github.com/ultralabed" target="_blank">
            					<span className="icon icon-github"></span>
            					<span>     https://github.com/ultralabed</span>
                    </a>
            			</li>
                  <li>
                    <a href="mailto:ultralabed@gmail.com">
                      <i className="icon icon-mail"></i>
                      <span>     ultralabed@gmail.com					</span>
                    </a>
                  </li>
            		</ul>
            	</div>
            	<div className="flex-1-2">
            		<ul className="no-bullets">
                  <li>
                    <a href="https://www.linkedin.com/in/edward-shih-43942786/" target="_blank">
                      <span className="icon icon-linkedin"></span>
                      <span>     https://www.linkedin.com/in/edward-shih-43942786/</span>
                    </a>
                  </li>
            		</ul>
            	</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
