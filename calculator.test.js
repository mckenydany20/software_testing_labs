// calculator.test.js
//test unitaire
const Calculator = require('./calculator');

describe('Calculator - Unit Tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('should divide two numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
  });
});

// test asynhrone
// calculator.test.js

describe('Calculator - Asynchronous Tests', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    test('should fetch data', async () => {
      const data = await calculator.fetchData();
      expect(data).toBe('Data fetched');
    });
  });

  //test d'integration
  // calculator.test.js

describe('Calculator - Integration Tests', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    test('should add and then subtract correctly', () => {
      const sum = calculator.add(5, 3);
      const result = calculator.subtract(sum, 2);
      expect(result).toBe(6);
    });
  
    test('should multiply and then divide correctly', () => {
      const product = calculator.multiply(4, 2);
      const result = calculator.divide(product, 2);
      expect(result).toBe(4);
    });
  });
  
