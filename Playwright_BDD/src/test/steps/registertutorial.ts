import { CustomWorld } from './../../hooks/world';
import { Given,When,Then } from "@cucumber/cucumber";
import {expect} from '@playwright/test';

Given('User should navigate to the application', async function (this:CustomWorld) {
   
    await this.page.goto("https://tutorialsninja.com/demo/");
});

Given('User have to click the Register', async function (this:CustomWorld) {
    await this.page.locator("//span[text()='My Account']/parent::a").click();
    await this.page.locator("//a[text()='Register']").click();

});



Given('User have to enter the firstname', async function (this:CustomWorld) {
  await this.page.locator('#input-firstname').fill("Shobs");
});

Given('User have to enter the lastname', async function (this:CustomWorld) {
  await this.page.locator('#input-lastname').fill("V");
});

Given('User have to enter the email address', async function (this:CustomWorld) {
  await this.page.locator('#input-email').fill("shobans@gmail.com");
});
Given('User have to enter the phone number', async function (this:CustomWorld) {
   await this.page.locator('#input-telephone').fill("9876543221");
});
Given('User have to enter the password', async function () {
  await this.page.locator('#input-password').fill("shobi11");
});

Given('User have to enter the confirm password', async function (this:CustomWorld) {
    await this.page.locator('#input-confirm').fill("shobi11");

});
Given('User have to click agree button', async function (this:CustomWorld) {
  await this.page.locator('//input[@type="checkbox"]').check();
});

When('User click the continue button', async function (this:CustomWorld) {
   await this.page.locator('//input[@type="submit"]').click();
});

Then('User should see the successfull register', async function (this:CustomWorld) {
  await expect(this.page.locator('//h1[text()="Your Account Has Been Created!"]')).toBeVisible();
 
});
