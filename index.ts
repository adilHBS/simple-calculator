#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: 'number',
        name : 'num1',
        message : 'Enter your First Number :',
    },
    {
        type: 'number',
        name : 'num2',
        message : 'Enter your Secont Number :',
    },
    {
        type: 'list',
        name : 'operators',
        message : 'Chose one of These Operators to perform action',
        choices : ["Addition", "Subtraction", "Multiplication", "Dividation", "Modulus", "Exponential" , "BMI"],
    },
]);


if(answer.operators === "Addition") {
    console.log(`Your Answer is ${answer.num1 + answer.num2}`);
} else if(answer.operators === "Subtraction") {
    console.log(`Your Answer is ${answer.num1 - answer.num2}`);
} else if(answer.operators === "Multiplication") {
    console.log(`Your Answer is ${answer.num1 * answer.num2}`);
} else if(answer.operators === "Dividation") {
    console.log(`Your Answer is ${answer.num1 / answer.num2}`);
} else if(answer.operators === "Modulus") {
    console.log(`Your Answer is ${answer.num1 % answer.num2}`);
} else if(answer.operators === "Exponential") {
    console.log(`Your Answer is ${answer.num1 ** answer.num2}`);
} else if(answer.operators === "BMI") {
    console.log(`Your Answer is ${answer.num1  / (answer.num2 * answer.num2)}kg`);
} else {
    console.log("Please Enter a Valid Number")
};