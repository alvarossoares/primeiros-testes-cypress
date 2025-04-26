class MyInfoPage{
    SelectorList (){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            genericField: ".oxd-input--active",
            dataField: "[placeholder='yyyy-dd-mm']",
            dataCloseFiled: ".--close",
            submitButton: "[type='submit']",
            closeSaveButton: ".oxd-toast-close",
            comboBoxButton: ".oxd-select-text"
        }
        return selectors
    }
    typeInfoPersonalField (firstname,middlename) {
        cy.get(this.SelectorList().firstNameField).clear().type(firstname)
        cy.get(this.SelectorList().middleNameField).clear().type(middlename)
    }

    typeIdField(employeeId,otherId,licenseNumber,dataLicense,dataBirth){
        cy.get(this.SelectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.SelectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.SelectorList().genericField).eq(5).clear().type(licenseNumber)
        cy.get(this.SelectorList().dataField).eq(0).clear().type(dataLicense)
        cy.get(this.SelectorList().dataCloseFiled).click()
        cy.get(this.SelectorList().dataField).eq(1).clear().type(dataBirth)
        cy.get(this.SelectorList().dataCloseFiled).click()
        
    
    }
    saveForm(){
        cy.get(this.SelectorList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.SelectorList().closeSaveButton).eq(0).click({ force: true })
        cy.get(this.SelectorList().comboBoxButton).eq(0).click({ force: true })
        cy.get('.oxd-select-dropdown > :nth-child(4)')
        cy.get(this.SelectorList().comboBoxButton).eq(1).click({ force: true })
        cy.get('.oxd-select-dropdown > :nth-child(4)')
    }
}
export default MyInfoPage