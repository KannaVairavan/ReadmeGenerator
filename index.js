
const inquirer=require('inquirer');
const fs=require('fs');
const util=require('util');
const generateMarkdown=require("./utils/generateMarkdown")
// write readme file using promisify method
const writeReadmefileAsync=util.promisify(fs.writeFile);
// array of questions for the users
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
                "IBM",
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
        },
        
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
        
    ])
}

// function to initialize program
const init = () => {
    promptUser() 
    // create markdown file

   .then ((data) => writeReadmefileAsync('./output/README.md', generateMarkdown(data)))
   .then(() => console.log('Successfully wrote to README.md'))
   .catch((err) => console.error(err));
}
        
// function call to initialize program
init();
