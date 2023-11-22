import { IcreateEmployeePayload  } from "../payload/employeePayload";
import GenaricHelper from "../helpers/genericHelper";


export default class userInit {
    static initUser(): IcreateEmployeePayload {
        let createUserPayload: IcreateEmployeePayload = {
            user: {
                
                email: `email_${GenaricHelper.genaricRandomString()}@gmail.com`,
                password: '123000',
                username: `misk_${GenaricHelper.genaricRandomString()}`
            }
        }
        return createUserPayload
    }
}
/*

https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users
payload:
{
    "username": "Admin2000",
    "password": "admin123",
    "status": true,
    "userRoleId": 2,
    "empNumber": 119
}
response
{
    "data": {
        "id": 99,
        "userName": "Admin2000",
        "deleted": false,
        "status": true,
        "employee": {
            "empNumber": 119,
            "employeeId": "10010",
            "firstName": "alaaa1522",
            "middleName": "ghaleb",
            "lastName": "abuhani",
            "terminationId": null
        },
        "userRole": {
            "id": 2,
            "name": "ESS",
            "displayName": "ESS"
        }
    },
    "meta": [],
    "rels": []
}

*/