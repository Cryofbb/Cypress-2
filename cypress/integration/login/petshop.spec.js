describe("Pet store test", () => {
  it("Should add user", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", {
      id: 10,
      username: "abcd",
      firstName: "1",
      lastName: "2",
      email: "3",
      password: "4",
      phone: "5",
      userStatus: 1,
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("10");
    });
  });

  it("Should edit user", () => {
    cy.request("PUT", "https://petstore.swagger.io/v2/user/abcd", {
      id: 15,
      username: "abcd",
      firstName: "1",
      lastName: "2",
      email: "3",
      password: "4",
      phone: "5",
      userStatus: 1,
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("15");
    });
  });

  it("Should delete user", () => {
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/abcd").should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("abcd");
      }
    );
  });
});
