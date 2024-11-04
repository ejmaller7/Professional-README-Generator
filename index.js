// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'GitHub',
        message: "What is your GitHub username?", 
    },
    {
        type: 'input',
        name: 'Email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'Project',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'Description',
        message: "Please write a short description of your project",
    },
    {
        type: 'input',
        name: 'License',
        message: "What kind of license should your project have?",
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'Dependencies',
        message: "What command should be run to install dependencies?",
    },
    {
        type: 'input',
        name: 'Tests',
        message: "What command should be run to run tests?",
    },
    {
        type: 'input',
        name: 'Know about repo',
        message: "What does the user need to know about using the repo?",
    },
    {
        type: 'input',
        name: 'Contributing to repo',
        message: "What does the user need to know about contributing to the repo?",
    },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
        err ? console.error(err) : console.log("ReadME Created!")
    );
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((responses) => {
            const markdown = generateMarkdown(responses);
            writeToFile("ReadMe", markdown);
        })
        .catch((error) => console.error(error));
}

// Function call to initialize app
init();
