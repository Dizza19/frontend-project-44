import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const playGame = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
