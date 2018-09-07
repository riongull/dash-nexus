module.exports = (data, id, stringify) => {
  id = id || 'data';
  stringify === undefined 
    ? console.log(`\n${id}: ${data} \n`)
    : console.log(`\n${id}: ${JSON.stringify(data, null, 2)}`)
};