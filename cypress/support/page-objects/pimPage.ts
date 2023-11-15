import { reportName } from "../variable/createReport.var"
import { address } from "../init/LocationInit"
export default class pimPage{
    elements = {
        pimBtn:()=>cy.get(':nth-child(2) > .oxd-main-menu-item'),
        reportBtn:()=>cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)'),
        addReportBtn:()=>cy.get('.orangehrm-header-container > .oxd-button'),
        reportNameInput:()=>cy.get(':nth-child(2) > .oxd-input'),
        selectionCrteriaDropDown:()=>cy.get(':nth-child(3) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        insertAnotherCriteria:()=>cy.get(':nth-child(3) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button > .oxd-icon'),
        locationDropDown:()=>cy.get('.oxd-select-dropdown > :nth-child(14)'),
        jobTitleDropDown:()=>cy.get('.oxd-select-dropdown > :nth-child(8)'),
        displayFieldDropDown:()=>cy.get(':nth-child(5) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        personalDropDown:()=>cy.get('.oxd-select-dropdown > :nth-child(2)'),
        insertAnotherDisplayField:()=>cy.get(':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button'),
        selectWhatToDisplay:()=>cy.get(':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        employeeFirstName:()=>cy.get(':nth-child(4) > span'),
        personalSwitch:()=>cy.get('.oxd-switch-input'),
        jobTitleFieldDropDown:()=>cy.get('.oxd-select-dropdown > :nth-child(7)'),
        jobTitleVlue:()=>cy.get(':nth-child(4) > span'),
        jobSwitch:()=>cy.get(':nth-child(8) > .oxd-switch-wrapper > label > .oxd-switch-input'),
        
        salaryFieldDropDown:()=>cy.get('.oxd-select-dropdown > :nth-child(8)'),
        salaryVlue:()=>cy.get(':nth-child(4) > span'),
        salarySwitch:()=>cy.get(':nth-child(11) > .oxd-switch-wrapper > label > .oxd-switch-input'),

        saveReportBtn:()=>cy.get('.oxd-button--secondary')
    }
    
    createReport(locationName:any,jobTitleName:any){
        
        this.elements.pimBtn().click()
        this.elements.reportBtn().click()
        this.elements.addReportBtn().click()
        this.elements.reportNameInput().type(reportName)
        this.elements.selectionCrteriaDropDown().click()
        this.elements.locationDropDown().click() 
        cy.get('.oxd-icon.bi-plus').eq(0).click() 
        cy.get('.oxd-select-text-input').eq(2).click() 
        cy.get('.oxd-select-dropdown').contains(address).click()

        this.elements.insertAnotherCriteria().click()

        this.elements.selectionCrteriaDropDown().click()
        this.elements.jobTitleDropDown().click()
        cy.get('.oxd-icon.bi-plus').eq(0).click() 
        cy.get('.oxd-select-text-input').eq(3).click() 
        cy.get('.oxd-select-dropdown').contains(jobTitleName).click()
        
        this.elements.displayFieldDropDown().click()
        this.elements.personalDropDown().click()
        this.elements.selectWhatToDisplay().click()
        this.elements.employeeFirstName().click()
        this.elements.insertAnotherDisplayField().click()
        this.elements.personalSwitch().click()

      // this.elements.insertAnotherDisplayField().click()
        this.elements.displayFieldDropDown().click()
        this.elements.jobTitleFieldDropDown().click()
        this.elements.selectWhatToDisplay().click()
        this.elements.jobTitleVlue().click()
        this.elements.insertAnotherDisplayField().click()
        this.elements.jobSwitch().click()

        this.elements.displayFieldDropDown().click()
        this.elements.salaryFieldDropDown().click()
        this.elements.selectWhatToDisplay().click()
        this.elements.salaryVlue().click()
        this.elements.insertAnotherDisplayField().click()
        this.elements.salarySwitch().click()
        
        this.elements.saveReportBtn().click()
    }
   
}