const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const HALF_LIFE_COEFFICIENT= .693;

module.exports = function dateSample(sampleActivity) {
  const sampleNumber = Number.parseFloat(sampleActivity);
  if (typeof (sampleActivity) === 'string'
    && sampleNumber > 0
    && sampleNumber <= MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleNumber) * (HALF_LIFE_PERIOD / HALF_LIFE_COEFFICIENT));
  }
  return false;
};
