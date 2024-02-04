import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import SpecialHotPage from "../pages/SpecialHotPage";
import HomePage from "../pages/HomePage";

const email = "shasha0987@mailinator.com";
const password = "Password@1234";
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