import playGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rules = 'What is the result of the expression?';

const generateRound = () => {
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomIndex(operators);
  const operator = operators[randomIndex];

  const question = `${number1} ${operator} ${number2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = String(number1 + number2);
      break;
    case '-':
      correctAnswer = String(number1 - number2);
      break;
    case '*':
      correctAnswer = String(number1 * number2);
      break;
    default:
      throw new Error('Unknown operator');
  }

  return [question, correctAnswer];
};

export default () => playGame(rules, generateRound);
