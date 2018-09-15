const axios = require('axios');
const proposalInputs = require('../data').proposalInputs;
const address = require('../data').proposalInputs.payment_address;
const serializeProposal = require('../serialize-proposal/lib');
const log = require('../utils').log;

const serializedProposal = serializeProposal(proposalInputs);

const callInsight = async (apiCall) => {
  let response = await axios.get(apiCall);
  const data = response.data;
  log(data, 'data', true);
  return data;
};
// sample of API
const url = 'http://insight.dash.org/api';
const utxos = `${url}/addr/${address}/utxo`;
const blockIndex = `${url}/block-index/${0}`;
const gobjectCheck = `${url}/gobject/check/${serializedProposal}`;
const gobjectDeserialize = `${url}/gobject/deserialize/${serializedProposal}`;

try {
  callInsight(gobjectDeserialize);
} catch (error) {
  log(error,'Error in main!');
}