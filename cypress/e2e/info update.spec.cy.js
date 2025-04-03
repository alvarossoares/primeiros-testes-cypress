import userData from '../fixtures/users-data.json'

describe('Orange HRM tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passWordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb',
    wrongCredentialAlert: '.oxd-alert',
    MyInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    FirstNameField: "[name='firstName']",
    MiddleNameField: "[name='middleName']",
    GenericField: ".oxd-input--active",
    DataField: "[placeholder='yyyy-dd-mm']",
    DataCloseFiled: ".--close",
    SubmitButton: "[type='submit']",
    CloseSaveButton: ".oxd-toast-close"
  }

  it.only('user info update - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passWordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.MyInfoButton).click()
    cy.get(selectorsList.FirstNameField).clear().type("FNameTest")
    cy.get(selectorsList.MiddleNameField).clear().type("MNameTest")
    cy.get(selectorsList.GenericField).eq(3).clear().type("Employee")
    cy.get(selectorsList.GenericField).eq(4).clear().type("OtherIdN")
    cy.get(selectorsList.GenericField).eq(5).clear().type("licenseN")
    cy.get(selectorsList.DataField).eq(0).clear().type("2025-03-03")
    cy.get(selectorsList.DataCloseFiled).click()
    cy.get(selectorsList.DataField).eq(1).clear().type("2000-08-03")
    cy.get(selectorsList.DataCloseFiled).click()
    cy.get(selectorsList.SubmitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get(selectorsList.CloseSaveButton).eq(0).click()
    

  })
  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passWordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  
  })
})