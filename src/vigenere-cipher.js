const CustomError = require("../extensions/custom-error");

const ALFABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let messageCharCode;
let keyCharCode;
let newCharCode;

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    const arrayKey = [];
    const arrayRes = [];
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();

    for (let i = 0; i < this.key.length; i++) {
      arrayKey.push(ALFABET.indexOf(this.key[i]));
    }

    for (let j = 0, k = 0; j < this.message.length; j++, k++) {
      if (!/[A-Z]/.test(this.message[j])) {
        arrayRes.push(this.message[j]);
        k -= 1;
        continue;
      }
      messageCharCode = ALFABET.indexOf(this.message[j]);
      keyCharCode = (k < arrayKey.length) ? arrayKey[k] : arrayKey[k % arrayKey.length];
      newCharCode = (messageCharCode + keyCharCode >= 26)
        ? messageCharCode + keyCharCode - 26
        : messageCharCode + keyCharCode;

      arrayRes.push(ALFABET[newCharCode]);
    }
    return this.mode ? arrayRes.join('') : arrayRes.reverse().join('');
  }

  decrypt(message, key) {
    const arrayKey = [];
    const arrayRes = [];
    let messageCharCode;
    let keyCharCode;
    let newCharCode;
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();

    for (let i = 0; i < this.key.length; i++) {
      arrayKey.push(ALFABET.indexOf(this.key[i]));
    }

    for (let j = 0, k = 0; j < this.message.length; j++, k++) {
      if (!/[A-Z]/.test(this.message[j])) {
        arrayRes.push(this.message[j]);
        k -= 1;
        continue;
      }
      messageCharCode = ALFABET.indexOf(this.message[j]);
      keyCharCode = (k < arrayKey.length) ? arrayKey[k] : arrayKey[k % arrayKey.length];
      newCharCode = (messageCharCode - keyCharCode >= 0)
        ? messageCharCode - keyCharCode
        : messageCharCode - keyCharCode + 26;

      arrayRes.push(ALFABET[newCharCode]);
    }
    return this.mode ? arrayRes.join('') : arrayRes.reverse().join('');
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = VigenereCipheringMachine;
