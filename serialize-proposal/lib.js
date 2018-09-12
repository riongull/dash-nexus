module.exports = (proposalObj) => {
  const sortObj = (obj) => {
    let ordered = {};
    Object.keys(obj).sort().forEach(key => (ordered[key] = obj[key]));
    return ordered;
  };

  const sortedProposalObj = sortObj(proposalObj);
  const proposalString = `[[\"proposal\",${JSON.stringify(sortedProposalObj)}]]`;
  const proposalHex = Buffer.from(proposalString).toString('hex');
  return proposalHex;
};