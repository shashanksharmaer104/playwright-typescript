import { Page } from "@playwright/test"

export default class SpecialHotPage {

    constructor(public page: Page) { }

    async clickComponentsFilter() {
        await this.page.click("//a[text()='Components (75)']");
    }

    async addFirstProductToTheCart() {
        await this.page.locator("//img[@title='HTC Touch HD']").first().hover();

        await this.page.locator("//button[@title='Add to Cart']").first().click();
    }

    async isToastVisible() {
        // await this.page.waitFor
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({state:"visible"});
        return toast;
    }

}