
import ClaimSubmitInit from "../init/claimSubmitInit";
import { empID } from "../../e2e/OrangeHRM/Report.spec.cy";
export let claimId:any
const baseUrl = Cypress.config().baseUrl



export default class ClaimSubmit{
    static submitNewClaimViaAPI(requestId:Number){
      return  cy.submitNewClaim(requestId,ClaimSubmitInit.initClaimSubmit()).then((claimSubmitResponse)=>{
        return    claimId = JSON.parse( JSON.stringify(claimSubmitResponse.data.id))
          
      
    })
}
}