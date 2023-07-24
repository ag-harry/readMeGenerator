// Import necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input, with message ${data.name} for generateMarkdown.js
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'reason',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'problems',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'challanges',
    message: 'What challanges did you run into and how did you solve them?',
  },
  {
    type: 'input',
    name: 'learning',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'standout',
    message: 'What makes your project stand out?',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: 'Harry Gilbert',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    default: 'tempemail@gmail.com',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub profile link?',
    default: 'https://github.com/ag-harry',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README.md has been generated!');
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  });
}

// Function call to initialize app
init();
