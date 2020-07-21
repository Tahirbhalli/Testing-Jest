const Strings = (() => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const reverse = (str) => str.split('').reverse().join('');
  return {
    capitalize,
    reverse,
  };
})();
module.exports = Strings;
