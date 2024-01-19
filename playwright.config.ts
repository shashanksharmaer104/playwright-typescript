import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/recorded.test.ts"],
    use: {
        headless: false
    }
};

export default config;
