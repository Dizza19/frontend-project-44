import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const RULES = 'What number is missing in the progression?';
const LENGTH = 10;

const generateRound = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 5);

  const progression = Array.from({ length: LENGTH }, (_, i) => start + i * step);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, String(hiddenValue)];
};

export default () => {
  playGame(RULES, generateRound);
};
