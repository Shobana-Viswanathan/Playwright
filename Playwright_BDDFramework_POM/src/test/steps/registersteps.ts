import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { Given,When,Then } from "@cucumber/cucumber";
Given('User should navigate to the application', async function (this:CustomWorld) {
  await this.registerPage.navigate();
});

Given('User have to click the Register', async function (this:CustomWorld) {
  await this.registerPage.register();
});

Given('User have to enter the firstname', async function (this:CustomWorld) {
  await this.registerPage.enterfname();
});

Given('User have to enter the lastname', async function (this:CustomWorld) {
  await this.registerPage.enterlname();
});
Given('User have to enter the email', async function (this:CustomWorld) {
  await this.registerPage.enteremail();
});
Given('User have to enter the phone number', async function (this:CustomWorld) {
  await this.registerPage.enterphno();
});
Given('User have to enter the password in the field', async function (this:CustomWorld) {
  await this.registerPage.enterpswd();
});

Given('User have to enter the confirm password', async function (this:CustomWorld) {
  await this.registerPage.enterconfirm();
});

Given('User have to click agree button', async function (this:CustomWorld) {
  await this.registerPage.clickcheckbox();
});

When('User click the continue button', async function (this:CustomWorld) {
  await this.registerPage.clickcontinue();
});

Then('User should see the successfull register', async function (this:CustomWorld) {
  await expect(await this.registerPage.getAccountMessage()).toBeVisible();
});