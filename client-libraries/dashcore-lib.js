const dashcore = require('@dashevo/dashcore-lib');

const phrase = new Buffer.from('correct horse battery staple');
const hash = dashcore.crypto.Hash.sha256(phrase);
const bn = dashcore.crypto.BN.fromBuffer(hash);
const address = new dashcore.PrivateKey(bn).toAddress();

console.log(`Address for "${phrase}": ${address}`);