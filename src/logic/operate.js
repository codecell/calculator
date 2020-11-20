/* eslint linebreak-style: ["error", "windows"] */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  let inputA;
  let inputB;

  if (numberOne != null) {
    inputA = new Big(numberOne);
  }

  if (numberTwo != null) {
    inputB = new Big(numberTwo);
  }

  switch (operation) {
    case '+':
      result = inputB.plus(inputA);
      break;
    case '-':
      result = inputB.minus(inputA);
      break;
    case 'x':
      result = inputB.times(inputA);
      break;
    case '÷':
      result = inputB.div(inputA);
      break;
    case '%':
      result = inputA.div(100);
      break;
    case '+/-':
      result = inputA.times(-1);
      break;
    default:
      result = 0;
  }

  return result;
};

export default operate;
