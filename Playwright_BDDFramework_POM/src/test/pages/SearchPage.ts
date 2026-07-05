import { BasePage } from '../pages/BasePage';

export class SearchPage extends BasePage {

    private searchBox = this.page.locator('input[name="search"]');
    private searchButton = this.page.locator('//button[contains(@class,"btn-default")]');

    private productResult = this.page.locator('//div[@class="product-thumb"]//h4/a');

    private noProductMessage = this.page.locator('//p[contains(text(),"There is no product that matches the search criteria")]');

    async enterProduct(product: string) {
        await this.fill(this.searchBox, product);
    }

    async clickSearch() {
        await this.click(this.searchButton);
    }

    async searchProduct(product: string) {
        await this.enterProduct(product);
        await this.clickSearch();
    }

    async getProductResult() {
        return this.productResult;
    }

    async getNoProductMessage() {
        return this.noProductMessage;
    }
}