import {expect, test} from '../fixtures/baseFixtures';
import loginData from '../test-data/loginData.json'
test.describe('Dashboard Test @Dashboard',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });
    
    test('Dashboard',async({dashboardPage})=>{
      await expect(dashboardPage.quickLaunch).toHaveText('Quick Launch');
      await expect(dashboardPage.timeAtWorkCard).toHaveText('Time at Work');
      await expect(dashboardPage.buzzpic).toBeVisible();
    });
    test.afterEach(async({dashboardPage})=>{
        await dashboardPage.logoutuser();
    });
   
})