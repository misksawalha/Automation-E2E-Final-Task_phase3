const baseUrl = Cypress.config().baseUrl

export function ScheduledInterview(id: any) {

    cy.api({
        method: 'POST',
        url: `${baseUrl}/web/index.php/api/v2/recruitment/candidates/${id}/shedule-interview`,
        body: {
            interviewName: "Fresh",
            interviewDate: "2023-11-30",
            interviewTime: null,
            note: null,
            interviewerEmpNumbers: [
                125
            ]
        },
    }).then((response)=>{
console.log(response)
    })


}