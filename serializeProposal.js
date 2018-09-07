const Proposal = require('./proposal-lib');
const proposalInputs = require('./data').proposalInputs;
const cl = require('./consolelog');

const proposal = new Proposal(proposalInputs);

cl(proposalInputs, 'input obj', true);
cl(proposal, 'output hex');