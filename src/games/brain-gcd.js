import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const gcd = (larger, smaller) => {
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
  const num1 = getRandomNumber(1, 49);
  const num2 = getRandomNumber(1, 49);

  const largerNumber = Math.max(num1, num2);
  const smallerNumber = Math.min(num1, num2);

  const question = `${largerNumber} ${smallerNumber}`;
  const correctAnswer = gcd(largerNumber, smallerNumber);
  return [question, String(correctAnswer)];
};

export default () => {
  playGame(RULES, generateRound);
};
