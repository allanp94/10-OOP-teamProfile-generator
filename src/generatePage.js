const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const generateCards = (teamArr) => {
  return `  <div class="container d-flex flex-wrap p-5 justify-content-around">
  ${teamArr
    .filter((el) => el instanceof Manager)
    .map((el) => {
      return `<div class="card m-2 " style="width: 14rem">
      <h5 class="card-header d-flex flex-column bg-primary text-white"><span>Manager</span> <span><i class="fas fa-mug-hot"></i> ${el.name}</span></h5>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID: ${el.id}</li>
          <li class="list-group-item">
            Email: <a  href="mailto: ${el.email}" class="card-link">${el.email}</a>
          </li>
          <li class="list-group-item">Office: ${el.officeNumber}</li>
        </ul>
      </div>
    </div>`;
    })
    .join("")}
    
      ${teamArr
        .filter((el) => el instanceof Engineer)
        .map((el) => {
          return `<div class="card m-2" style="width: 14rem">
        <h5 class="card-header d-flex flex-column bg-primary text-white"><span>Engineer</span> <span><i class="fas fa-glasses"></i> ${el.name}</span> </h5>
        <div class="card-body bg-light">
          <ul class="list-group list-group-flush border">
            <li class="list-group-item">ID: ${el.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto: ${el.email}" class="card-link">${el.email}</a>
            </li>
            <li class="list-group-item">
            GitHub: <a href="https://github.com/${el.github} " class="card-link">${el.github}</a></li>
          </ul>
        </div>
      </div>`;
        })
        .join("")}
        

      ${teamArr
        .filter((el) => el instanceof Intern)
        .map((el) => {
          return `<div class="card m-2" style="width: 14rem">
        <h5 class="card-header d-flex flex-column bg-primary text-white"><span>Intern</span> <span><i class="fas fa-user-graduate"></i> ${el.name}</span></h5>
        <div class="card-body bg-light">
          <ul class="list-group list-group-flush border">
            <li class="list-group-item">ID: ${el.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto: ${el.email}" class="card-link">${el.email}</a>
            </li>
            <li class="list-group-item">School: ${el.school}</li>
          </ul>
        </div>
      </div>`;
        })
        .join("")}
    </div>`;
};

module.exports = (teamArray) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <title>Document</title>
      </head>
      <body>
        <header>
          <div
            class="
              container-fluid
              flex-wrap
              text-white text-center
              bg-danger
              border
              w-100
            "
            style="height: 150px; font-size: 30px"
          >
            <span class="align-middle h-100 w-100 bg-danger">My team</span>
          </div>
        </header>
        <main>
         ${generateCards(teamArray)}
        </main>
      </body>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </html>
    `;
};
