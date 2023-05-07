const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: [
            'MIT',
            'Apache',
            'GPL',
            'BSD'
        ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to contribute to the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to test your project?'
    },
    {
        type: 'input',
        name: 'gitHub_username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile("./generated_readme/README.md", generateMarkdown(answers));
        });
}

// function call to initialize program
init(); 