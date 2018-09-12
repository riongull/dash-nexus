const GovObject = require('@dashevo/dashcore-lib').GovObject;
const proposalInputs = require('../data').proposalInputs;
const serializeProposal = require('./lib');
const log = require('../utils').log;

const proposalDL = new GovObject(proposalInputs);

// serialize proposal using two different methods
const proposalHexNB = serializeProposal(proposalInputs); // using node buffer
const proposalHexDL = proposalDL.toString(); // using dashcore-lib

// check equality and log results
const check = (proposalHexNB === proposalHexDL);
log(proposalHexNB,'proposal hex (node buffer)');
log(proposalHexDL,'proposal hex (dashcore-lib)');
log(check, 'proposal hex equal?');