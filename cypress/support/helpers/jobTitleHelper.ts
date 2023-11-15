import JobTitleInit from "../init/jobTitleInit"

const baseUrl = Cypress.config().baseUrl
export let jobTitleId:any;
export let jobTitleName:any;
export const URLs = {
    jobTitle: `${baseUrl}/web/index.php/api/v2/admin/job-titles`
}

export default class addJobTitle{
    static addNewJobTitleViaAPI(){
        cy.addNewJobTitle(URLs.jobTitle, JobTitleInit.initJobTitle()).then((jobTitleResponse)=>{
           jobTitleId = JSON.parse( JSON.stringify(jobTitleResponse.data.id))
           jobTitleName = JSON.parse( JSON.stringify(jobTitleResponse.data.title))
            console.log("jobTitle Response: " +JSON.parse( JSON.stringify(jobTitleResponse.data.id)));
        })
    }
}
