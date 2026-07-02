import {Page,Locator} from '@playwright/test';
export class RegisterPage{
    readonly page:Page;
    readonly fname:Locator;
    readonly lname:Locator;
    readonly email:Locator;
    readonly tele:Locator;
    readonly pswd:Locator;
    readonly pswdcfrm:Locator;
    readonly checkbox:Locator;
    readonly continuebtn:Locator;
    readonly regmsg:Locator;
    constructor(page:Page){
        this.page=page;
        this.fname=page.locator('#input-firstname');
        this.lname=page.locator('#input-lastname');
        this.email=page.locator('#input-email');
        this.tele=page.locator('#input-telephone');
        this.pswd=page.locator('#input-password');
        this.pswdcfrm=page.locator('#input-confirm');
        this.checkbox=page.locator('//input[@type="checkbox"]');
        this.continuebtn=page.locator('//input[@type="submit"]');
        this.regmsg=page.locator('//h1[text()="Your Account Has Been Created!"]');
    }

    async register(fname:string,lname:string,email:string,tele:string,pswd:string,pswdcfrm:string){
       await this.fname.fill(fname);
       await   this.lname.fill(lname);
       await this.email.fill(email);
       await this.tele.fill(tele);
       await  this.pswd.fill(pswd);
       await this.pswdcfrm.fill(pswdcfrm);
       await this.checkbox.check();
       await this.continuebtn.click();

    }
}