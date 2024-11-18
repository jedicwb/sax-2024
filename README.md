# Cypress Coding Session - Saxion Coding Workshop

Welcome to the Cypress Coding Session! This project is designed for participants of the **Saxion Coding Workshop** to learn and practice end-to-end testing using [Cypress](https://www.cypress.io/).

## Getting Started

### Prerequisites
Before starting, ensure you have the following installed on your machine:
- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/jedicwb/sax-2024
   ```
2. Navigate to the project folder:
      ```bash
   cd sax-2024
   
  
3. Install the project dependencies:
   ```bash
   npm install
   ```
  
### Running Tests
Cypress Test Runner
To run tests in the interactive Cypress Test Runner:
 ```bash
 npm test
 ```
  

This will launch the Cypress Test Runner, allowing you to visually inspect and debug your tests.

Running in Headless Mode
To execute tests in headless mode (useful for CI pipelines or quick checks):
  ```
  npm run test:headless
  ```

### Writing Tests
You can create test files in the cypress/e2e directory. Test files should have a .cy.js or .cy.ts extension.

Example test:
```javascript
describe('Saxion Coding Workshop', () => {
  it('Should visit the homepage', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain').should('be.visible');
  });
});
```

### Resources

[Cypress Documentation](https://www.cypress.io/)

[Target test app](https://just-test-mu.vercel.app/)

## License
This project is licensed under the MIT License.

Happy testing! 🚀
