import greetUser from '../cli.js';
import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const findGCD = () => {
  const nameUser = greetUser();
  console.log('Find the greatest common divisor of given numbers.');

  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  for (let i = 0; i < 3; i += 1) {
    let a = getRandomNumber(1, 49);
    let b = getRandomNumber(1, 49);

    if (a < b) {
      let temp = a;
      a = b;
      b = temp;
    }

    console.log(`Question: ${a} ${b}`);

    const correctAnswer = gcd(a, b);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
};

export default findGCD;
