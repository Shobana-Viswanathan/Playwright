import {Before,After,BeforeAll,AfterAll,Status} from '@cucumber/cucumber';
import {Browser, chromium} from "@playwright/test";
import { CustomWorld } from '../world/CustomWorld';
import {LoginPage} from '../pages/LoginPage';

import {logger} from '../utils/winstonlogger';

let browser:Browser;
BeforeAll(async()=>{
    
    browser=await chromium.launch({headless:false});
    logger.info("Browser Launched");
});
Before(async function (this:CustomWorld,scenario) {
    this.browser=browser;
    this.context=await browser.newContext();
    this.page=await this.context.newPage();
    
    this.loginPage = new LoginPage(this.page);
});
After(async function (this:CustomWorld,scenario) {
    if(scenario.result?.status== "FAILED"){
        const path=`reports/screenshots/${Date.now()}.png`;
        await this.page.screenshot({path});
       logger.error(`Scenario Failed: ${scenario.pickle.name}`);
       logger.error(`Screenshot Saved:${path}`);
}
    else{
       logger.info(`Scenario Passed:${scenario.pickle.name}`);
    }
     await this.page.close();
    await this.context.close();
})
AfterAll(async () => {
     logger.info("Browser Closed");
    await browser.close();
});