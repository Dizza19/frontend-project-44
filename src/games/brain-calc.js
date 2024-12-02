#!/usr/bin/env node
import greetUser from '../cli.js';
import readlineSync from 'readline-sync';

const playCalculator = () => {
    const nameUser = greetUser();
    
    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i+=1) {
    const number1 = Math.floor(Math.random() * 30); 
    const number2 = Math.floor(Math.random() * 30);
     
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length); 

    const operator = operators[randomIndex];
    const expression = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${expression}`);

    const answer = Number(readlineSync.question('Your answer: '));

    let correctAnswer;

    if (operator === '+') {
        correctAnswer = number1 + number2;
    }else if (operator === '-') {
            correctAnswer = number1 - number2;
    }else if (operator === '*') {
            correctAnswer = number1 * number2;
            }

    if (Math.abs(answer) === Math.abs(correctAnswer)) {
        console.log('Correct!')
    }else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${nameUser}!`);
        return;
    }
    }
    console.log(`Congratulations, ${nameUser}!`); 
}
export default playCalculator;


