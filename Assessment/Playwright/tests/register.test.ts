import { test, expect } from '../fixtures/baseFixtures';
import registerData from '../test-data/registerData.json';

test.describe('Register @smoke', () => {

    test.beforeEach(async({homePage})=>{
        await homePage.navigate();
        await homePage.clickreg();
    })
    test('Register user', async ({ registerPage }) => {
        await registerPage.register(
            registerData.register.fname,
            registerData.register.lname,
            registerData.register.email,
            registerData.register.tele,
            registerData.register.pswd,
            registerData.register.pswdcfrm
        );

        await expect(registerPage.regmsg).toHaveText('Your Account Has Been Created!');

    });

        


});