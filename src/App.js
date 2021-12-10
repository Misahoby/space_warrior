import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Characters from './components/Characters';
import Tokenomics from  './components/Tokenomics';
import Team from "./components/Team";
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Application from './components/Application';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Application />
        <Characters />
        <Tokenomics resumeData={resumeData}/>
        <Team/>
        <Roadmap />
        <Footer />
      </div>
    );
  }
}

export default App;