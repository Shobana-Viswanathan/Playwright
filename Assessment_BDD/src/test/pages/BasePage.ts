import {Locator, Page} from "@playwright/test";

export class BasePage {
    constructor(protected page:Page){}

    async navigate() {
        await this.page.goto(process.env.base_url !);
    }
    async click(locator :Locator){
        return await locator.click();
    }
    async fill(locator: Locator, value:string){
        return await locator.fill(value);
    }
    async getText(locator:Locator){
        return await locator.textContent();
    }

    
}