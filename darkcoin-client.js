const DarkcoinClient = require("darkcoin-client").default;

const serializedProposal = require('./data').serializedProposal;
const darkcoinClientConfig = require('./data').darkcoinClientConfig;
const cl = require('./consolelog');

const client = new DarkcoinClient(darkcoinClientConfig);

// callRPCMethod(method, params, callId);
const params = ['check', serializedProposal]
client.callRPCMethod('gobject', params).then(res => cl(res.result, 'rpcGC', true)); //works

// client.callRPCMethod('getinfo').then(res => cl(res.result, 'rpcGI', true)); //works
// client.getWalletInfo().then(res => cl(res.result, 'walletInfo', true)); //works