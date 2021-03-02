const inquirer=require('inquirer');
const fs=require('fs');
const util=require('util');

// write readme file using promisify method
const writeReadmeAsync=util.promisify(fs.writeFile);

const promptUser=() =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the description of the project?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the installation instructions?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter usage information for the project?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter contribution guidelines?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter test instructions?',
        }
    ])
}