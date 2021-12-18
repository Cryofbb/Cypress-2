// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";
import "@4tw/cypress-drag-drop";
const selectors = require("../fixtures/selectors.json");

Cypress.Commands.add("login", (login, password) => {
  cy.get(selectors.loginMail).type(login);
  cy.get(selectors.loginPass).type(password);
  cy.get(selectors.loginButton).click();
});
Cypress.Commands.add("createHall", (hallName) => {
  cy.get(selectors.createHall).click();
  cy.get(selectors.nameHall).type(hallName);
  cy.get(selectors.addHallButton).click();
});
Cypress.Commands.add("deleteHall", (hallName) => {
  cy.get(`#hall-control [data-hall-name=${hallName}]`).click();
  cy.get(".popup__wrapper .conf-step__button-accent").click();
  cy.on("window:confirm", () => true);
});
Cypress.Commands.add("changeHall", (hallName, rows, places) => {
  cy.get(`#hall-configuration [value=${hallName}]`).click();
  cy.get(selectors.rows).clear().type(rows);
  cy.get(selectors.places).clear().type(places);
  cy.get(selectors.buttonSaveHall).click();
});
Cypress.Commands.add("makeVIP", (hallName, rows, places) => {
  cy.get(`#hall-configuration [value=${hallName}]`).click();
  cy.get(
    `.conf-step__hall-wrapper > :nth-child(${rows}) > :nth-child(${places})`
  ).click();
  cy.get(selectors.buttonSaveHall).click();
});
Cypress.Commands.add("makeClose", (hallName, rows, places) => {
  cy.get(`#hall-configuration [value=${hallName}]`).click();
  cy.get(
    `.conf-step__hall-wrapper > :nth-child(${rows}) > :nth-child(${places})`
  )
    .click()
    .click();
  cy.get(selectors.buttonSaveHall).click();
});
Cypress.Commands.add("changePrice", (hallName, regular, vip) => {
  cy.get(`#price-configuration [value=${hallName}]`).click();
  cy.get(selectors.priceRegular).clear().type(regular);
  cy.get(selectors.priceVIP).clear().type(vip);
  cy.get(selectors.buttonSavePrice).click();
});
Cypress.Commands.add("createMovie", (title, time, description, country) => {
  cy.get(selectors.buttonAddMovie).click();
  cy.get(selectors.movieTitle).type(title);
  cy.get(selectors.movieTime).clear().type(time);
  cy.get(selectors.movieDescription).clear().type(description);
  cy.get(selectors.movieCountry).clear().type(country);
  cy.get(selectors.attachPoster).attachFile("images/poster.png");
  cy.get(selectors.buttonSaveMovie).click();
});
Cypress.Commands.add("openSales", (hall) => {
  cy.get(`#start-sales [value=${hall}]`).click();
  cy.contains("Открыть продажу билетов").click();
  cy.contains("Продажа билетов открыта!!!").should("be.visible");
});
Cypress.Commands.add("closeSales", (hall) => {
  cy.get(`#start-sales .conf-step__selectors-box [value=${hall}]`).click();
  cy.contains("Закрыть продажу билетов").click();
  cy.contains("Все готово к открытию").should("be.visible");
});
Cypress.Commands.add("deleteMovie", (name) => {
  cy.get(`#grid-session [data-film-name=${name}]`).click();
  cy.get(selectors.deleteHallButton).click();
  cy.on("window:confirm", () => true);
});
