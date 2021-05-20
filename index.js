const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerPrompt = require("./src/managerPrompt");
const internPrompt = require("./src/internPrompt");
const engineerPrompt = require("./src/engineerPrompt");
const generatePage = require("./src/generatePage");
const writeFile = require("./utils/generate-site");

// const mockArray = [
//   new Manager("allan", "9213", "al@email.com", "122"),
//   new Engineer("steve", "123", "oi@email.com", "githubMe"),
//   new Intern("nick", "343", "tr@email.com", "UW"),
//   new Intern("asdfa", "asdfas", "asdf", "asdfa"),
// ];

function menuPrompt(data) {
  if (data === "Engineer") {
    return engineerPrompt();
  } else if (data === "Intern") {
    return internPrompt();
  } else if (data === "Exit") {
    console.log("bye bye now");
    return {
      menuOption: "",
    };
  }
}

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
      return generatePage(teamInfo.flat());
    })
    .then((pageHtml) => {
      return writeFile(pageHtml);
    })
    .catch((err) => console.log(err));
}

function init() {
  promptTeamData();
}

init();
