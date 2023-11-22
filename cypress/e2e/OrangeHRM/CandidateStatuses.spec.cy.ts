const baseUrl = Cypress.config().baseUrl
import { userVar } from "../../support/variable/addUser.var"
import { addEmployee } from "../../support/functions/addEmployee.func"
import { deleteFunction } from "../../support/functions/deleteFunction.func"
import { vacancyId } from "../../support/helpers/createVacancyHelper"
import { jobTitleId, jobTitleName } from "../../support/helpers/jobTitleHelper";
import addJobTitle from "../../support/helpers/jobTitleHelper";
import createVacancy from "../../support/helpers/createVacancyHelper";
import createCandidate from "../../support/helpers/createCandidateHelper"
import candidateShortListed from "../../support/helpers/candidateShortListedHelper"
import { ScheduledInterview } from "../../support/functions/interViewShceduled.func"
import candidatePage from "../../support/page-objects/candidatePage"
import CandidateScheduledInterview from "../../support/helpers/candidateInterviewHelper"
let candidatePageObject:candidatePage = new candidatePage()
let empID: any
let vacancyArr:any[]=[]
describe("Managing Candidate Statuses", () => {
    before(() => {
        cy.login("Admin", "admin123")
        addJobTitle.addNewJobTitleViaAPI()
        addEmployee(0).then((response) => {
            empID = Number(response)
        })
     
    })
   before(()=>{
    for(let i=0;i<2;i++){
        createVacancy.createNewVacancyAPI(empID,i).then((vacancyName)=>{
            vacancyArr.push(vacancyName)
         createCandidate.createNewCandidateViaAPI().then((candidateId)=>{
          candidateShortListed.createCandidateShortListedViaAPI(candidateId).then(()=>{
          CandidateScheduledInterview.CandidateScheduledInterviewViaAPI(candidateId,empID)
          
          })
      })
    })
    }
   })
    it('Candidate Interview Result Verification (Pass).',()=>{
       
        candidatePageObject.findVacancy(vacancyArr[0])
        candidatePageObject.MarkInterviewPassed()
    })
    it('Candidate Interview Result Verification (Reject).',()=>{
        cy.login("Admin", "admin123")
        candidatePageObject.findVacancy(vacancyArr[1])
        candidatePageObject.MarkInterviewRejected()
    })
    after(() => {
        deleteFunction(vacancyId, 'recruitment/vacancies')
        //ex.php/api/v2/admin/job-titles
        deleteFunction(jobTitleId, 'admin/job-titles')
        cy.api({
            method: 'DELETE',
            url: `${baseUrl}/web/index.php/api/v2/pim/employees`,
            body: {
                ids: [
                    empID


                ]
            },
        })
    })
})

