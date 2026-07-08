import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/customWorld";
import { expect } from "@playwright/test";

When('User clicks the Login button in the application', async function (this:CustomWorld) {
    await this.loginPage.clickLogin();
});

When('User enters the {string} email', async function (this:CustomWorld,email:string) {
   await this.loginPage.enterEmail(email);
});

When('User enters the {string} password', async function (this:CustomWorld,password:string) {
  await this.loginPage.enterPassword(password);
});

When('User clicks the login button', async function (this:CustomWorld) {
  await this.loginPage.clickLoginBtn();
});

Then('User should see {string}', async function (this:CustomWorld,result:string) {
    if (result === "success") {
      expect (await this.loginPage.loginRes()).toContain('Log out');
    } else {
       expect (await this.loginPage.invalidRes()).toContain('Login was unsuccessful. Please correct the errors and try again.');
    }

 
});