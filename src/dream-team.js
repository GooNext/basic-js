const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const names = Array.isArray(members) ? members.filter(elem => typeof (elem) === 'string') : [];

  if (names !== []) {
    let abbr = [];

    names.forEach(name => abbr.push(name.trim()[0].toUpperCase()));
    return abbr.sort().join('');
  }
  return false;
};
