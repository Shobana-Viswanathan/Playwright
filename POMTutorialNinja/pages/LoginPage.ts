import {Page,Locator} from '@playwright/test';
export class LoginPage{
   readonly page:Page;
   readonly selectlogin:Locator;
   readonly email:Locator;
   readonly password:Locator;
   readonly loginbtn:Locator;
   constructor(page:Page){
    this.page=page,
    this.selectlogin = page.locator("//a[text()='Login']");
    this.email=page.locator('#input-email');
    this.password=page.locator('#input-password');
    this.loginbtn=page.locator('//input[@value="Login"]');
   }
   async navigate(){
    await this.page.goto('https://tutorialsninja.com/demo/');
   }
   async login(username:string,password:string){
      await this.selectlogin.click({timeout:6000});
      await this.email.fill(username);
      await this.password.fill(password);
      await this.loginbtn.click();
   }
}