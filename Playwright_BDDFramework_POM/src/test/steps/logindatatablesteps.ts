import{Given,When,Then,DataTable} from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import{expect} from '@playwright/test';
Given('User should enter the valid creadentials', async function (dataTable) {
  const data=dataTable.hashes()[0];
  await this.loginPage.enteremail(data.email);
  await this.loginPage.enterpassword(data.password);
});

When('User click login button', async function (this:CustomWorld) {
  await this.loginPage.clickloginbtn();
});

Then('User should be logged successfully', async function (this:CustomWorld) {
  expect(await this.loginPage.getloginmsg()).toBe('My Account');
});