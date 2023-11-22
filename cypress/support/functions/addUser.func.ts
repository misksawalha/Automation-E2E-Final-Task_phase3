import { userVar } from "../variable/addUser.var";

export default function addUser(empNumberResponse: Number,i:any) {
    console.log("*empNumberResponse*"+empNumberResponse)
    cy.request({
      method: 'POST',
      url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
      body: {
        username: userVar.username+i,
        password: userVar.password,
        status: true,
        userRoleId: 2,
        empNumber: empNumberResponse
      }
    })

}
