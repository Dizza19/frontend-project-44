import greetUser from '../cli.js';
import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const generateProgression = () => {
  const nameUser = greetUser();
  console.log('What number is missing in the progression?');

  for (let g = 0; g < 3; g += 1) {
    const start = getRandomNumber(1, 20);
    const step = getRandomNumber(1, 5);
    const length = 10;
    const array = [];

    for (let i = 0; i < length; i += 1) {
      const number = start + i * step;
      array.push(number);
    }

    const hiddenIndex = getRandomNumber(0, length - 1);
    const hiddenValue = array[hiddenIndex];
    array[hiddenIndex] = '..';

    console.log(`Question: ${array.join(' ')}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === hiddenValue) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
};

export default generateProgression;
