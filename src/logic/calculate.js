/* eslint linebreak-style: ["error", "windows"] */

import operate from './operate';

const calculate = (data, buttonName) => {
  const mutatedData = {
    total: data.total,
    next: data.next,
    operation: data.operation,
  };

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
      if (mutatedData.next === null) {
        mutatedData.next = buttonName;
      } else {
        mutatedData.next += buttonName;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (mutatedData.total === null) {
        /**
         * At this point the numbers
         */
        mutatedData.total = mutatedData.next;
      } else {
        mutatedData.total = operate(mutatedData.next, mutatedData.total, mutatedData.operation);
      }

      mutatedData.next = null;
      mutatedData.operation = buttonName;
      break;
    case '.':
      if (mutatedData.next === null) {
        mutatedData.next = '.';
      } else if (!mutatedData.next.includes('.')) {
        mutatedData.next += buttonName;
      }
      break;
    case '%':
    case '+/-':
      mutatedData.next = operate(mutatedData.next, mutatedData.total, buttonName);
      break;
    case '=':
      mutatedData.next = operate(mutatedData.next, mutatedData.total, mutatedData.operation);
      mutatedData.total = null;
      mutatedData.operation = null;
      break;
    case 'AC':
      mutatedData.next = null;
      mutatedData.total = null;
      mutatedData.operation = null;
      break;
    default:
      if (mutatedData.total === null) {
        mutatedData.total = mutatedData.next;
      } else {
        mutatedData.total = operate(mutatedData.next, mutatedData.total, '+');
      }
      mutatedData.next = null;
      mutatedData.operation = buttonName;
      break;
  }

  return mutatedData;
};

export default calculate;
