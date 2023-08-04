// this is body text for the most common licenses
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

// gets inquirer and the file system
const fs = require('fs');
const inquirer = require('inquirer');
// gets functions as an object and also links to the generate markdown function
const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require('./generateMarkdown');

// questions for the user
const questions = [
  {
    type: "input",
    message: "What your name?",
    name: "userName"
  },
  {
    type: "input",
    message: "What your Github username?",
    name: "githubName"
  },
    {
      type: "input",
      message: "What your email and are there any instructions?",
      name: "email"
    },
  {
    type: "input",
    message: "What is the title of the repository?",
    name: "repoName"
  },
  {
    type: "input",
    message: "Describe your repository?",
    name: "repoDescription"
  },
  {
    type: "input",
    message: "How would someone install this repository?",
    name: "repoInstallation"
  },
  {
    type: "input",
    message: "How should someone use this repository?",
    name: "repoUsage"
  },
  {
    type: "input",
    message: "How would you want someone to contribute?",
    name: "repoContribute"
  },
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
  {
    type: "input",
    message: "What were some tests done in this repository?",
    name: "repoTests"
  },
];
// gets answers and calls to update the read me
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers));
    // calls the functions with the appropriate arguments. 
    const chosenLicense = renderLicenseBadge(answers.userLicense);
    const licenseLink = renderLicenseLink(answers.userLicense);
    // username is made into a varible so that we can gets its value more easily
    let userName = answers.userName;
    const licenseSection = renderLicenseSection(answers.userLicense, userName);
    console.log(chosenLicense);
    // Update the readme with all the answers
    updateReadme(answers, chosenLicense, licenseLink, licenseSection);
  });
// this part is the markdown, it is also what gets generated and updated on each session.
// note: the table of content assumes that the user has the items
function updateReadme(answers, chosenLicense, licenseLink, licenseSection) {
  const readmeContent =

`
${chosenLicense}

${licenseLink}

# ${answers.repoName}
${answers.repoDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
  
## Installation
${answers.repoInstallation}
  
## Usage
${answers.repoUsage}

## Contribute
${answers.repoContribute}
  
## License
${licenseTexts[answers.userLicense]}
${licenseSection}
  
## Tests
${answers.repoTests} 

## Questions 
Github: https://github.com/${answers.githubName}

Email: ${answers.email}`
// this essentially creates the file to the specified location
  fs.writeFile('./README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README file updated!');
  });
}
