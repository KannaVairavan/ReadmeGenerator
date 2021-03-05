const inquirer=require('inquirer');
const fs=require('fs');
const util=require('util');

// write readme file using promisify method
const writeReadmefileAsync=util.promisify(fs.writeFile);

const promptUser=() =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give description of your project?',
        },

        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project?',
        },
        {

            type: 'input',
            name: 'usage',
            message: 'Enter usage information for the project?',
        },
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ],
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please add contributors?',
        },
        {
            type: 'input',
            name: 'testInstruction',
            message: 'What command do you use to test the project?',
        }
    ])
}

const generateReadMe=(answers)=>

 
`
# <h1 align="center"> ${answers.title}</h1>

## Description
${answers.description}

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)
            
## Installation
${answers.Installation}
    
        
## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

## Contribution
${answers.contribution}

## Tests
${answers.testInstruction}

_This README was generated with []()

`


const init = () => {
    promptUser() 
   .then ((answers) => writeReadmefileAsync('./dist/README.md', generateReadMe(answers)))
   .then(() => console.log('Successfully wrote to README.md'))
   .catch((err) => console.error(err));
}
init();
