const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");
const internPrompt = require("./internPrompt");

function menuOption(data) {
  if (data === "Engineer") {
    console.log("engineer was selected");
    return engineerPrompt();
  } else if (data === "Intern") {
    console.log("intern was selected");
    internPrompt();
  } else {
    console.log("exit was selected");
    return;
  }
}

function engineerPrompt() {
  return new Promise(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Enter the Engineers name:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Engineers name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the Engineer ID:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Engineers ID");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the Engineers email address:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Engineers email address!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "Enter the Engineers Github username:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Engineers Github username!");
              return false;
            }
          },
        },
        {
          type: "list",
          name: "menuOption",
          message: "Would you like to add more people to your team or exit?",
          choices: ["Engineer", "Intern", "Exit"],
        },
      ])
      .then((data) => {
        const engineerObj = new Engineer(
          data.engineerName,
          data.id,
          data.email,
          data.github
        );
        console.log(engineerObj.getRole());
        // menuOption();
        menuOption(data.menuOption);
      })
      .catch((err) => console.log(err));
  });
}

module.exports = engineerPrompt;
