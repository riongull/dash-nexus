module.exports.log = (data, id, stringify) => {
  id = id || 'data';
  stringify === undefined 
    ? console.log(`\n${id}: \n${data}\n`)
    : console.log(`\n${id}: \n${JSON.stringify(data, null, 2)}\n`)
};

module.exports.sortObj = (obj) => {
  let ordered = {};
  Object.keys(obj).sort().forEach(key => (ordered[key] = obj[key]));
  return ordered;
};