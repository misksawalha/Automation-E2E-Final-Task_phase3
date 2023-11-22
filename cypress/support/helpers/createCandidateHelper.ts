import CreateCandidateInit from "../init/createCandidateInit";

const baseUrl = Cypress.config().baseUrl
export let candidateId:any;
export let jobTitleName:any;
export const URLs = {
    candidate: `${baseUrl}/web/index.php/api/v2/recruitment/candidates`
}

export default class createCandidate{
    static createNewCandidateViaAPI(){
        return cy.createNewCandidate(URLs.candidate, CreateCandidateInit.initCreateCandidate())
        .then((candidateResponse)=>{
           return candidateId = JSON.parse( JSON.stringify(candidateResponse.data.id))
          
        })
    }
}
