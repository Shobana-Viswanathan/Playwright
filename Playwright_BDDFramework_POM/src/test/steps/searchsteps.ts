import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";

Given('User enters {string} in the search field', async function (this: CustomWorld, product: string) 
{   
    await this.searchPage.navigate();
    await this.searchPage.enterProduct(product);
});

When('User clicks the search button', async function (this: CustomWorld) {
    await this.searchPage.clickSearch();
});

Then(
  'User should see {string} in the search results',
  async function (this: CustomWorld, product: string) {
    await expect(
      await this.searchPage.getProductResult()
    ).toContainText(product);
  }
);

Then('User should see no products found message', async function (this: CustomWorld) {
    await expect(await this.searchPage.getNoProductMessage()).toBeVisible();
});