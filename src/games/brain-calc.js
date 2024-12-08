import readlineSync from 'readline-sync';
import greetUser from '../cli.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const playCalculator = () => {
  const nameUser = greetUser();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(1, 30);
    const number2 = getRandomNumber(1, 30);

    const operators = ['+', '-', '*'];
    const randomIndex = getRandomIndex(operators);

    const operator = operators[randomIndex];
    const expression = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${expression}`);

    const answer = Number(readlineSync.question('Your answer: '));

    let correctAnswer;
    if (operator === '+') {
      correctAnswer = number1 + number2;
    } else if (operator === '-') {
      correctAnswer = number1 - number2;
    } else if (operator === '*') {
      correctAnswer = number1 * number2;
    }

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

export default playCalculator;
