// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = './utils/generateMarkdown.js'
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projTitle',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        validate: Input => {
            if (Input) {
                return true;
            } else {
                console.log('Please enter a description of your project to continue.')
                return false
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
            console,log('Your README.md is ready to copy.')
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    })
};

// Function call to initialize app
init();