import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 
 let URL:any
Given("Valid URL related to the page", () => { 
 URL = ("https://automationexercise.com/"); 
});
When('I visit the URL',()=>{
    cy.visit(URL)
})
Given('Open home page',()=>{
  cy.get('.active > :nth-child(1) > h1').should('contain','AutomationExercise')
})
//update