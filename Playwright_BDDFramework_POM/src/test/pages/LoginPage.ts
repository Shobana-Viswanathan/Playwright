import {BasePage} from '../pages/BasePage';

export class LoginPage extends BasePage{





    private myacc = this.page.locator("//i[@class='fa fa-user']");
    private clicklogin = this.page.locator("//a[normalize-space()='Login']");
    private email= this.page.locator("//input[@id='input-email']") ;
    private password = this.page.locator('#input-password');
    private loginbtn = this.page.locator("//input[@value='Login']");
    private loginmsg = this.page.locator('//h2[text()="My Account"]');
    private errmsg = this.page.locator("//div[@class='alert alert-danger alert-dismissible']");

    async myaccclick(){
        await this.click(this.myacc);

    }
    async  loginclick(){
        await this.click(this.clicklogin);
    }
    async enteremail(){
        await this.fill(this.email,"sham@gmail.com");
    }
    async enterpassword(){
        await this.fill(this.password,"1234");
    }
    async enterinvalidpassword(){
        await this.fill(this.password,"12");
    }
    async clickloginbtn(){
        await this.click(this.loginbtn);
    }
    async getloginmsg(){
        await this.getText(this.loginmsg);
    }
    async geterrmsg(){
        await this.getText(this.errmsg);
    }

}