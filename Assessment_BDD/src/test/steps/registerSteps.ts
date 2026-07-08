import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/customWorld";
import { readRegisterData, RegisterUser } from "../utils/csvReader";
import { expect } from "@playwright/test";
Given('User should be navigated to the demowebshop application', async function (this:CustomWorld) {
    await this.registerPage.navigate();
  
});
When('User clicks the register button in the application', async function (this:CustomWorld) {
     await this.registerPage.reguser();
});

When('User enters their personal details like gender,firstname,lastname,email,password', async function (this:CustomWorld) {
    const users:RegisterUser[]=readRegisterData();
    const regis=users.find(user=>user.type === "register");
    if(!regis){
        throw new Error ("Not found");
    }
    await this.registerPage.personalDetails(
        regis.firstname,
        regis.lastname,
        regis.email,
        regis.password,
        regis.confirmpassword

    );
});



When('User clicks register button', async function (this:CustomWorld) {
  await this.registerPage.regsiterBtn();
});

Then('User should have successfull register', async function (this:CustomWorld) {
  expect (await this.registerPage.regMsg()).toContain('Your registration completed');
});
