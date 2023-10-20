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
    "Please provide instructions and examples for use:",
    "Please explain how others can contribute:",
    "Explain to the users the test you conducted for this project:",
    "Please choose your license:",
];

// deconstructed 'questions' here
const [title, motivation, why, what, learn, install, usage, contribute, test, license] = questions;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use fs here
}

// TODO: Create a function to initialize app
function init() {
    console.log(`Please write your answers in full sentences.`);
    inquirer.prompt([
        {
            type: 'input',
            message: title,
            name: 'title',
        },
        {
            type: 'input',
            message: motivation,
            name: 'motivation',
        },
        {
            type: 'input',
            message: why,
            name: 'why',
        },
        {
            type: 'input',
            message: what,
            name: 'what',
        },
        {
            type: 'input',
            message: learn,
            name: 'learn',
        },
        {
            type: 'input',
            message: install,
            name: 'install',
        },
        {
            type: 'input',
            message: usage,
            name: 'usage',
        },
        {
            type: 'input',
            message: contribute,
            name: 'contribute',
        },
        {
            type: 'input',
            message: test,
            name: 'test',
        },
        {
            type: 'list',
            message: license,
            name: 'license',
            choices: ['1', '2', '3'],
        }
    ])
    .then((answers) => {
        


        // call the function writeToFile here
    })
}

// Function call to initialize app
init();