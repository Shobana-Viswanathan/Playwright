import {test,expect} from '../fixtures/baseFixtures';

test.describe('Product @smoke',()=>{
    test('Product search',async({searchPage,homePage})=>{
        await homePage.navigate();
        await searchPage.searchpro();
        await expect (searchPage.searchmsg).toHaveText('Search - Hp');
        
    })
})