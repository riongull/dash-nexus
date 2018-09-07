const DarkcoinClient = require("darkcoin-client").default;

const serializedProposal = require('./data').serializedProposal;
const darkcoinClientConfig = require('./data').darkcoinClientConfig;
const cl = require('./consolelog');

const client = new DarkcoinClient(darkcoinClientConfig);

// callRPCMethod(method, params, callId);
const params = {'data-hex': serializedProposal};
client.callRPCMethod('gobject check', params).then(res => cl(res.result, 'rpcGC', true));

// client.callRPCMethod('getinfo').then(res => cl(res.result, 'rpcGI', true)); //works
// client.getWalletInfo().then(res => cl(res.result, 'walletInfo', true)); //works
