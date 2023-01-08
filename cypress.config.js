const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w8m2w3',
  e2e: {
    baseUrl: "https://qacart-todo.herokuapp.com",
    viewportWidth: 1440,
    viewportHeight: 900,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    email:"dummymail@mail.com",
    password:"dummy123456"
  }
});
