// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message:"Please name your project?"
},
{
    type: "input",
    name: "creator",
    message:"Please state your full name?"
},
{
    type: "input",
    name: "description",
    message:"Why did you build this project?"
},
{
    type: "input",
    name: "description1",
    message:"What problem does it solve?"
},
{
    type: "input",
    name: "description2",
    message:"What was your motivation for building this project?"
},
{
    type: "input",
    name: "description3",
    message:"What did you learn by building this project?"
},
{
    type: "input",
    name: "installation",
    message:"Please describe the purpose and functionality of this project?"
},
{
    type: "input",
    name: "installation",
    message:"What are the steps required in order to install your project?"
},
{
    type: "input",
    name: "usage",
    message:"Please provide examples and instructions for usage, provide screenshots if necessary."
},
{
    type: "checkdown",
    name: "license",
    message:"Please select a license applicable to this project?",
    Choices: ["MIT, Apache 2.0, "]
},
{
    type: "input",
    name: "features",
    message:"Please list any special features that your project may have?"
},
{
    type: "input",
    name: "creator",
    message:"What is your github username?"
},
{
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "input",
    name: "tests",
    message: "If any test can be provided for the application, please run them here."
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./utils/README.md", generateMarkdown({ ...responses }));
      });
}

// Function call to initialize app
init();
