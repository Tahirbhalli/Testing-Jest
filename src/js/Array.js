/* eslint-disable no-extend-native */

Array.prototype.min = function () {
  let min = this[0];
  for (let i = 1; i < this.length; i += 1) {
    if (min > this[i]) {
      min = this[i];
    }
  }
  return min;
};
Array.prototype.max = function () {
  let max = this[0];
  for (let i = 1; i < this.length; i += 1) {
    if (max < this[i]) {
      max = this[i];
    }
  }
  return max;
};
Array.prototype.avg = function () {
  let sum = 0;
  for (let index = 0; index < this.length; index += 1) {
    sum += this[index];
  }
  return sum / this.length;
};
