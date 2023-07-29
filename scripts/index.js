// TODO: Include packages needed for this application
// first I need to access inquirer to ask the questions
// const inquirer = require('inquirer');
// console.log(inquirer);
// next I need to get access to the file system to get a hold of the readme
const fs = require('fs');
const inquirer = require('inquirer');
// console.log(fs); 
// fs.readFile('../README.md', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "userName"
  },
  // {
  //   type: "input",
  //   message: "What is your bio?",
  //   name: "userBio"
  // },
  // {
  //   type: "input",
  //   message: "What is your preferred method of communication?",
  //   name: "userCommunication"
  // },
];

//this 
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers));
    updateReadme(answers);
  });

function updateReadme(answers) {
  const readmeContent = `Hello World!`;

  fs.writeFile('../README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('HTML file updated!');
  });
}
