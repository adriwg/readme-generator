// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![license](https://img.shields.io/badge/license-${data.license}-red)

  # <span style="text-transform: capitalize;">${data.title}</span>

  ## Description

${data.description}
<p>&nbsp;</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
<p>&nbsp;</p>

## Installation

${data.installation}
<p>&nbsp;</p>

## Usage

${data.usage}
<p>&nbsp;</p>

## License

This project is licensed under the ${data.license} License
<p>&nbsp;</p>

## How to Contribute

${data.contribute}
<p>&nbsp;</p>

## Tests

${data.test}
<p>&nbsp;</p>


## Questions

[My GitHub profile](https://github.com/${data.gitHub_username})  

If you have any questions about the project, please feel free to contact me by the following email:

[${data.email}](mailto:${data.email})  

`;
}

module.exports = generateMarkdown;