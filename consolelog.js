module.exports = (data, id, stringify) => {
  id = id || 'data';
  stringify === undefined 
    ? console.log(`\n${id}: \n${data}\n`)
    : console.log(`\n${id}: \n${JSON.stringify(data, null, 2)}\n`)
};