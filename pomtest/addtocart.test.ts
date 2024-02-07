import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import SpecialHotPage from "../pages/SpecialHotPage";
import HomePage from "../pages/HomePage";
import { describe } from "node:test";

const email = "shasha0000@mailinator.com";
const password = "Password@1234";
test.describe("Page Object Model test demo", async () => {
    test("Register test_01",async ( {page, baseURL} ) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Firstname")
        await register.enterLastName("Lastname");
        await register.enterEmail(email);
        await register.enterTelephone("1234567890");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
    
        expect(register.isSubscribeChecked()).toBeChecked;
        
        await register.clickTermsAndConditions();
        await register.clickContinueToRegister();
    })
    
    test('Login test_02', async ( {page, baseURL} ) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterPassword(password);
        await login.clickLoginBtn();
        //await page.waitForTimeout(4000); // waits for 4 seconds. Hard wait added for testing purpose only
        expect(await page.title()).toBe("My Account");
    });
    
    test('Add to cart test_03', async ( {page, baseURL} ) => {
        const login = new LoginPage(page);
        const homepage = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
    
        await homepage.clickOnSpecialHotMenu();
    
        await special.clickComponentsFilter();
        await page.waitForTimeout(3000); // waits for 4 seconds. Hard wait added for testing purpose only
        await special.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();
    });
})