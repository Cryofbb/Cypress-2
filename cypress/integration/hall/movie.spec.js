const testData = require("../../fixtures/testData.json");
const selectors = require("../../fixtures/selectors.json");

beforeEach(() => {
  cy.visit("/");
  cy.get(".login__title").should("be.visible");
  cy.login("qamid@qamid.ru", "qamid");
  cy.contains("Управление залами");
});

describe("Creating and changing movies", () => {
  it("Should add movie", () => {
    cy.createMovie(
      testData.movieTitle1,
      testData.movieTime1,
      testData.movieDescription1,
      testData.movieCountry1
    );
    cy.contains(testData.movieTitle1).should("be.visible");
  });
  it("Should add movie to schedule", () => {
    cy.get(selectors.movie).drag(selectors.schedule);
  });
});
