const GovObject = require('@dashevo/dashcore-lib').GovObject;
const DarkcoinClient = require("darkcoin-client").default;
const darkcoinClientConfig = require('./data').darkcoinClientConfig;
const unsortedProposalInputs = require('./data').proposalInputs;
const log = require('./utils').log;
const sortObj = require('./utils').sortObj;

const client = new DarkcoinClient(darkcoinClientConfig);
const callRPC = async (m, p, i) => await client.callRPCMethod(m, p, i);

// serialize proposal using node buffer
const proposalInputs = sortObj(unsortedProposalInputs);
const proposalString = `[[\"proposal\",${JSON.stringify(proposalInputs)}]]`;
const proposalHex = new Buffer(proposalString).toString('hex');

// serialize proposal using dashcore-lib
const proposalDL = new GovObject(proposalInputs);
const proposalHexDL = proposalDL.toString();
const proposalStringDL = callRPC('gobject', ['deserialize', proposalHexDL]);

const check = (proposalHex === proposalHexDL);
log(unsortedProposalInputs,'unsorted proposal input', true);
log(proposalInputs,'proposal input', true);
log(proposalString,'proposal string (node buffer)');
log(proposalStringDL,'proposal string (dashcore-lib)');
log(proposalHex,'proposal hex (node buffer)');
log(proposalHexDL,'proposal hex (dashcore-lib)');
log(check, 'proposal hex equal?');