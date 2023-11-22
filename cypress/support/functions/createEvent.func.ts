import { eventVar } from "../variable/createEvent.var";
const baseUrl = Cypress.config().baseUrl

export function createNewEvent() {

    cy.api({
        method: 'POST',
        url: `${baseUrl}/web/index.php/api/v2/claim/events`,
        body: {
            name: eventVar.eventname,
            description: "",
            status: true

        }
    }).then((response)=>{
        console.log(response)
    })
}
/**
 
{
    "data": {
        "id": 10,
        "name": "claim213N23_458.95303447551936",
        "description": null,
        "status": true
    },
    "meta": [],
    "rels": []
}
 */