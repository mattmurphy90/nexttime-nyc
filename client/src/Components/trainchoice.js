import React, { Component } from 'react';
import '../../src/App.css';


export default class Trainlist extends Component {

callApi = async (trainStop) => {
   document.getElementById("tL").style.display = "none";
   document.getElementById("t").style.display = "none";
   document.getElementById("b2tL").style.display = "block";
   var trainDirectionChoice = this.state.newTrainDirection;
   var getResponse = this.state.response;
   let reqBody = {
     train: trainStop,
     direction: trainDirectionChoice,
};
             fetch("/test3", {
                   method: 'POST',

                   body: JSON.stringify(reqBody),
                   headers: {
                     'Content-Type': 'application/json'
                   }
                 })
                 .then(function(res){ return res.json(); })
                 .then(function(data){
                   console.log(getResponse);
                   var newArray = getResponse.slice();
                   newArray.push(data);
                   return newArray
                 })
                 .then(res => this.setState({ response: res }))
}


  render() {
    return (
      <div>
        <p className="App-intro" id="t">Choose a Train to Track</p>
        <div className="train-list" id="tL">

          <div onClick={event => this.props.assign_newState('L')} className="train">  <img src="https://i.pinimg.com/originals/21/31/82/21318277854c0c30da9d4503b003f384.jpg" alt="L TRAIN" /></div>
          <div className="train">  <img src="https://4vector.com/i/free-vector-train-clip-art_109906_Train_clip_art_hight.png" alt="1 TRAIN" /></div>
          <div onClick={event => this.props.assign_newState('6')} className="train">  <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/NYCS-bull-trans-6.svg/400px-NYCS-bull-trans-6.svg.png" alt="6 TRIN" /></div>
        </div>
      </div>
    );
  }
}
