import {test,expect} from '../fixtures/basefixtures';
import { readLoginData,LoginUser } from '../utils/csvReader';
const users:LoginUser[]=readLoginData();
console.log("Users data from csv:",users);
const validUser=users.find(user=>user.type === 'valid');
const invalidUser=users.find(user=>user.type === 'invalid');
test.describe('CSV Login',()=>{
    test('Login',async({loginPage})=>{
        await loginPage.navigate();
            if(!validUser){
                throw new Error ("Valid user not foung in csv");

            }
            await loginPage.login(
                validUser.username,
                validUser.password
            )
        await expect (loginPage.userloggedname).toHaveText('Welcome Shobs');
        
    });
    test('Invalid Login',async({loginPage})=>{
        if(!invalidUser){
            throw new Error("Invalid user not in csv");
        }
        await loginPage.login(
            invalidUser.username,
            invalidUser.password
        )
    })
})