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
      message: "Title of your project?",
      name: "title",
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
    const readMe = `# README Generator

    ## Table of Contents
    
    1. [Project Description](#Project-Description)
    1. [Usage Information](#Usage-Information)
    1. [Contribution](#Contribution)
    1. [Installation Instructions](#Installation-Instructions)
    1. [License](#License)
    
    ### ${response.title}
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    ### Usage Information
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    ### Contribution
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    ### Installation Instructions
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    ### License
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    fs.writeFile("README.md", readMe, (err) =>
      err ? console.error(err) : console.log("commit logged!")
    );
  });
