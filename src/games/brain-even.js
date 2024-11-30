#!/usr/bin/env node
import greetUser from '../cli.js';
import readlineSync from 'readline-sync';

const playEven = () => {
  const nameUser = greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');


  for (let i = 0; i < 3; i+=1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const isEven =  number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (answer === correctAnswer) {
       console.log('Correct!');   
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${nameUser}!`);
        return;
    }
 }
 console.log(`Congratulations, ${nameUser}!`); 
};

export default playEven;

 





