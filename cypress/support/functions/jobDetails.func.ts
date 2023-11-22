 let URLs = {
    jobTitle:'misk'
}
const baseUrl = Cypress.config().baseUrl
export  function preApi(empID: Number){
    console.log("preApi"+empID)
     URLs.jobTitle= `${baseUrl}/web/index.php/api/v2/pim/employees/${empID}/job-details`
    
    console.log(URLs.jobTitle)
}
