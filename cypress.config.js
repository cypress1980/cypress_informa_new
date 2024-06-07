const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity" : false,
    "testFiles" : ["**/*.{feature,features}"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
module.exports = (on,config) =>{
  on('file:preprocessor',cucumber())
 }
 
