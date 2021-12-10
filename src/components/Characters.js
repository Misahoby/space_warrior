import React, { Component } from 'react';
export default class Characters extends Component {
  render() {
    return (
      <div id="characters">
        <div className="container">
          <div className="title">
            <img src="images/block4-tit.c873a919.png" />
          </div>
          <div className="row item">
            <div className="col-md-4 col-sm-12">
              <img src="images/photo_2021-12-08_14-13-18.png" />
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="images/photo_2021-12-08_14-13-22.png" />
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="images/photo_2021-12-08_14-13-24.png" />
            </div>
          </div>
          <div className="row item">
            <div className="col-md-6 col-sm-12">
              <img src="images/photo_2021-12-08_14-13-06.png" />
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="images/photo_2021-12-08_14-13-15.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}