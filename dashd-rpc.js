const RpcClient = require('@dashevo/dashd-rpc/promise');
const Proposal = require('@dashevo/dashcore-lib/lib/govobject').Proposal;
// const Proposal = require('./proposal-lib');

const dashdRPCConfig = require('./data').dashdRPCConfig;
const proposalInputs = require('./data').proposalInputs;
const governanceHash = require('./data').governanceHash;
const serializedProposal = require('./data').serializedProposal;
const cl = require('./consolelog');

const proposal = new Proposal(proposalInputs);
// cl(proposalInputs, 'input obj', true);
// cl(proposal, 'output hex');

const client = new RpcClient(dashdRPCConfig);

client.getInfo().then(res => cl(res.result, 'info', true)); // working
client.getBlockHash(1).then(res => cl(res.result, 'blockhash')); // working
// client.gobject(`get ${governanceHash}`).then(cl); // not working
// client.gobject(`deserialize ${serializedProposal}`).then(cl); // not working
// client.gobject(`prepare 0 1 ${time} ${data}`).then(cl); // not working - END GOAL!