import {BasePage} from '../pages/BasePage';
import { faker } from '@faker-js/faker';

export class RegisterPage extends BasePage{
private myacc=this.page.locator("//span[text()='My Account']/parent::a");
private reg=this.page.locator("//a[text()='Register']");
private fname=this.page.locator('#input-firstname');
private lname=this.page.locator('#input-lastname');
private email=this.page.locator('#input-email');
private phno=this.page.locator('#input-telephone');
private pswd=this.page.locator('#input-password');
private cpswd=this.page.locator('#input-confirm');
private checkbox=this.page.locator('//input[@type="checkbox"]');
private submit = this.page.locator('//input[@type="submit"]');
private accmsg = this.page.locator('//h1[text()="Your Account Has Been Created!"]');

async register(){
    await this.click(this.myacc);
    await this.click(this.reg);
}
async enterfname(){
    await this.fill(this.fname,"Sona");
}
async enterlname(){
    await this.fill(this.lname,"S");
}

async enteremail() {
    const email = faker.internet.email();
    await this.fill(this.email, email);
}
async enterphno(){
    await this.fill(this.phno,"9876543210");
}
async enterpswd(){
    await this.fill(this.pswd,"1234g");
}
async enterconfirm(){
    await this.fill(this.cpswd,"1234g");
}
async clickcheckbox(){
    await this.click(this.checkbox);
}
async clickcontinue(){
    await this.click(this.submit)
}
async getAccountMessage() {
    return this.accmsg;
}

}