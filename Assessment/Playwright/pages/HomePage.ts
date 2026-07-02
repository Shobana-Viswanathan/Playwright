import {Page,Locator} from '@playwright/test';
export class HomePage{

    readonly page:Page;
    readonly myacc:Locator;
    readonly reg:Locator;
    readonly selectlogin:Locator;
    readonly search:Locator;
    readonly searchbtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.myacc = page.locator("//span[text()='My Account']/parent::a");
        this.reg=page.locator("//a[text()='Register']");
        this.selectlogin=page.locator("//a[text()='Login']");
        this.search=page.locator("//input[@placeholder='Search']");
        this.searchbtn=page.locator("//button[@class='btn btn-default btn-lg']");
    }

    async navigate(){
        await this.page.goto('https://tutorialsninja.com/demo/',{
            waitUntil:'domcontentloaded'
        });
    }
    async clickreg(){
       await  this.myacc.click();
       await this.reg.click();
    }
    async login(){
        await this.myacc.click();
        await this.selectlogin.click();
    }
    
}