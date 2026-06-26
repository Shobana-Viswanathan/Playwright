import { test,expect } from '@playwright/test';
test('Dropdown test',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption('#select-demo',{
        //value:"Sunday"
        //label:"Wednesday"
        index:5
    });
    await page.selectOption('#multi-select',[
        {label: "Texas"},
        {value:"Ohio"},
        {index:2}
    ])
})