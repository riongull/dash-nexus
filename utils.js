const log = (data, id, stringify) => {
  try {
    id = id || 'logged data';
    if (stringify == false) return console.log(`\n${id}: \n${data}\n`); 
    return console.log(`\n${id}: \n${JSON.stringify(data, null, 2)}\n`)
  } catch (error) {
    console.log(`Error in log function: ${error}`);
    return error;
  };
}

const sortObj = (obj) => {
  let ordered = {};
  Object.keys(obj).sort().forEach(key => (ordered[key] = obj[key]));
  return ordered;
};

module.exports = { log, sortObj };