const generateMarkdown = data => {
return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## License
${data.license}

## Questions 
If you have any questions, please reach out to me at the links below!

GitHub: [@${data.githubUSer}](https://github.com/${data.githubUSer})
  
Email: [Send me an email!](mailto:${data.email})
`;
}
module.exports = generateMarkdown;
