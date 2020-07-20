const Calculaor = (() => {
  const sum = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  return {
    sum,
    subtraction,
    multiply,
    divide,
  };
})();
module.exports = Calculaor;