const baseUrl = Cypress.config().baseUrl
// import { eventId } from "../helpers/eventHelper"
export function createClaimRequest(eventId:any){
    cy.api({
        method: 'POST',
        url: `${baseUrl}/web/index.php/api/v2/claim/requests`,
        body: {
            claimEventId: eventId,
            currencyId: "ECS",
            "remarks": null
        }
    }).then((response)=>{
        console.log(response)
    })
}
/*
request response 
{
    "id": 27,
    "name": "misk event",
    "status": true,
    "isDeleted": false
}

*/