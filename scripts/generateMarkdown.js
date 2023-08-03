// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const licenseBadges = {
    "MIT": "[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)",
    "Apache-2.0": "[![Apache-2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL-3.0": "[![GPL-3.0 License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)",
    "BSD-3-Clause": "[![BSD-3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "MPL-2.0": "[![MPL-2.0 License](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)",
    "LGPL-3.0": "[![LGPL-3.0 License](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)](https://opensource.org/licenses/LGPL-3.0)",
    "EPL-2.0": "[![EPL-2.0 License](https://img.shields.io/badge/License-EPL%202.0-blue.svg)](https://opensource.org/licenses/EPL-2.0)",
    "CC0-1.0": "[![CC0-1.0 License](https://img.shields.io/badge/License-CC0%201.0-blue.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  };
// Check if the selected license exists in the licenseBadges object
if (licenseBadges.hasOwnProperty(license)) {
  const chosenBadge = licenseBadges[license];
  return chosenBadge;
} else {
  return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const githubLicenseLinks = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache-2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL-3.0": "https://opensource.org/licenses/GPL-3.0",
    "BSD-3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
    "MPL-2.0": "https://opensource.org/licenses/MPL-2.0",
    "LGPL-3.0": "https://opensource.org/licenses/LGPL-3.0",
    "EPL-2.0": "https://opensource.org/licenses/EPL-2.0",
    "CC0-1.0": "http://creativecommons.org/publicdomain/zero/1.0/",
  };
  if(githubLicenseLinks.hasOwnProperty(license)){
    const link = githubLicenseLinks[license]
    return `For more information on ${license} visit ${link}`;
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, userName) {
  if (license == 'none'){
  return '';
}else {

  const renderSection = `Copyright (c) 2023 ${userName}`
  return renderSection;
}
};

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
