import { Page,Locator } from "@playwright/test";
import {BasePage} from '../pages/BasePage';
export class LoginPage extends BasePage{
    readonly clicklogin:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly loginbtn:Locator;
    readonly loginmsg:Locator;
    readonly loginerrmsg:Locator;

    constructor (page:Page){
        super(page);
        this.clicklogin=this.page.locator('//a[text()="Log in"]');
        this.email=this.page.locator('#Email');
        this.password=this.page.locator('#Password');
        this.loginbtn=this.page.locator('//input[@value="Log in"]');
        this.loginmsg=this.page.locator('//a[text()="Log out"]');
        this.loginerrmsg=this.page.locator('div.validation-summary-errors');
    }
    async clickLogin() {
    await this.click(this.clicklogin);
}   
   async enterEmail(email: string) {
        await this.fill(this.email, email);
    }

    async enterPassword(password: string) {
        await this.fill(this.password, password);
    }

    async clickLoginBtn() {
        await this.click(this.loginbtn);
    }

    async loginRes() {
       return await this.getText(this.loginmsg);
    }

    async invalidRes() {
       return await this.getText(this.loginerrmsg);

    }

}