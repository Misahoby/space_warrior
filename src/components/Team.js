import React, { Component } from 'react';
export default class Team extends Component {
  render() {
    return (
      <div id="team">
        <div className='container'>
          <div className="title">
            < img src="images/block6-tit.3ce71TEAM.png" />
          </div>
          <div className='row '>
            <div className="col-md-3 col-6 ">
              <img src="images/my_character_t.png"></img>
              {/* <label>
                Mike - Solidity Developer with 7 years experience
              </label> */}
            </div>
            <div className="col-md-3 col-6 ">
              <img src="images/my_character (1)_t.png"></img>
              {/* <label>
                Holger - Game Developer with 5 years experience
              </label> */}
            </div>
            <div className="col-md-3 col-6 ">
              <img src="images/my_character (3)_t.png"></img>
              {/* <label>
                Micael - Business Development Manager with 13 years of experience
              </label> */}
            </div>
            <div className="col-md-3 col-6 ">
              <img src="images/my_character (4)_t.png"></img>
              {/* <label>
                Steffano - Web Developer with 6 years experience
              </label> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}