
export default class candidateFilePage {
    elements = {
        Recruitment: () => cy.get(':nth-child(5) > .oxd-main-menu-item'),
        viewBtn: () => cy.get('.oxd-table-cell-actions'),
        passBtn: () => cy.get('.oxd-button--success'),
        saveBtn: () => cy.get('.oxd-button--secondary'),
        loader: () => cy.get('.oxd-loading-spinner-container'),
        rejectBtn: () => cy.get('.orangehrm-recruitment-actions > :nth-child(1)'),
        switchBtn: () => cy.get('.oxd-switch-input'),
        fileInput: () => cy.get('input[type="file"]'),
        saveUpdateBtn: () => cy.get('.oxd-form-actions > .oxd-button'),
        shortlistedBtn: () => cy.get('.oxd-button--success'),
        download: () => cy.get('.oxd-table-cell-actions > :nth-child(3)'),
        InterviewTitle: () => cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        interviewer: () => cy.get('.oxd-autocomplete-text-input > input'),
        date: () => cy.get('.oxd-date-input > .oxd-input'),
        offerJobBtn:()=>cy.get('.orangehrm-recruitment-actions > :nth-child(3)'),
        replaceBtn:()=>cy.get(':nth-child(3) > :nth-child(2) > .oxd-radio-wrapper > label > input'),
       hireSave:()=>cy.get('.oxd-button')

    }
    findVacancy(vacancyName: any) {
        this.elements.Recruitment().click()
        cy.get('.oxd-table-row.oxd-table-row--with-border')
            .find(`:contains(${vacancyName})`)
            .should('exist')
            .then(($element) => {
                cy.wrap($element)
                    .parent('.oxd-table-row')
                    .find('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon')
                    .click({ force: true, multiple: true });
            });
    }
    applicationInitiated() {
        this.elements.switchBtn().click({ force: true })
        this.elements.fileInput().selectFile('cypress/fixtures/test.txt', { force: true })
        this.elements.saveBtn().click()
        this.elements.loader().should('not.exist')
        this.elements.shortlistedBtn().click({ force: true })
        this.elements.saveBtn().click({ force: true })

    }
    findVacancyToDownload(vacancyName: any) {
        this.elements.Recruitment().click()
        cy.get('.oxd-table-row.oxd-table-row--with-border')
            .find(`:contains(${vacancyName})`)
            .should('exist')
            .then(($element) => {
                cy.wrap($element)
                    .parent('.oxd-table-row')
                    .find('.oxd-table-cell-actions > :nth-child(3)')
                    .click({ force: true, multiple: true });
            });
    }
    shortListStage() {
        this.elements.passBtn().click({ force: true })
        this.elements.saveBtn().click({ force: true })
        this.elements.loader().should('not.exist')
        this.elements.saveBtn().click({ force: true })
        this.elements.loader().should('not.exist')
    }
    ScheduleInterview() {
        this.elements.passBtn().click({ force: true })
        this.elements.InterviewTitle().type("Fresh")
        this.elements.interviewer().type("m")
        cy.get('.oxd-autocomplete-dropdown > :nth-child(1) > span').click()
        this.elements.date().click()
        cy.get(':nth-child(24) > .oxd-calendar-date').click()
        this.elements.saveBtn().click({ force: true })
    }
    passInterView() {
        this.elements.passBtn().click({ force: true })
        this.elements.saveBtn().click({ force: true })
        this.elements.loader().should('not.exist')
        this.elements.saveBtn().click({ force: true })
        this.elements.loader().should('not.exist')

    }
    offerJob(){
        this.elements.offerJobBtn().click({ force: true })
        this.elements.saveBtn().click({ force: true })
        this.elements.loader().should('not.exist')
        this.elements.saveBtn().click({ force: true })
        this.elements.loader().should('not.exist')
    }
    hire(){
        this.elements.offerJobBtn().click({ force: true })
        this.elements.saveBtn().click({ force: true })
        this.elements.loader().should('not.exist')
        this.elements.saveBtn().click({ force: true })
        this.elements.loader().should('not.exist')
        this.elements.switchBtn().click({force:true})
        this.elements.replaceBtn().click({ force: true })
        this.elements.fileInput().selectFile('cypress/fixtures/cucumber.pdf', { force: true })
        this.elements.hireSave().click({force:true})
        this.elements.loader().should('not.exist')
       
    }
}
//cy.get('.oxd-button--success')