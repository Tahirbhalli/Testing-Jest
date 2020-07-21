/* eslint-disable no-extend-native */
const alpabets = 'abcdefghijklmnopqrstuvwxyz';
const uper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
String.prototype.Ceaser = function (shift) {
  let output = '';
  for (let i = 0; i < this.length; i += 1) {
    const index = alpabets.indexOf(this[i]);
    const index1 = uper.indexOf(this[i]);
    if (index !== -1) {
      output += alpabets[(index + shift) % 26];
    } else if (index1 !== -1) {
      output += uper[(index1 + shift) % 26];
    } else {
      output += this[i];
    }
  }
  return output;
};
