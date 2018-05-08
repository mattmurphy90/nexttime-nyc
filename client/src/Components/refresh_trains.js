import React, { Component } from 'react';

export default class Refresh extends Component {


  render() {
    if (this.props.response.length > 0) {
      return (
        <div className="refresh" onClick={event => this.props.countingSecond()}>
          Refresh Live Trains
        </div>
      );
    } else {
      return (
        <span></span>
      );
    }
  }
}
