import React, { Component } from 'react';

export default class Showtraintimes extends Component {


  render() {
    let items = this.props.trainchoice.response;
    return (
      <div className="trainsShown">
        {items.map((item, index) =>
          <div  className="shownTrainItem" id={index + "-train-item"} key={item + index}>
            <div className={"trainName" + this.props.trainchoice.trainNumbers[index] + " trainName" }>{this.props.trainchoice.trainNumbers[index]}</div>
            <div  className="train-text">{item}</div>
            <div className="x-out"><img onClick={event => this.props.delete_train(event.target.id)} id={index} src="https://png.icons8.com/ios/1600/xbox-x.png" alt="close-window"/></div>
          </div>
        )}
      </div>
    );
  }
}
