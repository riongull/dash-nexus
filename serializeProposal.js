const GovObject = require('@dashevo/dashcore-lib').GovObject;
const unsortedProposalInputs = require('./data').proposalInputs;
const cl = require('./consolelog');

function sortObj(obj) {
  let ordered = {};
  Object.keys(obj).sort().forEach(function(key) {
    ordered[key] = obj[key];
  });
  return ordered;
}
const proposalInputs = sortObj(unsortedProposalInputs);

// serialize proposal using node buffer
const proposalString = '[[proposal,' + JSON.stringify(proposalInputs) +']]';
const proposalBuffer = new Buffer(proposalString);
const proposalHex = proposalBuffer.toString('hex');

// serialize proposal using dashcore-lib
const govObject = new GovObject();
const proposalDL = govObject.fromObject(proposalInputs);
const proposalHexDL = proposalDL.toString();

cl(unsortedProposalInputs,'unsorted proposal input', true);
cl(proposalInputs,'proposal input', true);
cl(proposalString,'proposal string (node buffer)');
// cl(proposalBuffer,'proposal buffer (node buffer)', true);
cl(proposalHex,'proposal hex (node buffer)');
cl(proposalHexDL,'proposal hex (dashcore-lib)');

const check = (proposalHex === proposalHexDL);
cl(check, 'proposal hex equal?');


// test using darkcoin client
const DarkcoinClient = require("darkcoin-client").default;
const darkcoinClientConfig = require('./data').darkcoinClientConfig;

const client = new DarkcoinClient(darkcoinClientConfig);
async function callRPC(m, p, i) {
  let response = await client.callRPCMethod(m, p, i);
  return response.result;
};
let proposalStringDL = callRPC('gobject', ['deserialize', proposalHexDL]);
cl(proposalStringDL,'proposal string (dashcore-lib)', true);