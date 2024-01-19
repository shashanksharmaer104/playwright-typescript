import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/recorded.test.ts"],
    use: {
        browserName: "chromium",
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    retries: 2,
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