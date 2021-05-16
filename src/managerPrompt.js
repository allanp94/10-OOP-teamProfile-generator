const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const engineerPrompt = require("./engineerPrompt");
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

function managerPrompt() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Enter the managers name:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the managers name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the manager ID:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the managers ID");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the managers email address:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the managers email address!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter the managers office number:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the managers office number!");
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
        const managerObj = new Manager(
          data.managerName,
          data.id,
          data.email,
          data.officeNumber
        );
        console.log(managerObj.getRole());
        menuOption(data.menuOption);
      })
      .catch((err) => console.log(err));
  });
}

module.exports = managerPrompt;
