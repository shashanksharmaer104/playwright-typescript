import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("(//*[contains(text(),'My account')])[2]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('shashanksharma@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('shashanksharma');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Shashank t');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Success: Your account has').click();
  await page.hover("(//*[contains(text(),'My account')])[2]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  await page.getByRole('heading', { name: ' Account Logout' }).click();
});