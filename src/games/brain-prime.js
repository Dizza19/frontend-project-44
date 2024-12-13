import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) return false;
  const sqrtN = Math.sqrt(n);
  for (let i = 2; i <= sqrtN; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 20);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;
  return [question, correctAnswer];
};

export default () => {
  playGame(RULES, generateRound);
};
