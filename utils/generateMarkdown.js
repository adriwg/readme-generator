// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![license](https://img.shields.io/badge/license-${data.license}-red)

  # ${data.title}

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

## How to Contribute

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions about the project, please feel free to contact me through the following:

[My GitHub profile](https://github.com/${data.gitHub_username})

[Email address](mailto:${data.email})

`;
}

module.exports = generateMarkdown;