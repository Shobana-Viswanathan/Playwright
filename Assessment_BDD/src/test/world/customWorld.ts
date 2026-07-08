import { setWorldConstructor,World} from "@cucumber/cucumber";
import {Browser,BrowserContext,Page} from "@playwright/test";
import {LoginPage} from '../pages/LoginPage';
import {RegisterPage} from '../pages/RegisterPage';
export class CustomWorld extends World{
    browser! : Browser;
    context! : BrowserContext;
    page! : Page;
    

    loginPage! : LoginPage;
    registerPage! : RegisterPage;
     

}
setWorldConstructor(CustomWorld);