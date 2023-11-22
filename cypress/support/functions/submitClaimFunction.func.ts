
export let referenceIdArray :any[]=[]
const baseUrl = Cypress.config().baseUrl
export function submitClaim(requestId:any){
    cy.api({
        method: 'PUT',
        url: `${baseUrl}/web/index.php/api/v2/claim/requests/${requestId}/action`,
        body: {
           action: "SUBMIT"
        }
    }).then((response)=>{
        referenceIdArray.push = response.body.data.referenceId
        console.log(response)
    })
}