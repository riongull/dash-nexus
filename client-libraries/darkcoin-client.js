const DarkcoinClient = require('darkcoin-client').DarkcoinClient;
const serializedProposal = require('../data').serializedProposal;
const darkcoinClientConfig = require('../data').darkcoinClientConfig;

const client = new DarkcoinClient(darkcoinClientConfig);
const js = (o) => JSON.stringify(o);

const callRPCM = async (method, params, callId) => {
  const response = await client.callRPCMethod(method, params, callId);
  return response.result; // `result` is the data returned by dashd
};

const callDash = async () => {
  const WIA = await client.getWalletInfo(); // wallet info A
  const WIB = await client.callRPCMethod('getwalletinfo', null, 1); // wallet info B
  const WIC = await callRPCM('getwalletinfo', null, 2); // wallet info C
  const equal = [js(WIA.result), js(WIB.result), js(WIC)].every((v, i, a) => v === a[0]); // true
  const info = await client.callRPCMethod('getinfo', null, 3); // example not-yet implemented method
  const check = await callRPCM('gobject', ['check', serializedProposal], 4);
  const deserialized = await callRPCM('gobject', ['deserialize', serializedProposal], 5);
  return { WIA, WIB, WIC, equal, info, check, deserialized };
};

callDash().then((r) => console.log(r));