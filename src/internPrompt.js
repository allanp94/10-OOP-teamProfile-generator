const inquirer = require("inquirer");
const Intern = require("../lib/Intern");
const engineerPrompt = require("./engineerPrompt");

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

function internPrompt() {
  return new Promise(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Enter the Interns name:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Interns name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the Intern ID:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Interns ID");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the Interns email address:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Interns email address!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "Enter the Interns school name:",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Interns school name!");
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
        const internObj = new Intern(
          data.internName,
          data.id,
          data.email,
          data.school
        );
        console.log(internObj.getRole());
        // menuOption();
        menuOption(data.menuOption);
      })
      .catch((err) => console.log(err));
  });
}

module.exports = internPrompt;
