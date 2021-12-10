import React, { Component } from 'react';
export default class Roadmap extends Component {
  render() {
    return (
      <div id="roadmap">
        <div className="container">
          <div className="title">
            <img src="images/block6-tit.3ce71bad.png" />
          </div>
          <div className="condition row">
            <div className="col-md-3 col-sm-12">
              <img src="images/block6.item.4fed_modifyP1.png" />
              {/* <h6>PHASE1</h6>
              <p>Website Release.</p>
              <p>Space Warrior Game level preview.</p>
              <p>Fair Launch.</p>
              <p>CoinGecko, CoinMarketcap, fast track.</p>
              <p>Contract Audit.</p> */}
            </div>
            <div className="col-md-3 col-sm-12 ">
              <img src="images/block6.item.4fed_modifyP2.png" />
              {/* <h6>PHASE2</h6>
              <p>NFT Marketplace.</p>
              <p>Game Beta.</p>
              <p>Marketing through Social Influencers.</p>
              <p>Regular AMA / Telegram Voice Chats.</p>
              <p>New Themes for the Space Warrior Game Interface.</p>
              <p>Full-time Social Media Marketing Firm.</p> */}
            </div>
            <div className="col-md-3 col-sm-12 ">
              <img src="images/block6.item.4fed_modifyP3.png" />
              {/* <h6>PHASE3</h6>
              <p>First big website Reskin.</p>
              <p>Full Game Release.</p>
              <p>Influencer Marketing Partnerships.</p>
              <p>More Games Added.</p> */}
            </div>
            <div className="col-md-3 col-sm-12">
              <img src="images/block6.item.4fed_modifyP4.png" />
              {/* <h6>PHASE4</h6>
              <p>First Major Exchange Listings.</p>
              <p>Real World Marketing Partnerships.</p>
              <p>Huge Social Media Campaigns.</p>
              <p>NYC Billboards.</p>
              <p>+ Much More to Come.</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}