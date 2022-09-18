import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 60000,
    chromeWebSecurity: false
  },
  
  
})