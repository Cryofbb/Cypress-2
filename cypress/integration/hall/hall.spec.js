const testData = require("../../fixtures/testData.json");

beforeEach(() => {
  cy.visit("/");
  cy.get(".login__title").should("be.visible");
  cy.login("qamid@qamid.ru", "qamid");
  cy.contains("Управление залами");
});
describe("Creating and changing hall", () => {
  it("Should create hall", () => {
    cy.createHall(testData.hallName1);
  });
  it("Should change seats", () => {
    cy.changeHall(testData.hallName1, testData.rows1, testData.seats1);
  });
  it("Should make VIP seats", () => {
    cy.makeVIP(testData.hallName1, 5, 1);
  });
  it("Should close seats", () => {
    cy.makeClose(testData.hallName1, 5, 2);
  });
  it("Should adjust price", () => {
    cy.changePrice(
      testData.hallName1,
      testData.priceRegular,
      testData.priceVIP
    );
  });
  it("Should open sales", () => {
    cy.openSales(testData.hall4sales);
  });
  it("Should close sales", () => {
    cy.closeSales(testData.hall4sales);
  });
});

after(() => {
  cy.visit("/");
  cy.timeout(2000);
  cy.deleteHall(testData.hallName1);
  //Убрано, тк автоматическое создание не работает на текущий момент, удалять нечего
  //cy.deleteMovie(testData.movieTitle1);
});
