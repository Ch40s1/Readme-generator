// TODO: Include packages needed for this application
// first I need to access inquirer to ask the questions
// const inquirer = require('inquirer');
// console.log(inquirer);
// next I need to get access to the file system to get a hold of the readme
const fs = require('fs')
console.log(fs); 
fs.readFile('../README.md', 'utf-8', (err,data) =>{
  if (err) throw err;
  console.log(data);
})
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
