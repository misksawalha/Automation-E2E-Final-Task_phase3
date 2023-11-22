// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://automationexercise.com/",
//     async setupNodeEvents(on, config) {
//       // implement node event listeners here
//       return require("./cypress/plugins")(on, config);
//     },
//     specPattern: "cypress/e2e/**/*.feature",
//   },
// });


const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    execTimeout: 1200000,
    env: {
      snapshotOnly: true,
      allureReuseAfterSpec: true,
      download_dir: "./cypress/downloads",
    },
    
    allureResultsPath: "allure-results",
    allure:true,
    videosFolder: "allure-results/videos",
    screenshotOnRunFailure: true,
    allureAttachRequests:true,
    typing : 'cypress-file-upload',

   
  },
});
