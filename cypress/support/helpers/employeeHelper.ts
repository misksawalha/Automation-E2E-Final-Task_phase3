import userInit from "../init/employeeInit"
import { reject, resolve } from "cypress/types/bluebird"
import { IcreateEmployeeResponse } from "../response/employeeResponse"


const baseUrl = Cypress.config().baseUrl

export const URLs = {
    users: `${baseUrl}/web/index.php/api/v2/admin/users`
}


export default class addUser {
    static addNewUserViaApi() {
        return new Cypress.Promise<IcreateEmployeeResponse>((resolve,reject)=>{
            (cy.addNewUser(URLs.users,userInit.initUser())).then(()=>{
              
            })
        })
    }
}
