import { test, expect } from '../fixtures/baseFixtures';
import searchData from '../test-data/searchData.json'
test.describe('Product @smoke',()=>{

  test.beforeEach(async({homePage})=>{
     await homePage.navigate();
     })
    test('Product search', async ({ searchPage }) => {
   
    await searchPage.searchpro(searchData.search.product);

    const productList = await searchPage.getProducts();

    console.log(productList);

    const count = await searchPage.getProductCount();

    expect(count).toBeGreaterThan(0);

    expect(productList).toContain(searchData.search.product);
});
});