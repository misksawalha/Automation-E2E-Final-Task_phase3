const baseUrl = Cypress.config().baseUrl

export function deleteFunction(id:number,type:string) {
    
        cy.api({
          method: 'DELETE',
          url: `${baseUrl}/web/index.php/api/v2/${type}`,
          body: {
            ids: [
                id
            ]
          },
        })
        console.log(id + ":number" + type+":string")
  
  }
//https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/vacancies