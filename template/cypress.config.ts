import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://testify.team'
  },
  env: {
    waitForStartpage: '5000'
  }
});
