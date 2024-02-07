import { Page } from "@playwright/test";
export default class RegisterPage {

    constructor(public page: Page) { }

    async enterFirstName(firstName: string) {
        await this.page.locator("#input-firstname").fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.locator("#input-lastname").fill(lastName);
    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").fill(email);
    }

    async enterTelephone(phone: string) {
        await this.page.locator("#input-telephone").fill(phone);
    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password").fill(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.page.locator("#input-confirm").fill(confirmPassword);
    }

    isSubscribeChecked() {
        return this.page.locator("#input-newsletter-no");
    }

    async clickTermsAndConditions() {
        await this.page.click("//label[@for='input-agree']");
    }

    async clickContinueToRegister() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            await this.page.click("input[value=Continue]")
        ]);
    }
}