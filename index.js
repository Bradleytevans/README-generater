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
            message: 'Please enter your email address.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address to continue.');
                    return false; 
                }
            } 
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
        message: 'Please provide any guidelines or information for contribution to the repository. (press enter to skip)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any steps needed to install you project. (press enter to skip)',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any instructions for testing. (press enter to skip)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project (Required)',
        choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'Boost_Software_License_1.0', 'The_Unlicense'],
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