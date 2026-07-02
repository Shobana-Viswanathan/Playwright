import {Page,Locator} from '@playwright/test';
export class RegisterPage{
    readonly page:Page;
    readonly reg:Locator;
    readonly fname:Locator;
    readonly lname:Locator;
    readonly email:Locator;
    readonly tele:Locator;
    readonly password:Locator;
    readonly pswdconfrim:Locator;
    readonly agrebtn:Locator;
    readonly cbtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.reg=page.locator("//a[normalize-space()='Register']");
        this.fname=page.locator("//input[@id='input-firstname']");
        this.lname=page.locator("//input[@id='input-lastname']");
        this.email=page.locator("//input[@id='input-email']");
        this.tele=page.locator("//input[@id='input-telephone']");
        this.password=page.locator("//input[@id='input-password']");
        this.pswdconfrim=page.locator("//input[@id='input-confirm']");
        this.agrebtn=page.locator("//input[@name='agree']");
        this.cbtn=page.locator("//input[@value='Continue']");
    }
    async register(fname:string,laname:string,email:string,telen:string,password:string,passconfirm:string){
      await this.reg.click();
      await this.fname.fill(fname);
      await this.lname.fill(laname);
      await this.email.fill(email);
      await this.tele.fill(telen);
      await this.password.fill(password);
      await this.pswdconfrim.fill(passconfirm);
      await this.agrebtn.check();
      await this.cbtn.click();
    }
}