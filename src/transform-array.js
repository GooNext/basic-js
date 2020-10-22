const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error(); }
  if (arr.length === 0) { return arr; }

  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-prev") {
      resArr.pop();

    } else if (arr[i] === "--double-next") {
        if (arr[i + 1] !== undefined)
          { resArr.push(arr[i + 1]); }

    } else if (arr[i] === "--double-prev") {
        if (arr[i - 1] !== undefined)
          { resArr.push(arr[i - 1]); }

    } else if (arr[i] === "--discard-next") {
        if (arr[i + 2] && arr[i + 2].toString().includes('-prev'))
          { i += 2; }
        else
          { i += 1; }

    } else {
      resArr.push(arr[i]);
    }
  }
  return resArr;
};
