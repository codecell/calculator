/* eslint linebreak-style: ["error", "windows"] */

import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next === null) {
        next = buttonName;
      } else {
        next += buttonName;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (total === null) {
        /**
         * At this point the numbers
         */
        total = next;
      } else {
        total = operate(next, total, operation);
      }

      next = null;
      operation = buttonName;
      break;
    case '.':
      if (next === null) {
        next = '.';
      } else if (!next.includes('.')) {
        next += buttonName;
      }
      break;
    case '%':
    case '+/-':
      next = operate(next, total, buttonName);
      break;
    case '=':
      next = operate(next, total, operation);
      total = null;
      operation = null;
      break;
    case 'AC':
      next = null;
      total = null;
      operation = null;
      break;
    default:
      if (total === null) {
        total = next;
      } else {
        total = operate(next, total, '+');
      }
      next = null;
      operation = buttonName;
      break;
  }

  return data;
};

export default calculate;
