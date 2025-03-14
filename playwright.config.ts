import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["pomtest/addtocart.test.ts"],
    use: {
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        browserName: "firefox",
        headless: true,
        launchOptions: {
            args: ['--start-maximized']
        },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    retries: 0,
    reporter: [
        ["dot"],
        ["json", {
            outputFile: "jsonReports/jsonReporter.json"
        }],
        ["html", {
            open: "never"
        }]]
};

export default config;
