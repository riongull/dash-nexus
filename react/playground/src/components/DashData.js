import React from 'react';
import DashdRPCClient from '@dashevo/dashd-rpc/promise';
import { DarkcoinClient } from 'darkcoin-client';
import { dashdConfig, darkcoinConfig, proxyConfig } from '../data';

const { protocol:pc, host:h, port:p } = proxyConfig;
const darkcoinProxyConfig = {...darkcoinConfig, url: `${pc}://${h}:${p}`};
const dashdProxyConfig = {...dashdConfig, ...proxyConfig};

const darkcoinClient = new DarkcoinClient(darkcoinProxyConfig);
const dashdClient = new DashdRPCClient(dashdProxyConfig);

export class DashData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      darkcoinClient,
      dashdClient,
      block1: {},
      walletInfo: {},
      info: {}
    }
  }

  fetchData = async () => {
    try {
      console.log(this.state);
      const dashOrgResponse = await fetch(this.props.apiPath);
      const block1 = await dashOrgResponse.json();
      const darkcoinClientResponse = await darkcoinClient.getWalletInfo(); // throwing CORS error
      const walletInfo = darkcoinClientResponse.result; // ignore til fixed
      const dashdRPCClientResponse = await dashdClient.getInfo(); // throwing CORS error
      const info = dashdRPCClientResponse.result; // ignore til fixed
  
      await this.setState({
        isLoading: false,
        block1,
        walletInfo, // ignore til fixed
        info, // ignore til fixed
      });
      
    } catch (error) {
      console.log(error);
    }
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