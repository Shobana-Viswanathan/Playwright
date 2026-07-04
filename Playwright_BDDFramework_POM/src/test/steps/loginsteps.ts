import {Given,When,Then} from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { expect } from "@playwright/test";


Given('User should navigate to tutorial ninja application', async function (this:CustomWorld) {
  await this.loginPage.navigate();
});
Given('User have to select the login', async function (this:CustomWorld) {
  await this.loginPage.myaccclick();
  await this.loginPage.loginclick();
});
Given('User have to enter the email address', async function (this:CustomWorld) {
  await this.loginPage.enteremail();
});

Given('User have to enter the password', async function (this:CustomWorld) {
  await this.loginPage.enterpassword();
});

When('User clicks the login button', async function (this:CustomWorld) {
   await this.loginPage.clickloginbtn()
});

Then('User should have successfull login', async function (this:CustomWorld) {
  await expect(this.loginPage.getloginmsg()).toBe('My Account');
});

Given('User have to enter the invalid password', async function (this:CustomWorld) {
  await this.loginPage.enterinvalidpassword();
});

Then('User should not have successfull login', async function (this:CustomWorld) {
   await this.loginPage.geterrmsg();
});