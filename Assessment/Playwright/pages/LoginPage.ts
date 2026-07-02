import {Page,Locator} from '@playwright/test';
export class LoginPage{

    readonly page:Page;
    readonly email:Locator;
    readonly pswd:Locator;
    readonly loginbtn:Locator;
    readonly loginmsg:Locator;
    readonly errmsg:Locator;
    constructor(page:Page){
        this.page=page;
        this.email=page.locator("#input-email");
        this.pswd=page.locator("#input-password");
        this.loginbtn=page.locator('//input[@value="Login"]');
        this.errmsg=page.locator('.alert-dismissible')
        this.loginmsg=page.locator('//h2[text()="My Account"]');
    }
    async login(username:string,password:string){
        await this.email.fill(username),
        await this.pswd.fill(password),
        await this.loginbtn.click()
    }
}