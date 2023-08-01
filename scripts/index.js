// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the 
// title of my project and 
// sections entitled Description, 
// Table of Contents, 
// Installation, 
// Usage, 
// License, 
// Contributing, 
// Tests, and 
// Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// this is body text for common licenses
const licenseTexts = {
  "MIT": `
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
`,
  "Apache-2.0": `
Apache License
Version 2.0, January 2004

You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
`,
  "GPL-3.0": `
GNU General Public License
Version 3, 29 June 2007

You may obtain a copy of the License at
https://www.gnu.org/licenses/gpl-3.0.en.html

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
`,
  "BSD-3-Clause": `
BSD 3-Clause License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
`,
  "MPL-2.0": `
Mozilla Public License Version 2.0

You may obtain a copy of the License at
https://www.mozilla.org/MPL/2.0/

The contents of this file are subject to the Mozilla Public License Version 2.0 (the "License"). You may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.mozilla.org/MPL/2.0/.

Software distributed under the License is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.
`,
  "LGPL-3.0": `
GNU Lesser General Public License
Version 3, 29 June 2007

You may obtain a copy of the License at
https://www.gnu.org/licenses/lgpl-3.0.en.html

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along with this program. If not, see https://www.gnu.org/licenses/.
`,
  "EPL-2.0": `
Eclipse Public License - v 2.0

You may obtain a copy of the License at
https://www.eclipse.org/legal/epl-2.0/

This program and the accompanying materials are made available under the terms of the Eclipse Public License v2.0 which accompanies this distribution, and is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0
`,
  "CC0-1.0": `
Creative Commons Zero v1.0 Universal

CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED HEREUNDER.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer exclusive Copyright and Related Rights (defined below) upon the creator and subsequent owner(s) (each and all, an "owner") of an original work of authorship and/or a database (each, a "Work").
`,
"none": '',
};


const fs = require('fs');
const inquirer = require('inquirer');
const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
} = require('./generateMarkdown');
// console.log(fs); 
// fs.readFile('../README.md', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })

// questions for the user
const questions = [
  // {
  //   type: "input",
  //   message: "What your name?",
  //   name: "userName"
  // },
  // {
  //   type: "input",
  //   message: "What your Github username?",
  //   name: "githubName"
  // },
  // {
  //   type: "input",
  //   message: "What is the title of the repository?",
  //   name: "repoName"
  // },
  // {
  //   type: "input",
  //   message: "Describe your repository?",
  //   name: "repoDescription"
  // },
  // {
  //   type: "input",
  //   message: "How would someone install this repository?",
  //   name: "repoInstallation"
  // },
  // {
  //   type: "input",
  //   message: "How should someone use this repository?",
  //   name: "repoUsage"
  // },
  // {
  //   type: "input",
  //   message: "How would you want someone to contribute?",
  //   name: "repoContribute"
  // },
  {
    type: "list",
    message: "What is your preferred license?",
    choices: Object.keys(licenseTexts),
    // [  
    // "MIT",
    // "Apache-2.0",
    // "GPL-3.0",
    // "BSD-3-Clause",
    // "MPL-2.0",
    // "LGPL-3.0",
    // "EPL-2.0",
    // "CC0-1.0"
    // ],
    name: 'userLicense',
  },
  // {
  //   type: "input",
  //   message: "What were some tests done in this repository?",
  //   name: "repoTests"
  // },
];
// gets answers and calls to update the read me
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers));
    const chosenLicense = renderLicenseBadge(answers.userLicense);
    const licenseLink = renderLicenseLink(answers.userLicense);
    console.log(chosenLicense);
    // Update the readme with all the answers
    updateReadme(answers, chosenLicense, licenseLink);
  });

function updateReadme(answers, chosenLicense, licenseLink) {
  const readmeContent =

`
${chosenLicense}

For more information on ${answers.userLicense} visit ${licenseLink}

# ${answers.repoName}
${answers.repoDescription}
  
## Website Link 
${' this is were the live link will go'}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
  
## Installation
${answers.repoInstallation}
  
  
## Website Image  
  
  ![(${'image description'})](${'image path'})
  
## Usage
${answers.repoUsage}

## Contribute
${answers.repoContribute}
  
## License
${licenseTexts[answers.userLicense]}
Copyright (c) 2023 ${answers.userName}

  
## Tests
${answers.repoTests} 
## Questions 
https://github.com/${answers.githubName}`

  fs.writeFile('../README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README file updated!');
  });
}
