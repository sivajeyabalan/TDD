// Tests using Jest
const { test, expect } = require('@jest/globals');

// Capitalize Function
test('capitalize: capitalize the first letter of a string', () => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});

// Reverse String Function
test('reverseString: reverses a given string', () => {
    const reverseString = (str) => str.split('').reverse().join('');
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
});

// Calculator Object
test('calculator: basic arithmetic operations', () => {
    const calculator = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => a / b,
        multiply: (a, b) => a * b,
    };
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.multiply(3, 4)).toBe(12);
});

// Caesar Cipher Function
test('caesarCipher: shifts characters by a given factor', () => {
    const caesarCipher = (str, shift) => {
        const shiftChar = (char, shift) => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
            return char;
        };

        return str
            .split('')
            .map((char) => shiftChar(char, shift))
            .join('');
    };

    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// Analyze Array Function
test('analyzeArray: analyze properties of an array', () => {
    const analyzeArray = (arr) => {
        const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        return { average, min, max, length: arr.length };
    };

    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
