const RpcClient = require('@dashevo/dashd-rpc/promise');
// const Proposal = require('@dashevo/dashcore-lib/lib/govobject').Proposal;
// const Proposal = require('./proposal-lib');

const dashdRPCConfig = require('../data').dashdRPCConfig;
// const proposalInputs = require('../data').proposalInputs;
// const governanceHash = require('../data').governanceHash;
// const serializedProposal = require('../data').serializedProposal;
const log = require('../utils').log;

// const proposal = new Proposal(proposalInputs);
// log(proposalInputs, 'input obj', true);
// log(proposal, 'output hex');

const client = new RpcClient(dashdRPCConfig);

client.getInfo().then(res => log(res.result, 'info', true)); // working
client.getBlockHash(1).then(res => log(res.result, 'blockhash')); // working
// client.gobject(`get ${governanceHash}`).then(log); // not working
// client.gobject(`deserialize ${serializedProposal}`).then(log); // not working
// client.gobject(`prepare 0 1 ${time} ${data}`).then(log); // not working // not working