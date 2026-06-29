import { test, expect } from '@playwright/test';

test.describe.only("E-comm @ecom", () => {

    test.describe("Login", () => {

        test("Valid Login", async ({ page }) => {
            console.log("Login Test");
        });

    });

    test.describe("Logout", () => {

        test("Valid Logout", async ({ page }) => {
            console.log("Logout Test");
        });

    });

});

test.describe("Shopping", () => {

    test.describe("Cart", () => {

        test("Add Product", async ({ page }) => {
            console.log("Cart Test");
        });

    });

    test.describe("Search", () => {

        test("Search Product", async ({ page }) => {
            console.log("Search Test");
        });

    });

});