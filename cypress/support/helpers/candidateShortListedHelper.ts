import candidateShortListedPayloadInit from "../init/candidateShortListedInit";

const baseUrl = Cypress.config().baseUrl
export let candidateId:any;

export default class candidateShortListed{
    static createCandidateShortListedViaAPI(candidateId:any){
       return  cy.createCandidateShortListed(candidateId, candidateShortListedPayloadInit.initCandidateShortListed())
        // .then((ShortListedResponse)=>{
        //    return candidateId = JSON.parse( JSON.stringify(candidateResponse.data.id))
          
        // })
    }
}
