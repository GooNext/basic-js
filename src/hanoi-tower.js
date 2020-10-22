const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const resObj = {
    turns: 0,
    seconds: 0,
  };

  resObj.turns = 2 ** disksNumber - 1;
  resObj.seconds = Math.floor(3600 / turnsSpeed * resObj.turns);
  return resObj;
};
