import React, { Component } from 'react';
import moment from 'moment'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mari Blacks Portfolio</h1>
        <div>{moment().format('MMM do YYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
