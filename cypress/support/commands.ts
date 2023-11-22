

import { CreateLocationPayload } from "../support/payload/locationPayload";
import { CreateLocationResponse } from "../support/response/locationResponse";
import { CreateJobTitlePayload } from "./payload/jobTitlePayload";
import { CreateJobTitleResponse } from "./response/jobTitleResponse";
import { IcreateEmployeePayload } from "./payload/employeePayload";
import { IcreateEmployeeResponse } from "./response/employeeResponse";
import { JobDetailsPayload } from "./payload/jobDetailsPayload";
import { JobDetailsResponse } from "./response/jobDetailsResponse";
import { JobSalaryPayload } from "./payload/jobSalaryPayload";
import { JobSalaryResponse } from "./response/jobSalaryResponse";
import { CreateEventPayload } from "./payload/eventPayload";
import { CreateEventResponse } from "./response/eventResponse";
import { CreateExpenesPayload} from "./payload/expenesPayload";
import { CreateExpenesResponse } from "./response/expenesResponse";
import { CreateClaimRequestResponse } from "./response/claimRequeastResponse";
import { CreateCalimRequestPayload } from "./payload/claimRequestPayload";
import { ClaimSubmitResponse } from "./response/claimSubmitResponse";
import { ClaimSubmitPayload } from "./payload/claimSubmitPayload";
import { CreateVacancyPayload} from "./payload/createVacancyPayload";
import { CreateVacancyResponse } from "./response/createVacancyResponse";
import { CreateCandidatePayload } from "./payload/createCandidatePayload";
import { CreateCandidateResponse } from "./response/createCandidateResponse";
import { CreateCandidateShortListedResponse } from "./response/candidateShortListedResponse";
import { CandidateShortListedPayload } from "./payload/candidateShortListedPayload";
import { CandidateScheduleInterviewPayload } from "./payload/candidateInterviewPayload";
import { CandidateScheduledInterviewResponse } from "./response/candidateInterviewResponse";
import LoginPage from '../support/page-objects/loginPage'

const loginObj: LoginPage = new LoginPage();
declare global {
    namespace Cypress {
        interface Chainable {
            logout: typeof logout
            login: typeof login
            addNewLocation: (requestURL: string, locationPayload: CreateLocationPayload) => Chainable<CreateLocationResponse>
            addNewJobTitle: (requestURL: string, jobTitlePayload: CreateJobTitlePayload) => Chainable<CreateJobTitleResponse>
            addNewUser:(requestURL:string,employeePayload:IcreateEmployeePayload)=>Chainable<IcreateEmployeeResponse>
            addNewJobDetails:(empNumber:Number,JobDetailsPayload:JobDetailsPayload)=>Chainable<JobDetailsResponse>
            addNewJobSalary:(empNumber:Number,JobSalaryPayload:JobSalaryPayload)=>Chainable<JobSalaryResponse>
            createNewEvent:(requestURL:string,NewEventPayload:CreateEventPayload)=>Chainable<CreateEventResponse>
            createNewExpenes:(requestURL:string,NewExpenesPayload:CreateExpenesPayload)=>Chainable<CreateExpenesResponse>
            createNewClaimRequest:(eventId:any,CreateClaimRequestPayload:CreateCalimRequestPayload)=>Chainable<CreateClaimRequestResponse>
            submitNewClaim:(requestId:Number,ClaimSubmitPayload:ClaimSubmitPayload)=>Chainable<ClaimSubmitResponse>
            createNewVacancy:(requestURL:string,CreateVacancyPayload:CreateVacancyPayload)=>Chainable<CreateVacancyResponse>
            createNewCandidate:(requestURL:string,CreateCandidatePayload:CreateCandidatePayload)=>Chainable<CreateCandidateResponse>
            createCandidateShortListed:(candidateId:any,CandidateShortListedPayload:CandidateShortListedPayload)=>Chainable<CreateCandidateShortListedResponse>
            candidateScheduledInterview:(candidateId:any, scheduledInterviewPayload:CandidateScheduleInterviewPayload)=>Chainable<CandidateScheduledInterviewResponse>
        }
    }

}

function logout() {
    cy.get('.oxd-userdropdown-tab').click({ force: true });
    return cy.get('.oxd-dropdown-menu').contains('Logout').click({ force: true });
}
function login(username: string, password: string) {
    cy.visit("/web/index.php/auth/login");
    loginObj.login(username, password);
}

Cypress.Commands.add('addNewLocation', (requestURL: string, locationPayload: CreateLocationPayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: locationPayload.location,
    }).its('body')
});

Cypress.Commands.add('addNewJobTitle', (requestURL: string, jobTitlePayload: CreateJobTitlePayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: jobTitlePayload.JobTitle,
    }).its('body')
});
//addNewJobDetails
Cypress.Commands.add('addNewJobDetails',(empNumber:Number,JobDetailsPayload: JobDetailsPayload) => {
    return cy.request({
        method: 'PUT',
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/${empNumber}/job-details`,
        body: JobDetailsPayload.JobDetails,
    }).its('body')
});

Cypress.Commands.add('addNewJobSalary',(empNumber:Number,JobSalaryPayload: JobSalaryPayload) => {
    return cy.request({
        method: 'POST',
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/${empNumber}/salary-components`,
        body: JobSalaryPayload.JobSalary,
    }).its('body')
});
Cypress.Commands.add('createNewEvent',(requestURL: string, NewEventPayload: CreateEventPayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: NewEventPayload.event,
    }).its('body')
});

Cypress.Commands.add('createNewExpenes',(requestURL: string, NewExpenesPayload: CreateExpenesPayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: NewExpenesPayload.expenes,
    }).its('body')
});

Cypress.Commands.add('createNewClaimRequest',(eventId:Number,CreateClaimRequestPayload:CreateCalimRequestPayload) => {
    return cy.request({
        method: 'POST',
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests`,
        body: CreateClaimRequestPayload.request
    }).its('body')
});

Cypress.Commands.add('submitNewClaim',(requestId:Number,ClaimSubmitPayload:ClaimSubmitPayload) => {
    return cy.request({
        method: 'POST',
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests/${requestId}/expenses`,
        body: ClaimSubmitPayload.claim
    }).its('body')
});

Cypress.Commands.add('createNewVacancy',(requestURL:string,CreateVacancyPayload:CreateVacancyPayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: CreateVacancyPayload.Vacancy
    }).its('body')
});

Cypress.Commands.add('createNewCandidate',(requestURL:string,CreateCandidatePayload:CreateCandidatePayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: CreateCandidatePayload.Candidate
    }).its('body')
});

Cypress.Commands.add('createCandidateShortListed',(candidateId:any,CandidateShortListedPayload:CandidateShortListedPayload) => {
    return cy.request({
        method: 'PUT',
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/shortlist`,
        body:CandidateShortListedPayload.ShortListed
    }).its('body')
});

Cypress.Commands.add('candidateScheduledInterview', (candidateId, scheduledInterviewPayload: CandidateScheduleInterviewPayload) => { 
    return cy.request({ 
        method: 'POST', 
        url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/shedule-interview`, 
        body: scheduledInterviewPayload.ScheduleInterview, 
    }).its('body') 
});

Cypress.Commands.add('logout', logout)

Cypress.Commands.add('login', login)
//createCandidateShortListed