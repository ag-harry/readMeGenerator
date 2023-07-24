// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](#license)`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

This project is licensed under the ${license} License.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${licenseLink ? `- ${licenseLink}` : ''}- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Motivation](#motivation)
- [Reason](#reason)
- [Problem](#problem)
- [Learnings](#learnings)
- [Standout](#standout)
## Installation

To install the necessary dependencies, run the following command in your:

\`\`\`
npm install inquirer
\`\`\`

## Usage

Run the following command in your terminal to generate a Readme file:

\`\`\`
node index.js
\`\`\`

## Questions

## Motivation

${data.motivation}

## Reason

${data.reason}

## Problems

${data.problem}

## Learning

${data.learning}

## Standout

${data.standout}


If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;