import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Trainlist from './Components/trainchoice';
import Direction from './Components/chooseDirection';
import Findstop from './Components/findstop';
import Showtraintimes from './Components/show_trains';
import Refresh from './Components/refresh_trains';
class App extends Component {

  constructor(props) {
   super(props);
   let d = new Date()
   this.state = {
       response: [],
       newTrain: '',
       newTrainDirection1: '',
       newTrainDirection2: '',
       newTrainDirection: '',
       trackedTrains: [],
       trackedTrainDirections: [],
       trainNumbers: [],
       trackedDirectionbounds: [],
       directionBound: '',
        time: d.toLocaleTimeString()
     }

     this.countingSecond = this.countingSecond.bind(this);
  }

  countingSecond() {
    var i;
    var getResponse = [];
//    console.log(getResponse);
    for (i = 0; i < this.state.trackedTrains.length; i ++) {
      let reqBody = {
        train: this.state.trackedTrains[i],
        direction: this.state.trackedTrainDirections[i],
        trainnum:  this.state.trainNumbers[i],
        directionBound: this.state.trackedDirectionbounds[i]
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
                      getResponse.push(data);

                    })

    }
    setTimeout(function() {
      this.setState({ response: getResponse});
    }.bind(this), 1000);
  }

componentWillUpdate() {
    var localStorageState = this.state;
    localStorage.setItem('trackedTrains', localStorageState.trackedTrains);
    localStorage.setItem('trainNumbers', localStorageState.trainNumbers);
    localStorage.setItem('trackedTrainDirections', localStorageState.trackedTrainDirections);
    localStorage.setItem('response', localStorageState.response);
    localStorage.setItem('trackedDirectionbounds', localStorageState.trackedDirectionbounds);

}




componentWillMount() {
  setInterval(this.countingSecond, 50000)
  if (localStorage.trackedTrains) {
      var str = localStorage.trackedTrains;
      var str2 = localStorage.trainNumbers;
      var str3 = localStorage.trackedTrainDirections;
      var str4 = localStorage.response;
      var str5 = localStorage.trackedDirectionbounds;
      var res = str.split(",");
      var res2 = str2.split(",");
      var res3 = str3.split(",");
      var res4 = str4.split(",");
      var res5 = str5.split(",");
      this.setState({ trackedTrains: res })
      this.setState({ trainNumbers: res2 })
      this.setState({ trackedTrainDirections: res3 })
      this.setState({ response: res4 })
      this.setState({ trackedDirectionbounds: res5 })
  }
}

  showTrains = async () => {
    if (this.state.newTrain.length) {
      var hideTrainStops = "train" + this.state.newTrain;
      document.getElementById(hideTrainStops).style.display = "none";
    }
    document.getElementById("tL").style.display = "flex";
    document.getElementById("t").style.display = "block";
    document.getElementById("b2tL").style.display = "none";


}

  callApi = async (trainStop, trainNumber) => {
    var directionBound2 = this.state.directionBound;
    var trackedTrainsBound = this.state.trackedDirectionbounds.slice();
    trackedTrainsBound.push(directionBound2);
    var trackedTrainsArray = this.state.trackedTrains.slice();
    trackedTrainsArray.push(trainStop);

    if (this.state.newTrain.length) {
      var hideTrainStops = "train" + this.state.newTrain;
      document.getElementById(hideTrainStops).style.display = "none";
    }

    var trackedTrainName = this.state.trainNumbers.slice();
    trackedTrainName.push(this.state.newTrain);

    var trackedDirections = this.state.trackedTrainDirections.slice();
    trackedDirections.push(this.state.newTrainDirection);


    document.getElementById("tL").style.display = "none";
    document.getElementById("t").style.display = "none";
    document.getElementById("b2tL").style.display = "block";
    document.getElementById("b2tL").style.display = "block";

    var trainDirectionChoice = this.state.newTrainDirection;
    var getResponse = this.state.response;
    let reqBody = {
      train: trainStop,
      direction: trainDirectionChoice,
      trainnum: trainNumber,
      directionBound: directionBound2
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
                    var newArray = getResponse.slice();
                    newArray.push(data);
                    return newArray
                  })
                  .then(res => this.setState({ response: res }));
                  this.setState({ trainNumbers: trackedTrainName });
                  this.setState({ trackedTrainDirections : trackedDirections });
                  this.setState({ trackedTrains: trackedTrainsArray });
                  this.setState({ trackedDirectionbounds: trackedTrainsBound });

                  setTimeout(function() {
                    this.setState({ response: this.state.response});
                  }.bind(this), 1000);
        }






