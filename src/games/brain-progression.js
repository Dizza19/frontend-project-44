import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

// eslint-disable-next-line max-len
const generateProgression = (start, step, length) => Array.from({ length }, (_, i) => start + i * step);

const RULES = 'What number is missing in the progression?';

const generateRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(2, 5);
  const length = 10;
  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  playGame(RULES, generateRound);
};
