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
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you located?",
      name: "location",
    },
    {
      type: "input",
      message: "Write a brief bio of yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your LinkedIn URL?",
      name: "link",
    },
    {
      type: "input",
      message: "What is your Github URL?",
      name: "git",
    },
  ])
  .then((response) => {
    const readMe = `How does this text work ggfgfg - ${response.name} Oh works well - ${response.link}
${response.git}`;
    fs.writeFile("README.md", readMe, (err) =>
      err ? console.error(err) : console.log("commit logged!")
    );
  });
