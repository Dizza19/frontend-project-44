import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const RULES = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];
const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const operator = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculateExpression(number1, number2, operator));

  return [question, correctAnswer];
};

export default () => {
  playGame(RULES, generateRound);
};
