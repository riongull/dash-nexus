const DashdRPCClient = require('@dashevo/dashd-rpc/promise');
const dashdRPCConfig = require('../data').dashdRPCConfig;

const dashdRPCClient = new DashdRPCClient(dashdRPCConfig);

dashdRPCClient.getInfo().then(res => console.log('info:', res.result, '\n'));
dashdRPCClient.getBlockHash(1).then(res => console.log('block:', res.result, '\n'));