const Strings = (() => {
  const capitalize = (str) => str.toUpperCase();
  const reverse = (str) => str.split('').reverse().join('');
  return {
    capitalize,
    reverse,
  };
})();
module.exports = Strings;
