import {Locator, Page} from "@playwright/test";
import { EnvReader } from '../utils/envReader';

export class BasePage {
    constructor(protected page:Page){}

    async navigate() {
        await this.page.goto(EnvReader.getBaseUrl());
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