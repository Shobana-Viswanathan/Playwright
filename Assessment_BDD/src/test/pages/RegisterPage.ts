import { Page,Locator } from '@playwright/test';
import {BasePage} from '../pages/BasePage';

export class RegisterPage extends BasePage{
    readonly reg:Locator;
    readonly gender:Locator;
    readonly fname :Locator;
    readonly lname:Locator;
    readonly email:Locator;
    readonly password:Locator;
    readonly confirmps:Locator;
    readonly regbtn:Locator;
    readonly regmsg:Locator;

    constructor (page:Page){
        super(page);
        this.reg=this.page.locator('//a[text()="Register"]');
        this.gender = this.page.locator('#gender-female');
        this.fname=this.page.locator('#FirstName');
        this.lname=this.page.locator('#LastName');
        this.email=this.page.locator('#Email');
        this.password=this.page.locator('#Password');
        this.confirmps=this.page.locator('#ConfirmPassword');
        this.regbtn=this.page.locator('#register-button');
        this.regmsg=this.page.locator('div.result');


    }
    async reguser(){
        await this.click(this.reg);

    }
    async personalDetails(fname:string,lname:string,email:string,pswd:string,confirmpswd:string){
        await this.click(this.gender);
        await this.fill(this.fname,fname);
        await this.fill(this.lname,lname);
        await this.fill(this.email,email);
        await this.fill(this.password,pswd);
        await this.fill(this.confirmps,confirmpswd);
    }
   
    async regsiterBtn(){
        await this.click(this.regbtn);
    }
    async regMsg(){
       return await this.getText(this.regmsg);
    }
}