const inquirer = require("inquirer");
const managerPrompt = require("./src/managerPrompt");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function init() {
  managerPrompt();
}

init();
