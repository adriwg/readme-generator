// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how to contribute)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} License

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## How to Contribute

${data.contributing}

## Tests

${data.test}

`;
}

module.exports = generateMarkdown;
