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
    message: "What is the name of the repository?",
    name: "repoName"
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
  const readmeContent =
`# ${answers.repoName}
${"this is were the paragraph will go"}
  
## Website Link 
${' this is were the live link will go'}
  
## Table of Contents
* [Usage](#usage)
* [Credits](#credits)
* [Collaborators](#collaborators)
* [License](#license)
* [Features](#features)
  
### To contribute
${'contribute'}
  
  
## Website Image  
  
  ![(${'image description'})](${'image path'})
  
## Usage
${'usage info'}
  
## Credits
${"any credits"}
  
  
## Collaborators
${'any coloborators'} 
  
## License
${'license'}
  
## Features
${'features'} `

  fs.writeFile('../README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README file updated!');
  });
}
