import React, { Component } from 'react';
export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <div className="row">
            <div className="col-2 logo">
              <a className="navbar-brand" href="#">
                <img src="images/SPACE_WARRIOR@3x_(4).png"></img>
              </a>
            </div>
            <div className="col-10">
              <nav className="navbar navbar-expand-sm navbar-dark">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style={{marginLeft:"auto"}}>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav homebtn">
                    <li className="nav-item">
                      <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#application">Application</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#characters">Assets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tokenomics">Tokenomics</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#roadmap">Roadmap</a>
                    </li>
                    <li className="nav-item btns">
                      <a className="nav-link btn" href="#">Buy Now</a>
                    </li>                    
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="banner">
          <img src="images/SPACE_WARRIOR@3x_(4).png" />
          <h1>
            Space Warrior Game $SWG will bring the most exciting thrill yet seen via a community run ecosystem of P2E games on the ERC-20 Blockchain.
          </h1>
          <div className="mainbtn">
            <a href="https://t.me/SpaceWarriorGame" className="btn">Telegram</a>
            <a href="https://twitter.com/Space__Warrior" className="btn">Twitter</a>
            <a href="#" className="btn">Chart</a>
            <a href="#" className="btn">Whitepaper(Coming Soon)</a>
          </div>
        </div>

      </div>
    );
  }
}






