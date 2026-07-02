import {test,expect} from '../fixtures/baseFixtures';
import loginData from '../test-data/loginData.json';

test.describe('Login test',()=>{
    test('Valid Login',async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(
            loginData.valid.username,
            loginData.valid.password
        )
      
    })
})