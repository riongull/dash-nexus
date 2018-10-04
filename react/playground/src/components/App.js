import React, { Component } from 'react'
import { DashDataConsumer } from './DashDataConsumer';
// import { Insight } from './Insight';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Dash React Playground</h1>
        </header>
        <div>
          <p>Data from DashData component:</p>
          <DashDataConsumer/>
          {/* <p>Data from dash.org insight API:</p>
          <Insight/> */}
        </div>
      </div>
    );
  }
}