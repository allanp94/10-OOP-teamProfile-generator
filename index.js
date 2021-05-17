const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerPrompt = require("./src/managerPrompt");
const internPrompt = require("./src/internPrompt");
const engineerPrompt = require("./src/engineerPrompt");
const inquirer = require("inquirer");
const managerObj = [];

function menuPrompt(data) {
  if (data === "Engineer") {
    return engineerPrompt();
  } else if (data === "Intern") {
    return internPrompt();
  } else if (data === "Exit") {
    console.log("bye bye now");
    return;
  }
}

// function choices() {
//   return inquirer.prompt({
//     type: "list",
//     name: "menuOption",
//     message: "Would you like to add more people to your team or exit?",
//     choices: ["Engineer", "Intern", "Exit"],
//   });
// }

function promptTeamData() {
  const teamInfo = [];

  managerPrompt()
    .then((data) => {
      teamInfo.push(
        new Manager(data.managerName, data.id, data.email, data.officeNumber)
      );
      return menuPrompt(data.menuOption);
    })
    .then(({ data, infoArray }) => {
      teamInfo.push(infoArray);
      return menuPrompt(data.menuOption);
    })
    .then(({ data, infoArray }) => {
      teamInfo.push(infoArray);
      return menuPrompt(data.menuOption);
    })
    .then((data) => {
      console.log(teamInfo);
    })
    .catch((err) => console.log(err));
}

function init() {
  promptTeamData();
}

init();
