class DashboardPage{
    selectorList (){
        const selectors = {
            dashBoardGride:".orangehrm-dashboard-grid",

        }

        return selectors
    }
    

    CheckDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashBoardGride).should("be.visible")
    }
}

export default DashboardPage