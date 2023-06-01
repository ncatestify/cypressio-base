import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.URL || 'https://testify.team'
  },
  viewportWidth: 1200
});
