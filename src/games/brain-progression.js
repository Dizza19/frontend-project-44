#!/usr/bin/env node
import greetUser from '../cli.js';
import readlineSync from 'readline-sync';

const generateProgression = () => {
  const nameUser = greetUser();

  console.log('What number is missing in the progression?');
  
  for (let g = 0; g < 3; g += 1) {
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const length = 10;
    const array = [];

    // Генерация прогрессии
    for (let i = 0; i < length; i += 1) {
      const number = start + i * step;
      array.push(number);
    }

    // Скрываем один элемент прогрессии
    const hiddenIndex = Math.floor(Math.random() * length);
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
