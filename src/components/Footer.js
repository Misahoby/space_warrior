import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <div id ="footer">
        <div className="container">
          <img src="images/floor-bg.8d8383a0.png" alt className="des" />
          <div className="row">
            <div className="col-md-2">
              <img src="images/SPACE_WARRIOR@3x_(3).png" alt className="logo" />
            </div>
            <div className="col-md-5">
              <div className="text">
                <p>Nothing on this website constitutes or should be considered financial advice. This website is provided for informational purposes only. Please be responsible, and we implore you to never take risks that you cannot afford to take.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="website">
                <dt>Websites</dt>
                <dd>
                  <a href="#">Home</a>
                </dd>
                <dd>
                  <a href="#about">About us</a>
                </dd>
                <dd>
                  <a href="#character">Characters</a>
                </dd>
                <dd>
                  <a href="#token">Token</a>
                </dd>
                <dd>
                  <a href="#roadmap">Roadmap</a>
                </dd>
              </div>
            </div>
            <div className="col-md-2">
              <div className="community">
                <h6>Community</h6>
                <div className="inner">
                  <a href="https://t.me/SpaceWarriorGame">
                    <img src="images/inner_tome.png" />
                  </a>
                  <a href="https://twitter.com/Space__Warrior">
                    <img src="images/inner_twi.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}