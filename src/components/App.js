/* eslint linebreak-style: ["error", "windows"] */

import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    let data = this.state;
    data = calculate(data, buttonName);
    const { total, next, operation } = data;

    this.setState(prev => ({
      ...prev, total, next, operation,
    }));
  }

  render() {
    const { operation, next } = this.state;
    return (
      <div className="App-header">
        <h1 className="header">CALCULATE PRO</h1>
        <Display sign={operation} result={Number(next).toFixed(2)} />
        <ButtonPanel onBtnClick={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default App;
