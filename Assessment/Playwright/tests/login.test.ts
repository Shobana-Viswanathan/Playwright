import {test,expect} from '../fixtures/baseFixtures';
import { readLoginData,LoginUser } from '../utils/csvReader';
const users:LoginUser[]=readLoginData();
const validUser=users.find(user=>user.type === "valid");
const invalidUser = users.find(user=>user.type === "invalid")
test.describe('Login Test @Regression',()=>{
    test.beforeEach(async({homePage})=>{
        await homePage.navigate();
        await homePage.login();
    })
    test('Valid Login',async({loginPage})=>{
        if(!validUser){
            throw new Error ("Valid user data not found");
        }
        
        await loginPage.login(
            validUser.username,
            validUser.password

        );
        await expect (loginPage.loginmsg).toBeVisible();
        
    })
    test('Invalid Email Login',async({loginPage})=>{
        if(!invalidUser){
            throw new Error ("InValid user data not found");
        }
    
        await loginPage.login(
            invalidUser.username,
            invalidUser.password

        );
        await expect (loginPage.errmsg).toHaveText('Warning: No match for E-Mail Address and/or Password.');
    })
    test('Invalid Password Login',async({loginPage})=>{
        if(!invalidUser){
            throw new Error ("InValid user data not found");
        }
       
        await loginPage.login(
            invalidUser.username,
            invalidUser.password
w
        );
        await expect (loginPage.errmsg).toHaveText('Warning: No match for E-Mail Address and/or Password.');
    })
})