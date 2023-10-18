import { factorial } from './factorial';

describe('Given the factorial function', () => {
  describe('When the argument is 0', () => {
    test('Then result should be 1 ', () => {
      // Arrange
      const n = 0;
      const expected = 1;
      // Act
      const result = factorial(n);
      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('When the argument is 1', () => {
    test('Then result should be 1 ', () => {
      // Arrange
      const n = 1;
      const expected = 1;
      // Act
      const result = factorial(n);
      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('When the argument is 5', () => {
    test('Then result should be 120 ', () => {
      // Arrange
      const n = 5;
      const expected = 120;
      // Act
      const result = factorial(n);
      // Assert
      expect(result).toBe(expected);
    });
  });
});
