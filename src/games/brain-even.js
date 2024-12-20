import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(RULES, generateRound);
