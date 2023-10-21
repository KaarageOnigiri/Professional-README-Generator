// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// global variable for storing user's answers
var titleAnswer;
var motivationAnswer;
var whyAnswer;
var whatAnswer;
var learnAnswer;
var installAnswer;
var usageAnswer;
var contributeAnswer;
var testAnswer;
var licenseAnswer;

// An object containing HTML file:
const readmePage = `# ${titleAnswer}

## Description

- Q: Motivation 
- Q: Why did you build this project?
- Q: What does it do?
- Q: What did you learn?

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

## Usage

## License

- Q: (USE LIST)

## Contributing

## Tests

## Questions

To reach me, click on my email link:`;

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
    // assign the data to the global variables
    titleAnswer = data.title;
    motivationAnswer = data.motivation;
    whyAnswer = data.why;
    whatAnswer = data.what;
    learnAnswer = data.learn;
    installAnswer = data.install;
    usageAnswer = data.usage;
    contributeAnswer = data.contribute;
    testAnswer = data.test;
    licenseAnswer = data.license;
    // use fs here
    fs.writeFile(fileName, readmePage, (error, response) => {
        error ? console.log(error, response) : console.log("README file in test folder created successfully")
    });
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
            choices: ['License: CC0-1.0', 'License: GPL v3', 'License: Hippocratic 2.1', 'License: IPL 1.0'],
        }
    ])
    .then((answers) => {
        // call the function writeToFile here
        writeToFile('./test/README.md', answers);
    })
    .catch(function(error, data){
        console.log(error, data);
    });
} 

// Function call to initialize app
init();