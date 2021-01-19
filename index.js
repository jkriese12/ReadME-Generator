// Inquirer and fs constants
const inquirer = require("inquirer");
const fs = require("fs");
// Main function that holds logic for user input
const generate = () => {
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
        choices: ["MIT", "Mozilla", "Perl", "None of the above"],
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
      // Readme text that will get passed into created file
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
  
  Please direct all questions to the email below:
  Email - ${response.email}
    
  ### License
    
  ${response.license}`;
      // Empty variable to use for the data parameter based on user choice of license
      let license = "";
      // If logic determining which license picture to use, filling license variable
      if (response.license === "MIT") {
        license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

        `;
      } else if (response.license === "Mozilla") {
        license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

        `;
      } else if (response.license === "Perl") {
        license = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

        `;
      } else {
        license = "";
      }
      // If logic for text in license portion of README based on user choice
      if (response.license === "MIT") {
        response.license = "This project is licensed under the terms of the MIT License";
      } else if (response.license === "Mozilla") {
        response.license =
          "This project is licensed under the terms of the Mozilla Public License 2.0";
      } else if (response.license === "Perl") {
        response.license = "This project is licensed under the terms of the Perl License";
      } else {
        response.license = "";
        console.log(
          "The license section will be blank. Please add your own once the file generates"
        );
      }
      // Writing file
      fs.writeFile("README.md", readMe(license), (err) =>
        err ? console.error(err) : console.log("Data Captured! Enjoy your README")
      );
    });
};
// Calling main function
generate();
