import React, { Component } from 'react';
import '../../src/App.css';

export default class Header extends Component {


  render() {
    // var getResponses = this.state.response;
    // var getResponsesList = getResponses.map(function(getResponse){
    //                 return <p key={getResponse}>{getResponse}</p>;
    //               })
    // return  <div>{ getResponsesList }</div>

    return (
      <header className="App-header">
        <h1 className="App-title">NEXT TIME</h1>
        <img src="https://i.pinimg.com/originals/21/31/82/21318277854c0c30da9d4503b003f384.jpg" className="App-logo" alt="logo" />
        <img src="https://4vector.com/i/free-vector-train-clip-art_109906_Train_clip_art_hight.png" className="App-logo" alt="logo" />
        <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/NYCS-bull-trans-6.svg/400px-NYCS-bull-trans-6.svg.png" className="App-logo" alt="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/C_Train_%281985-1987%29.svg/1024px-C_Train_%281985-1987%29.svg.png" className="App-logo" alt="logo" />
      </header>
    );
  }
}
