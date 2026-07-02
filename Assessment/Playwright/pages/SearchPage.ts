import { Page, Locator } from '@playwright/test';

export class SearchPage {

    readonly page: Page;
    readonly search: Locator;
    readonly searchbtn: Locator;
    readonly products: Locator;

    constructor(page: Page) {
        this.page = page;
        this.search = page.locator("//input[@placeholder='Search']");
        this.searchbtn = page.locator("//button[@class='btn btn-default btn-lg']");
        this.products = page.locator("h4");
    }

    async searchpro(product: string) {
        await this.search.fill(product);
        await this.searchbtn.click();
    }

    async getProducts() {
        return await this.products.allTextContents();
    }

    async getProductCount() {
        return await this.products.count();
    }
}