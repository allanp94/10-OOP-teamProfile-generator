const inquirer = require("inquirer");
const Intern = require("../lib/Intern");

const infoArray = [];

const internPrompt = () => {
  return inquirer
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
      infoArray.push(
        new Intern(data.internName, data.id, data.email, data.school)
      );
      if (data.menuOption === "Intern") {
        return internPrompt();
      } else {
        return { data, infoArray };
      }
    })
    .catch((err) => console.log(err));
};

module.exports = internPrompt;
