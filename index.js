const inquirer=require('inquirer');
const fs=require('fs');
const util=require('util');

// write readme file using promisify method
const writeReadmeAsync=util.promisify(fs.writeFile);

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
            message: 'Provide a short description explaining the what, why, and how of your project?',
        },
        {
            type: 'input',
            name: 'tableContent',
            message: 'Enter table of content of the project?',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.?',
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
                "MIT License",
                "Code Project Open License (CPOL)",
                "Common Development and Distribution License (CDDL)",
                "Microsoft Public License (Ms-PL)",
                "Mozilla Public License 1.1 (MPL 1.1)",
                "Common Public License Version 1.0 (CPL)",
                "Eclipse Public License 1.0",
                "Apache License, Version 2.0"],
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who are the contributors of this projects?',
        },
        {
            type: 'input',
            name: 'testInstruction',
            message: 'Is there a test included?',
        }
    ])
}

const generateReadMe=(answers)=>
{
 
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

    `;
}

const init = () => {
    promptUser() 
        .then((answers) => fs.writeReadmeAsync('', generateReadMe(answers) ))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}