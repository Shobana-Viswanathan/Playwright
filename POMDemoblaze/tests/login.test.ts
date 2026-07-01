import {test,expect} from '../fixtures/basefixtures';
import loginData from '../test-data/loginData.json';

test.describe('Login Test',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
    })
    test('Valid Login',async({loginPage})=>{
        await loginPage.login(
            loginData.valid.username,
            loginData.valid.password
        )
        await expect (loginPage.userloggedname).toHaveText('Welcome Shobs');
    })
    test.afterEach(async({loginPage})=>{
        await loginPage.logout();
        await expect (loginPage.clicklogin).toBeVisible();
    })
})