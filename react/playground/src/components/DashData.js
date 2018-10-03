import React from 'react';
import DashdRPCClient from '@dashevo/dashd-rpc/promise';
import { DarkcoinClient } from 'darkcoin-client';
import { dashdRPCConfig, darkcoinClientConfig } from '../data';

const darkcoinClient = new DarkcoinClient(darkcoinClientConfig);
const dashdRPCClient = new DashdRPCClient(dashdRPCConfig);

export class DashData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      darkcoinClient,
      dashdRPCClient,
      block1: {},
      info: {},
      walletInfo: {}
    }
  }

  fetchData = async () => {
    console.log(this.state);
    console.log(this.props)
    const dashOrgResponse = await fetch(this.props.apiPath);
    const block1 = await dashOrgResponse.json();
    const dashdRPCClientResponse = await dashdRPCClient.getInfo(); // throwing CORS error
    const info = dashdRPCClientResponse.result; // ignore til fixed
    // const darkcoinClientResponse = await darkcoinClient.getWalletInfo(); // throwing CORS error
    // const walletInfo = darkcoinClientResponse.result; // ignore til fixed

    await this.setState({
      isLoading: false,
      block1,
      info, // ignore til fixed
      // walletInfo, // ignore til fixed
    });
  }

  componentDidMount() {
    this.setState({ isLoading: true }, this.fetchData);
  }

  render() {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    );
  }
}