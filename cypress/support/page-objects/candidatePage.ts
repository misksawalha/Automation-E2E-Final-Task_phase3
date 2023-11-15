
export default class candidatePage {
    elements = {
        Recruitment:()=>cy.get(':nth-child(5) > .oxd-main-menu-item'),
        viewBtn:()=>cy.get('.oxd-table-cell-actions'),
        passBtn:()=>cy.get('.oxd-button--success'),
        saveBtn:()=>cy.get('.oxd-button--secondary'),
        loader:()=>cy.get('.oxd-loading-spinner-container'),
        rejectBtn:()=>cy.get('.orangehrm-recruitment-actions > :nth-child(1)')
        
    }
    findVacancy(vacancyName:any){
      this.elements.Recruitment().click()
      cy.get('.oxd-table-row.oxd-table-row--with-border')
      .find(`:contains(${vacancyName})`)
      .should('exist')
      .then(($element) => {
          cy.wrap($element)
              .parent('.oxd-table-row')
              .find('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon')
              .click({force:true,multiple:true});
      });
    }
    MarkInterviewPassed(){
        this.elements.passBtn().click({force:true})
        this.elements.saveBtn().click({force:true})
        this.elements.loader().should('not.exist')
        this.elements.saveBtn().click({force:true})
        //Status: Interview Passed
    }
    MarkInterviewRejected(){
        this.elements.rejectBtn().click({force:true})
        this.elements.saveBtn().click({force:true})
        this.elements.loader().should('not.exist')
        this.elements.saveBtn().click({force:true})
        //Status: Interview Passed
    }
}