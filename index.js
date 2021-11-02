// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking to page where the README is developed 
const generatePage = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUSer',
            message: 'Please enter your GitHub username.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username to continue.');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (press enter to skip)'
        },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project title to continue.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a description of your project to continue.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any steps needed to install you project. (press enter to skip)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any instructions or examples for use. (press enter to skip)',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide any guidelines or information for contribution to the repository. (press enter to continue)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any steps needed to install you project. (press enter to skip)',
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    }
]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

questions()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})