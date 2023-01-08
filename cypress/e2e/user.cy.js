/// <reference types = "cypress" />

import LoginPage from "../pages/loginPage";

it("should be able to login", () => {
  new LoginPage()
    .load()
    .login(Cypress.env("email"), Cypress.env("password"))
    .messageShouldBeVisible();
});
