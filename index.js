// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
    "Please enter your GitHub username:",
    "Please type your email address for others to contact you for questions:"
];

// deconstructed 'questions' here
const [title, motivation, why, what, learn, install, usage, contribute, test, license, github, email] = questions;

// I deleted the markdown.js and moved the functions here because I only found them out
// after I was close to finishing the challenge

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== null) {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
    }
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== null) {
        return "* [License](#license)"
    }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== null) {
        return "## License"
    }
    return ""
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use fs here
    fs.writeFile(fileName, `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

- ${data.motivation}.
- ${data.why}.
- ${data.what}.
- ${data.learn}.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.install}.

## Usage

${data.usage}.

${renderLicenseSection(data.license)}

${data.license}

## Contributing

${data.contribute}.

## Tests

${data.test}.

## Questions

GitHub Link: [${data.github}](https:www.github.com/${data.github})
To reach me, click on my email link: [${data.email}](mailto:${data.email})`, (error, response) => {
        error ? console.log(error, response) : 
        console.log("\nREADME file in test folder created successfully")
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(`\nPlease write your answers in full sentences.\n`);
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
            choices: ['CC01.0', 'GPLv3', 'Hippocratic2.1', 'IPL1.0', 'MIT'],
        },
        {
            type: 'github',
            message: github,
            name: 'github',
        },
        {
            type: 'email',
            message: email,
            name: 'email',
        }
    ])
    .then((answers) => {
        // call the function writeToFile here
        writeToFile('./output/README.md', answers);
    })
    .catch(function(error, data){
        console.log(error, data);
    });
} 

// Function call to initialize app
init();