import {Page, Locator } from '@playwright/test';
export class DashboardPage{
    readonly page:Page;
    readonly dashboardTitle:Locator;
    readonly quickLaunch:Locator;
    readonly timeAtWorkCard:Locator;
    readonly buzzpic:Locator;
    readonly dropdown:Locator;
    readonly logout:Locator;
    constructor(page:Page){
        this.page=page;
        this.dashboardTitle=page.locator('h6');
        this.quickLaunch=page.getByText('Quick Launch');
        this.timeAtWorkCard=page.getByText('Time at Work');
        this.buzzpic=page.getByText('Buzz Latest Posts');
        this.dropdown=page.locator('.oxd-userdropdown-name');
        this.logout=page.locator('//a[text()="Logout"]');
    } 
   async logoutuser(){
    await this.dropdown.click();
    await this.logout.click();
   }

    
}