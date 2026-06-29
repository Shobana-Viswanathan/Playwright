import { defineConfig, devices } from '@playwright/test';

//Read env variable

 import dotenv from 'dotenv';
 const envName=process.env.ENV || 'qa';

//Load env file
dotenv.config({
    path: `./env/.env.${envName}`
});

export default defineConfig({
  testDir: './tests',
  //testMatch:["tests/testonlyprac.test.ts"],
   //repeatEach:3,
   //retries:2,
   
  // Parallel Execution
  //fullyParallel: true,

  // CI Settings
 // forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'always' }],
    ['allure-playwright']
  ],

  use: {
    //browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ]
});
