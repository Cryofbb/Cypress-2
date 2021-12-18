const selectors = require("../fixtures/selectors.json");
beforeEach(() => {
  cy.visit("/");
});
describe("Login and booking check", () => {
  it("Should open the main page", () => {
    cy.contains("Идёмвкино");
  });

  it("Should login with correct name/pass", () => {
    cy.get(".login__title").should("be.visible");
    cy.login("qamid@qamid.ru", "qamid");
    cy.contains("Управление залами");
  });

  it("Should not login without pass", () => {
    cy.get(".login__title").should("be.visible");
    cy.get(selectors.loginMail).type("qamid@qamid.ru");
    cy.contains("Авторизоваться").click();
    cy.get('[for="pwd"] > .login__input')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Should not login without name", () => {
    cy.get(".login__title").should("be.visible");
    cy.get(selectors.loginPass).type("qamid");
    cy.contains("Авторизоваться").click();
    cy.get('[for="email"] > .login__input')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  it("Should book", () => {
    cy.visit("http://qamid.tmweb.ru/client/index.php");
    cy.get(`${selectors.day}`).click();
    cy.get(`${selectors.time}`).click();
    cy.get(`${selectors.place}`).click();
    cy.get(`${selectors.buttonBooking}`).click();
    cy.wait(2000);
    cy.get(`${selectors.buttonBooking}`).click();
    cy.contains(
      "Покажите QR-код нашему контроллеру для подтверждения бронирования."
    ).should("be.visible");
  });
});
