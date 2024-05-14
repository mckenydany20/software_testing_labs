import { max, fizzBuzz, add, subtract, multiply, divide, isEqual } from './intro';

describe('Test des fonctions utilitaires', () => {
  // Tests pour la fonction max
  it('devrait retourner le plus grand nombre', () => {
    const a = 5;
    const b = 3;
    const result = max(a, b);
    expect(result).toBe(a);
  });

  it('devrait retourner le nombre correct lorsque b est plus grand', () => {
    const a = 2;
    const b = 8;
    const result = max(a, b);
    expect(result).toBe(b);
  });

  it('devrait retourner le même nombre lorsque les deux sont égaux', () => {
    const a = 7;
    const b = 7;
    const result = max(a, b);
    expect(result).toBe(a);
  });

  // Tests pour la fonction fizzBuzz
  it('devrait retourner "FizzBuzz" pour les multiples de 3 et 5', () => {
    const n = 15;
    const result = fizzBuzz(n);
    expect(result).toBe('FizzBuzz');
  });

  it('devrait retourner "Fizz" pour les multiples de 3', () => {
    const n = 9;
    const result = fizzBuzz(n);
    expect(result).toBe('Fizz');
  });

  it('devrait retourner "Buzz" pour les multiples de 5', () => {
    const n = 10;
    const result = fizzBuzz(n);
    expect(result).toBe('Buzz');
  });

  it('devrait retourner le nombre pour les autres cas', () => {
    const n = 7;
    const result = fizzBuzz(n);
    expect(result).toBe('7');
  });

  // Tests pour la fonction add
  it('devrait retourner la somme de deux nombres', () => {
    const a = 3;
    const b = 5;
    const result = add(a, b);
    expect(result).toBe(8);
  });

  // Tests pour la fonction subtract
  it('devrait retourner la différence entre deux nombres', () => {
    const a = 9;
    const b = 4;
    const result = subtract(a, b);
    expect(result).toBe(5);
  });

  // Tests pour la fonction multiply
  it('devrait retourner le produit de deux nombres', () => {
    const a = 4;
    const b = 7;
    const result = multiply(a, b);
    expect(result).toBe(28);
  });

  // Tests pour la fonction divide
  it('devrait retourner le quotient de deux nombres', () => {
    const a = 20;
    const b = 4;
    const result = divide(a, b);
    expect(result).toBe(5);
  });

  it('devrait lancer une erreur lorsque la division par zéro est tentée', () => {
    const a = 10;
    const b = 0;
    expect(() => divide(a, b)).toThrow('Division par zéro');
  });

  // Tests pour la fonction isEqual
  it('devrait retourner true pour deux valeurs égales', () => {
    const a = 6;
    const b = 6;
    const result = isEqual(a, b);
    expect(result).toBe(true);
  });

  it('devrait retourner false pour deux valeurs différentes', () => {
    const a = 5;
    const b = 10;
    const result = isEqual(a, b);
    expect(result).toBe(false);
  });
});
