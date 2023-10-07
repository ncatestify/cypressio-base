import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://testify.team'
  },
  retries: {
      runMode: 2
  },
  viewportWidth: 1200,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 20
});
