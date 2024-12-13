import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const getGcd = (larger, smaller) => {
  let a = larger;
  let b = smaller;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 49);
  const number2 = getRandomNumber(1, 49);

  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, String(correctAnswer)];
};

export default () => {
  playGame(RULES, generateRound);
};
