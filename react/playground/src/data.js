module.exports = {
  darkcoinClientConfig: {
    url: 'http://149.28.243.63:9998',
    user: '790a68db81a7295549bb00dcbfe660bd3f4b3e71928476e6bc8253b770388383',
    password: 'ee87f005f484029ce4f39d3a8fcb9ed84f54ad78b98ebe1241980ecc020dc879'
  },
  dashdRPCConfig: {
    protocol: 'http',
    host: '149.28.243.63',
    port: 9998,
    user: '790a68db81a7295549bb00dcbfe660bd3f4b3e71928476e6bc8253b770388383',
    pass: 'ee87f005f484029ce4f39d3a8fcb9ed84f54ad78b98ebe1241980ecc020dc879'
  },
  governanceHash: '42253a7bec554b97a65d2889e6cb9a1cf308b3d47a778c704bf9cdc1fe1bf6ff',
  proposalInputs: {
    name: "FirstProposal", // tried "My First GovObject" but dashd doesn't like spaces
    start_epoch: 1536969600,
    end_epoch: 1539561600, // valid only if end_epoch > now_epoch
    payment_address: 'Xbg6grTQp6PKdGeo8T1fsK5bPp1ws5oDas',
    payment_amount: 10,
    type: 1, // Type 1 will cast a proposal
    url: "http://www.dash.org/proposal/first_proposal"
  },
  serializedProposal: '5b5b2270726f706f73616c222c7b22656e645f65706f6368223a313533393536313630302c226e616d65223a22466972737450726f706f73616c222c227061796d656e745f61646472657373223a2258626736677254517036504b6447656f38543166734b35625070317773356f446173222c227061796d656e745f616d6f756e74223a31302c2273746172745f65706f6368223a313533363936393630302c2274797065223a312c2275726c223a22687474703a2f2f7777772e646173682e6f72672f70726f706f73616c2f66697273745f70726f706f73616c227d5d5d',
};