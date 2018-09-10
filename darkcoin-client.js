const DarkcoinClient = require("darkcoin-client").default;

const serializedProposal = require('./data').serializedProposal;
const darkcoinClientConfig = require('./data').darkcoinClientConfig;
const log = require('./utils');

const client = new DarkcoinClient(darkcoinClientConfig);

// callRPCMethod(method, params, callId);
const params = ['check', serializedProposal];
client.callRPCMethod('gobject', params).then(res => log(res.result, 'rpcGC', true)); //works

// client.callRPCMethod('getinfo').then(res => log(res.result, 'rpcGI', true)); //works
// client.getWalletInfo().then(res => log(res.result, 'walletInfo', true)); //works