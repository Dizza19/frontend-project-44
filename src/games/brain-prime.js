#!/usr/bin/env node
import greetUser from '../cli.js';
import readlineSync from 'readline-sync';

const isPrime = (number) => {
    // Проверяем, простое ли число
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) return false;
    }
    return true;

}

const primeNumber = () => {
    const nameUser = greetUser();
    
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    
    for (let i = 0; i < 3;  i+=1) {
        const number = Math.floor(Math.random() * 20) + 1;
    
    console.log(`Question: ${number}`);

    const userAnswer = (readlineSync.question('Your answer: '));

    const correctAnswer = isPrime(number) ? 'yes' : 'no';


    if (userAnswer === correctAnswer ){
        console.log('Correct!'); 
    }else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${nameUser}!`);
        return;
    }
}
    console.log(`Congratulations, ${nameUser}!`);
}   
export default primeNumber;