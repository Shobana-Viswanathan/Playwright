
import {Before,After,BeforeAll,AfterAll,} from '@cucumber/cucumber';
import {Browser, chromium} from "@playwright/test";
import {CustomWorld} from '../world/customWorld';
import{LoginPage} from '../pages/LoginPage';
import {RegisterPage} from '../pages/RegisterPage'

let browser:Browser;
BeforeAll(async()=>{
    
   browser = await chromium.launch({
    headless: true
  });
});
Before(async function (this:CustomWorld) {
    this.browser=browser;
    this.context=await browser.newContext();
    this.page=await this.context.newPage();
    
    this.loginPage = new LoginPage(this.page);
    this.registerPage=new RegisterPage(this.page);
   
});
After(async function (this:CustomWorld,scenario) {
    if(scenario.result?.status== "FAILED"){
        const path=`reports/screenshots/${Date.now()}.png`;
        await this.page.screenshot({path});
       
}
    
     await this.page.close();
    await this.context.close();
})
AfterAll(async () => {
    await browser.close();
});