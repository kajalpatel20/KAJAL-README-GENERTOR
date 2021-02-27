// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMkdw = require("./utils/generateMarkdown");
const { clear } = require("console");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "Whats is your Github user name?"
    },
    {
        type: "input",
        name: "email",
        message: "Whats is your email?"
    },
    {
        type: "input",
        name: "project",
        message: "Whats is the projects name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a short description of the project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter instructions for installation of your application"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter instruction for how to use your application"
    },
    {
        type: "input",
        name: "test",
        message: "please enter test instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Whats kind of license does your project back?",
        choices: ['MIT', 'APACHE 2.0', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(' Your README has been created!');
        var readMe = generateMkdw(answers);
        writeToFile("README.md", readMe)
        
    })
}

// Function call to initialize app
init();
