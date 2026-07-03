import { CustomWorld } from './../../hooks/world';
import { Given,When,Then } from "@cucumber/cucumber";
import {expect} from '@playwright/test';


Given('User navigates to the application', async function (this:CustomWorld) {
  await this.page.goto("https://bookcart.azurewebsites.net/");
});

Given('User click on the login link of application', async function (this:CustomWorld) {
  await this.page.locator("//span[normalize-space()='Login']").click();
});

Given('User enters the username as {string}', async function (this:CustomWorld,username:string) {
  await this.page.locator("//input[@id='mat-input-0']").fill(username);
});

Given('User enters the password as {string}', async function (this:CustomWorld,password:string) {
  await this.page.locator("//input[@id='mat-input-1']").fill(password);  
});

When('User click on the login button in the application', async function (this:CustomWorld) {
 await this.page.locator('//span[text()="Login"]').click();
});

Then('Login should be success', async function (this:CustomWorld) {
  const expectedUsername = "Shar";
  const usernameLocator = this.page.locator(
  `//span[normalize-space(text())='${expectedUsername}']`
);

  const usernameText = await usernameLocator.textContent();
  console.log("User",usernameText);
  expect (usernameText?.trim()).toBe(expectedUsername);
  
});

