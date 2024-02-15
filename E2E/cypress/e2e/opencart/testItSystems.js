 
describe('Pruebas automatizadas en Cypress', () => {
    
     
  it('what_it_does', function() {

    cy.viewport(1422, 676)
 
    cy.visit('https://cepm-dev.azurewebsites.net/bienvenido')
 
    cy.get('.MuiPaper-root > .MuiToolbar-root > .MuiGrid-root > .MuiTypography-root > .MuiTypography-root').click()
 
    cy.visit('https://cepm-dev.azurewebsites.net/login')
 
    cy.get('.MuiBox-root > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > #\\3Ar0\\3A').click()
 
    cy.get('.MuiBox-root > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > #\\3Ar0\\3A').type('joaquincortespruebas@gmail.com')
 
    cy.get('.MuiBox-root > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > #\\3Ar1\\3A').click()
 
    cy.get('.MuiBox-root > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > #\\3Ar1\\3A').type('Pueb#222')
 
    cy.get('.MuiBox-root > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > #\\3Ar2\\3A').click()
 
    cy.get('.MuiBox-root > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > #\\3Ar2\\3A').type('9007511')
 
    cy.get('.MuiContainer-root > .MuiBox-root > .MuiBox-root > .MuiGrid-root > .MuiButtonBase-root').click()
 
    cy.get('.MuiGrid-root:nth-child(2) > .MuiPaper-root > .MuiButtonBase-root > .MuiCardContent-root > .MuiTypography-root > .MuiTypography-root').click()
 
 })

})


    
    
    
 
 
