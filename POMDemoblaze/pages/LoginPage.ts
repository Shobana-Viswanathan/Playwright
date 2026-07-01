import {Page,Locator} from '@playwright/test';
export class LoginPage{
     readonly page:Page;
    readonly clicklogin:Locator;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbutton:Locator;
    readonly userloggedname:Locator;
    readonly logoutclick:Locator;
    constructor(page:Page){
        this.page=page;
        this.clicklogin=page.locator('#login2');
        this.username=page.locator('#loginusername');
        this.password=page.locator('#loginpassword');
        this.loginbutton=page.locator('//button[@onclick="logIn()"]');
        this.userloggedname=page.locator('#nameofuser');
        this.logoutclick=page.locator('//a[@onclick="logOut()"]');
    }
    async navigate(){
        await this.page.goto(process.env.base_url!);
    }
    async login(username:string,password:string){

        await this.clicklogin.click();
        await this.username.fill(username);
        await this.password.fill(password);
        this.page.on("dialog", async (alert) => {
             console.log(alert.message());
        
                    await alert.accept();
                });
        await this.loginbutton.click();
    }
    async logout(){
        await this.logoutclick.click();
    }

}