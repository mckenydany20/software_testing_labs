// calculator.js

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    }
  
    async fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Data fetched');
        }, 1000);
      });
    }
  }
  
  module.exports = Calculator;
  