assign_newState(trainName) {
          document.getElementById("tL").style.display = "none";
          document.getElementById("t").style.display = "none";
          document.getElementById("chooseDirection").style.display = "block";
          switch(trainName) {
              case 'L':
                this.setState({ newTrainDirection1: "Manhattan-Bound" })
                this.setState({ newTrainDirection2: "Canarsie-Bound" })
                  break;
              case '6':
              this.setState({ newTrainDirection2: "CityHall-Bound" })
              this.setState({ newTrainDirection1: "Bronx-Bound" })
                  break;
              case '1':
                  this.setState({ newTrainDirection2: "South Ferry-Bound" })
                  this.setState({ newTrainDirection1: "Van Cortlandt Park-242-Bound" })
              break;
              default:
          }

          this.setState({ newTrain: trainName })
}

delete_train(trainItem) {
        var removeThisItem = trainItem + "-train-item";
        document.getElementById(removeThisItem).style.display = "none";
        var index;
        var array = this.state.response;
        index = array.indexOf(this.state.response[trainItem]);
        if (index > -1) {
          array.splice(index, 1);
        }
        this.setState({ response: array });

        var array2 = this.state.trackedTrains;
        index = array2.indexOf(this.state.trackedTrains[trainItem]);
        if (index > -1) {
          array2.splice(index, 1);
        }
        this.setState({ trackedTrains: array2 });

        var array3 = this.state.trainNumbers;
        index = array3.indexOf(this.state.trainNumbers[trainItem]);
        if (index > -1) {
          array3.splice(index, 1);
        }
        this.setState({ trainNumbers: array3 });

        var array4 = this.state.trackedTrainDirections;
        index = array4.indexOf(this.state.trackedTrainDirections[trainItem]);
        if (index > -1) {
          array4.splice(index, 1);
        }
        this.setState({ trackedTrainDirections: array4 });

        var array5 = this.state.trackedDirectionbounds;
        index = array5.indexOf(this.state.trackedDirectionbounds[trainItem]);
        if (index > -1) {
          array5.splice(index, 1);
        }
        this.setState({ trackedTrainDirections: array5 });
}

assign_newStateDirection(direction , directionBoundforAPI) {
          var test6 = "train" + this.state.newTrain;
          document.getElementById("chooseDirection").style.display = "none";
          document.getElementById(test6).style.display = "block";
          this.setState({ newTrainDirection: direction});
          this.setState({ directionBound : directionBoundforAPI});
}

  render() {

    return (
      <div className="wrapper">
        <div className="App">
          <Header />

          <Showtraintimes delete_train={this.delete_train.bind(this)} trainchoice = {this.state}/>

          <Refresh countingSecond={this.countingSecond.bind(this)} response= {this.state.response}/>

          <Trainlist assign_newState={this.assign_newState.bind(this)} trainchoice = {this.state}/>

          <Direction assign_newStateDirection={this.assign_newStateDirection.bind(this)} trainchoice = {this.state}/>

          <Findstop callApi={this.callApi.bind(this)} trainchoice = {this.state}/>


            <div onClick={this.showTrains} className="train-list2" id="b2tL">
              Add More Trains
            </div>

        </div>
        <div className="footer">

        </div>
      </div>
    );
  }
}

export default App;
