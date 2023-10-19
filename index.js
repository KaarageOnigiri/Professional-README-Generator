// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An object containing HTML file:
const readmePage = ``;

// TODO: Create an array of questions for user input
const questions = [
    "What would you like your project to be called?",
    "What's your motivation for doing this project?",
    "Why did you build this project?",
    "What does this project do?",
    "What did you learn from doing this project?",
    "Provide a step-by-step instructions on how to install this program:",
];

// deconstruct 'questions' here for fun

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(q) {
    console.log(`Please write your answers in full sentence.`);
    inquirer.prompt([
        {
            type: 'input',
            message: q[0],
            name: 'projectName',
        },
        {
            type: 'input',
            message: q[1],
            name: 'motivation',
        },
        {
            type: 'input',
            message: q[2],
            name: 'why',
        },
        {
            type: 'input',
            message: q[3],
            name: 'function',
        },
        {
            type: 'input',
            message: q[4],
            name: 'learn',
        },
        {
            type: 'input',
            message: q[5],
            name: 'installGuide',
        }
    ])
}

// Function call to initialize app
init(questions);
