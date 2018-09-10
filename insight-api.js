const axios = require('axios');
const url = 'http://insight.dash.org/api';

// const proposalInputs = require('./data').proposalInputs;
const serializedProposal = require('./data').serializedProposal;
const address = require('./data').proposalInputs.payment_address;
const log = require('./utils');

// API
const gobjectCheck = `${url}/gobject/check/${serializedProposal}`;
const blockIndex = `${url}/block-index/${0}`;
const utxos = `${url}/addr/${address}/utxo`;

// axios.get(blockIndex).then(res => log(res.data, 'apiResponse', true)); // works
// axios.get(utxos).then(res => log(res.data, 'apiResponse', true));  // works
axios.get(gobjectCheck).then(res => log(res.data, 'apiResponse', true));  // works