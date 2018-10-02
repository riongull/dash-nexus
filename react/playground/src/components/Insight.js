import React, { Component } from 'react'
import axios from 'axios'
import { proposalInputs } from "../data"

export class Insight extends Component {
  state = {
    block1: 'block1',
    utxos: 'utxos',
    info: 'info'
  };
  
  async componentDidMount() {
    // get some data using REST and fetch
    const url = 'http://insight.dash.org/api';
    const blockIndexCall = `${url}/block-index/1`
    const utxosCall = `${url}/addr/${proposalInputs.payment_address}/utxo`;
    const blockResponse = await axios.get(blockIndexCall);
    const utxosResponse = await axios.get(utxosCall);
    const block1 = blockResponse.data;
    const utxos = utxosResponse.data;
    this.setState({ block1, utxos });
  }
  
  render() {
    return (
      <div>
        <div>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    );
  }
}