let empNumberResponse = {
    id: 0,
  };
import { userVar } from "../variable/addUser.var";
  export function addEmployee(i:any) {
    return new Promise((resolve, reject) => {
      cy.fixture('addEmployee').as('data');
      cy.get('@data').then((infoData: any) => {
        cy.request({
          method: 'POST',
          url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
          body: {
            firstName: infoData.addEmployee.firstName+i,
            middleName: infoData.addEmployee.middleName,
            lastName: infoData.addEmployee.lastName,
            empPicture: infoData.addEmployee.empPicture,
            employeeId: infoData.addEmployee.employeeId,
          },
        }).then((response) => {
          empNumberResponse.id = response.body.data.empNumber; // Modify the property
          cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
            body: {
              username: userVar.username,
              password: userVar.password,
              status: true,
              userRoleId: 2,
              empNumber: empNumberResponse.id
            }
          })
          console.log(response.body.data)
          resolve(response.body.data.empNumber); // Resolve the promise with empNumberResponse
        });
      });
    });
  }
// export { empNumberResponse }; // Export the object