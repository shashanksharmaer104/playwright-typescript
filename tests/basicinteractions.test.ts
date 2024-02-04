import { test, expect } from "@playwright/test";

test('Basic interactions test', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const textFeild = page.locator("input#user-message");
    console.log(textFeild.getAttribute("placeholder"));
    expect(textFeild).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("Before entering the value: " + await textFeild.inputValue());

    // type value in textbox
    await textFeild.fill("Test message");
    console.log("After entering the value: " + await textFeild.inputValue());
})