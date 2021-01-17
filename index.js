// Inquirer and fs constants
const inquirer = require("inquirer");
const fs = require("fs");
// array of questions for user
// const questions = [];

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
const generate = () =>
  inquirer
    .prompt([
      {
        type: "input",
        message: "Title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Please provide a description of your project",
        name: "description",
      },
      {
        type: "input",
        message: "Please provide usage information for your project",
        name: "usage",
      },
      {
        type: "input",
        message: "Please provide contribution guidelines",
        name: "contribution",
      },
      {
        type: "input",
        message: "Please provide installation instructions",
        name: "installation",
      },
      {
        type: "input",
        message: "Please provide test instructions",
        name: "test",
      },
      {
        type: "list",
        message: "Which license was used for this project?",
        name: "license",
        choices: ["MIT", "Another one", "That other guy", "Or maybe this one"],
      },
      {
        type: "input",
        message: "Please enter your github username",
        name: "gitQuestion",
      },
      {
        type: "input",
        message: "Please enter your email",
        name: "email",
      },
    ])
    .then((response) => {
      const readMe = (data) => `# ${response.title}
  
  ${data}

  ## Table of Contents
  1. [Project Description](#Project-Description)
  1. [Usage Information](#Usage-Information)
  1. [Contribution Guidelines](#Contribution-Guidelines)
  1. [Installation Instructions](#Installation-Instructions)
  1. [Test Instructions](#Test-Instructions)
  1. [Questions](#Questions)
  1. [License](#License)

  ### Project Description
    
  ${response.description}
  
  ![image](https://www.placecage.com/600/300)
  
  ### Usage Information
    
  ${response.usage}
    
  ### Contribution Guidelines
    
  ${response.contribution}
    
  ### Installation Instructions
    
  ${response.installation}

  ### Test Instructions

  ${response.test}

  ### Questions

  [Github Profile](https://github.com/${response.gitQuestion}) <br>
  
  Email - ${response.email}
    
  ### License
    
  ${response.license}`;

      let test = "";

      if (response.license === "MIT") {
        test = "THISISISISISISIS";
      } else {
        test = "Who Cares";
      }

      fs.writeFile("README.md", readMe(test), (err) =>
        err ? console.error(err) : console.log("Data Captured! Check Enjoy your README")
      );
    });
generate();
