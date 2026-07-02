import {Page,Locator} from '@playwright/test';
export class SearchPage{

    readonly page:Page;
    readonly search:Locator;
    readonly searchbtn:Locator;
    readonly searchmsg:Locator;
    constructor(page:Page){
       this.page=page;
       this.search=page.locator("//input[@placeholder='Search']");
       this.searchbtn=page.locator("//button[@class='btn btn-default btn-lg']");
       this.searchmsg=page.locator('//h1[text()="Search - Hp"]');

    }
   async searchpro(){
    await this.search.fill('Hp');
    await this.searchbtn.click();

   }
}