import React, { Component } from 'react';
export default class Application extends Component {
  render() {
    return (
      <div id="application">
        <div className="container">
          <div className="title">
            < img src="images/block3-tit.2f98f816.png" />
          </div>
          <div className="condition row">
            <div className="col-md-4 col-sm-12 ">
              <img src="images/block3-img1.db8902a4_t.png" />
              {/* <h6>Royal Rumble</h6>
              <p>Battle your spaceship against other player's spaceships and receive rewards.</p>
              <p>Take your spaceship on daily challenges to earn rewards.</p>
              <p>Both the game and assets will be updated frequently.</p> */}
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="images/block3-img2.92fb6a06_t.png" />
              {/* <h6>Space Training Camp</h6>
              <p>Own your own spaceships; use $SWG to buy them on the NFT marketplace.</p>
              <p>Have your spaceships join space training camp and earn $SWG rewards as you unlock more features.</p>
              <p>Anyone can buy training camp NFTs and participate in the space training camp against different spaceships from all around the universe.</p> */}
            </div>
            <div className="col-md-4 col-sm-12" >
              <img src="images/block3-img3.49fe6162_t.png" />
              {/* <h6>NFT Market</h6>
              <p>Buy, sell or Exchange your spaceships or assets with other player in the game.</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}