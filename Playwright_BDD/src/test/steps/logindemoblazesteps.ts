//import { pageFixture } from './../../hooks/pageFixture';

//import {chromium,Page,Browser,expect} from '@playwright/test';
//let browser:Browser;
//let page:Page;
import {expect} from '@playwright/test';
import {Given,When,Then} from '@cucumber/cucumber';
import {CustomWorld} from '../../hooks/world';


Given('User should navigate to the application of demoblaze', async function (this:CustomWorld) {
 // browser = await chromium.launch({headless:false});
  //page=await browser.newPage();
  await this.page.goto("https://www.demoblaze.com/");
});

Given('User have to click the login button in homepage', async function (this:CustomWorld) {
  await this.page.locator("//a[@id='login2']").click();
});

Given('User have to enter the username in input field', async function (this:CustomWorld) {
  await this.page.locator("#loginusername").fill("Shobs");
});

Given('User have to enter the password in input field', async function (this:CustomWorld) {
    await this.page.locator("#loginpassword").fill("shobi11");

});
When('User have to click the login button after entering details', async function (this:CustomWorld) {
  await this.page.locator('//button[@onclick="logIn()"]').click();
});


Then('User should see the success login', async function (this:CustomWorld) {
  await expect (this.page.locator('#nameofuser')).toHaveText("Welcome Shobs");
  
});
