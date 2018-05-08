import React, { Component } from 'react';
import '../../src/App.css';

export default class Direction extends Component {

  render() {
    return (
      <div id="chooseDirection">
        <p>{this.props.trainchoice.newTrain} Train:</p>
        <p>Which Direction are you going in?</p>
        <div className="directionWrap">
          <div onClick={event => this.props.assign_newStateDirection('N', this.props.trainchoice.newTrainDirection1)} className="train"> {this.props.trainchoice.newTrainDirection1}</div>
          <div onClick={event => this.props.assign_newStateDirection('S', this.props.trainchoice.newTrainDirection2)} className="train"> {this.props.trainchoice.newTrainDirection2}</div>
        </div>
      </div>
    );
  }
}
