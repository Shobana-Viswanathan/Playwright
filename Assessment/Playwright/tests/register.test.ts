import { test, expect } from '../fixtures/baseFixtures';
import registerData from '../test-data/registerData.json';

test.describe('Register @smoke', () => {

    test('Register user', async ({ homePage, registerPage }) => {

        await homePage.navigate();
        await homePage.clickreg();

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