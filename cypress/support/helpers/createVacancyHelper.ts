// import job from "../init/jobTitleInit"
import CreateVacancyInit from "../init/createVacancyInit";
import { empID } from "../../e2e/OrangeHRM/Report.spec.cy";
export let vacancyId:any
export let vacancyName:any
const baseUrl = Cypress.config().baseUrl
export const URLs = {
    newVacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`
}
export let jobTitleId:any;
//https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/vacancies
export default class createVacancy{
    static createNewVacancyAPI(empID:Number){
       return cy.createNewVacancy(URLs.newVacancy,CreateVacancyInit.initCreateVacancy(empID)).then((newVacancy)=>{
            console.log(newVacancy)
            vacancyId = JSON.parse( JSON.stringify(newVacancy.data.id))
            return vacancyName = JSON.parse( JSON.stringify(newVacancy.data.name))
                   
              
            })
      
    }
}
