const baseUrl = Cypress.config().baseUrl
import { addEmployee } from "../../support/functions/addEmployee.func"
import { deleteFunction } from "../../support/functions/deleteFunction.func"
import { vacancyId } from "../../support/helpers/createVacancyHelper"
import { jobTitleId, jobTitleName } from "../../support/helpers/jobTitleHelper";
import addJobTitle from "../../support/helpers/jobTitleHelper";
import createVacancy from "../../support/helpers/createVacancyHelper";
import createCandidate from "../../support/helpers/createCandidateHelper"
import candidateShortListed from "../../support/helpers/candidateShortListedHelper"
import candidateFilePage from "../../support/page-objects/candidateFilePage";
import CandidateScheduledInterview from "../../support/helpers/candidateInterviewHelper"
let candidatePageObject: candidateFilePage = new candidateFilePage()
let empID: any
let vacancyArr: any[] = []
describe("Verify that the user can upload a txt file for Application Initiated and Hired statuses", () => {
    before(() => {
        cy.login("Admin", "admin123")
        addJobTitle.addNewJobTitleViaAPI()
        addEmployee(0).then((response) => {
            empID = Number(response)
        })

    })
    before(() => {
        createVacancy.createNewVacancyAPI(empID).then((vacancyName) => {
            vacancyArr.push(vacancyName)
            createCandidate.createNewCandidateViaAPI()
         
        })
    })


it('txt file for Application Initiated', () => {
    candidatePageObject.findVacancy(vacancyArr[0])
    candidatePageObject.applicationInitiated()
    candidatePageObject.findVacancyToDownload(vacancyArr[0])
    candidatePageObject.findVacancy(vacancyArr[0])
    candidatePageObject.shortListStage()
    candidatePageObject.ScheduleInterview()
    candidatePageObject.passInterView()
    candidatePageObject.offerJob()
    candidatePageObject.hire()
    candidatePageObject.findVacancyToDownload(vacancyArr[0])
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