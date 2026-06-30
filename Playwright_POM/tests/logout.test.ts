import { test, expect } from "../fixtures/baseFixtures";
import loginData from "../test-data/loginData.json";

test.describe("Logout Tests @Logout", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });

    test("Logout User", async ({ dashboardPage, loginPage }) => {

        await dashboardPage.logoutuser();

        await expect(loginPage.loginTitle).toHaveText("Login");

    });

});