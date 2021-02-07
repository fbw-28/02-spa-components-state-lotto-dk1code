import React, { Component } from "react";

import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      numberSet: [1,2,3,4,5,6],
      bonusNum: 0
    };
  }

  numGenerator = () => {
    const numberSet = this.state.numberSet.map(num => num = Math.floor(Math.random() * 49) + 1)
    const bonusNum = Math.floor(Math.random() * 9) + 1
    this.setState({isRunning: true, numberSet, bonusNum})

  }

  resetHandle = () =>
    this.setState({isRunning: false});


  render() {
    return (
      <div>
        <h1>Lotto 6 / 49</h1>
        <h2>Generating lucky numbers</h2>
        {this.state.isRunning ? <div className="numbersContainer">
          {this.state.numberSet.map(num => <div className="flex-item"><p>{num}</p></div>)}
          <div className="flex-item blue-background"><p>{this.state.bonusNum}</p></div>
        </div> : null}
        <div className="numbersContainer">
          <button onClick={this.resetHandle}>Reset</button>
          <button className="blue-background" onClick={this.numGenerator}>Show me lucky numbers</button>
        </div>
      </div>
    );
  }
}
