import readlineSync from 'readline-sync';
import greetUser from '../cli.js';
import { getRandomNumber } from '../utils.js';

const playEven = () => {
  const nameUser = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
};

export default playEven;
