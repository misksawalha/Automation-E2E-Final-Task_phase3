import CandidateScheduledInterviewInit from "../init/candidateInterviewInit"

 
 
 
 
export default class CandidateScheduledInterview{ 
    static CandidateScheduledInterviewViaAPI(candidateId: number, empNumber: number){ 
        return cy.candidateScheduledInterview(candidateId, CandidateScheduledInterviewInit.initScheduledInterview(empNumber)) 
    } 
}