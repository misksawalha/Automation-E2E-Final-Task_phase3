import { eventVar } from "../variable/createEvent.var"
let status:string =''
let referenceIdArray : any [] =[]
export default class claimActions {
    elements = {
        claimBtn: () => cy.get(':nth-child(11) > .oxd-main-menu-item'),
        eventName: () => cy.get(':nth-child(1) > .oxd-table-row > :nth-child(3) > .oxd-table-card-cell > .oxd-text'),
        detailBtn: () => cy.get('.oxd-table-cell-actions > .oxd-button'),
        approvedBtn: () => cy.get('.oxd-button--secondary'),
        rejectBtn:()=>cy.get('.oxd-button--danger'),
        eventNameList:()=>cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        dropDownValue:()=>cy.get('.oxd-select-dropdown'),
        searchBtn:()=>cy.get('.oxd-form-actions > .oxd-button--secondary'),
        loader:()=>cy.get('.oxd-loading-spinner-container')

    }
    findMyClaim(referenceId:any) {
        referenceIdArray.push(referenceId)
        this.elements.claimBtn().click()
        this.elements.eventNameList().click()
        this.elements.dropDownValue().contains(eventVar.eventname).click()
        this.elements.searchBtn().click({force:true})
        cy.get('.oxd-table-row.oxd-table-row--with-border')
        .find(`:contains(${referenceId})`)
        .should('exist')
        .then(($element) => {
            // Navigate to the parent container and find the button element inside it
            cy.wrap($element)
                .parent('.oxd-table-row')
                .find('.oxd-table-cell-actions > .oxd-button')
                .click({force:true,multiple:true});
        });

    }
    approveClaim() {
    this.elements.loader().should('not.exist')
    this.elements.approvedBtn().click()
    }
    rejectClaim(){
        this.elements.rejectBtn().click()
    }
    searchForStatus(){
        this.elements.claimBtn().click()
        this.elements.eventNameList().click()
        this.elements.dropDownValue().contains(eventVar.eventname).click()
        this.elements.searchBtn().click({force:true})

        for(let i=0;i<4;i++){
            if(i<2){
                cy.get('.oxd-table-row.oxd-table-row--with-border')
                .find(`:contains(${referenceIdArray[i]})`)
                .should('exist')
                .then(($element) => {
                    // Navigate to the parent container and find the button element inside it
                    cy.wrap($element)
                        .parent('.oxd-table-row')
                        .find(`:contains(Paid)`)
                        
                });
            }
            else if(i>=2){
                cy.get('.oxd-table-row.oxd-table-row--with-border')
                .find(`:contains(${referenceIdArray[i]})`)
                .should('exist')
                .then(($element) => {
                    // Navigate to the parent container and find the button element inside it
                    cy.wrap($element)
                        .parent('.oxd-table-row')
                        .find(`:contains(Rejected)`)
                        
                });
            }
        
    
        }
    
    }
}