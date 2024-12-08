import readlineSync from 'readline-sync';
import greetUser from '../cli.js';
import { getRandomNumber } from '../utils.js';

const findGCD = () => {
  const nameUser = greetUser();
  console.log('Find the greatest common divisor of given numbers.');

  const gcd = (x, y) => {
    let a = x;
    let b = y;
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(1, 49);
    const num2 = getRandomNumber(1, 49);

    const a = Math.max(num1, num2);
    const b = Math.min(num1, num2);

    console.log(`Question: ${a} ${b}`);

    const correctAnswer = gcd(a, b);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
};

export default findGCD;
