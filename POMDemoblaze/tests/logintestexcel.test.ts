import { test, expect } from "../fixtures/basefixtures";
import { readExcelData, LoginUser } from "../utils/excelReader";

const users: LoginUser[] = readExcelData();

const validUser = users.find(user => user.type === "valid");
const invalidUser = users.find(user => user.type === "invalid");

test.describe("Login Test", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test("Valid Login", async ({ loginPage }) => {

        if (!validUser) {
            throw new Error("Valid user not found in Excel.");
        }

        await loginPage.login(
            validUser.username,
            validUser.password
        );

        await expect(loginPage.userloggedname)
            .toHaveText("Welcome Shobs");
    });

    test("Invalid Login", async ({ loginPage}) => {

        if (!invalidUser) {
            throw new Error("Invalid user not found in Excel.");
        }

        await loginPage.login(
            invalidUser.username,
            invalidUser.password
        );
       


    });

});