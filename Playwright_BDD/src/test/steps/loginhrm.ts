import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";
import { expect } from "@playwright/test";

Given('User should navigate to the Orange HRM', async function (this:CustomWorld) {
  await this.page.goto("https://opensource-demo.orangehrmlive.com/");
});

Given('User have to enter the user name in the input field', async function (this:CustomWorld) {
  await this.page.locator("//input[@placeholder='Username']").fill("Admin");
});

Given('User have to enter the password in the input field', async function (this:CustomWorld) {
   await this.page.locator("//input[@placeholder='Password']").fill("admin123");
});

When('User have to click the login button in the orange hrm application', async function (this:CustomWorld) {
  await this.page.locator("//button[@type='submit']").click();
});

When('User should be logged success in the application', async function (this:CustomWorld) {
  await expect (this.page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
});

Given('User have to enter the invalid password in the input field', async function (this:CustomWorld) {
     await this.page.locator("//input[@placeholder='Password']").fill("admin3");

});

Then('User should not get successfull login', async function (this:CustomWorld) {
  await expect (this.page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")).toBeVisible();
});