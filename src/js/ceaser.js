/* eslint-disable no-extend-native */
const alpabets = 'abcdefghijklmnopqrstuvwxyz';
String.prototype.Ceaser = function (shift) {
  const lowercase = this.toLowerCase();
  let output = '';
  for (let i = 0; i < this.length; i += 1) {
    let index = alpabets.indexOf(this[i]);
    output += alpabets[(index + shift) % 26];
  }
  return output;
};
