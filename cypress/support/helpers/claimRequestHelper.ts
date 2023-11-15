import ClaimRequestInit from "../init/claimRequestInit";
import { empID } from "../../e2e/OrangeHRM/Report.spec.cy";

const baseUrl = Cypress.config().baseUrl

export let requestId:any;

export default class CreateClaimRequest {
    static createNewClaimRequestViaAPI(eventId) {
        return cy.createNewClaimRequest(eventId, ClaimRequestInit.initClaimRequest()).then((claimRequestResponse) => {
         
            return claimRequestResponse.data.id; 
        });
    }
}