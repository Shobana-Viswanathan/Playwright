import { setWorldConstructor,World} from "@cucumber/cucumber";
import {Browser,BrowserContext,Page} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import {SearchPage} from '../pages/searchPage';
export class CustomWorld extends World{
    browser! : Browser;
    context! : BrowserContext;
    page! : Page;
    

     loginPage! : LoginPage;
     registerPage! : RegisterPage;
     searchPage! : SearchPage;
     //logger=logger;

}
setWorldConstructor(CustomWorld);