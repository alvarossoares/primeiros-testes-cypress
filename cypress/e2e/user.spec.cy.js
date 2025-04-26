import userData from '../fixtures/users-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'  
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage

describe('User HRM tests', () => {

  it('user info update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    menuPage.acessMyInfo()
    myInfoPage.typeInfoPersonalField(userData.infoUser.firstname, userData.infoUser.middlename)
    myInfoPage.typeIdField
    (userData.infoUser.employeeId, userData.infoUser.otherId, userData.infoUser.licenseNumber,
    userData.infoUser.dataLicense, userData.infoUser.dataBirth)
    
    myInfoPage.saveForm()
    myInfoPage.fillStatus()
    

  })

})