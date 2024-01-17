import test, { chromium } from "@playwright/test";

test("Login test demo", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("(//*[contains(text(),'My account')])[2]");
    await page.click("text=Login");

    await page.getByPlaceholder("E-Mail Address").fill("shashanksharma@gmail.com");
    await page.fill("#input-password", "shashanksharma"); // other way
    await page.click("input[type=submit]");
    await page.waitForTimeout(3000);

    // New tab with same context to carry forward with same session
    const newPage = await context.newPage();

    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await newPage.waitForTimeout(3000);

    // New window with new context and new session
    const newContext = await browser.newContext();
    const newWin = await newContext.newPage();

    await newWin.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await newWin.waitForTimeout(3000);
})