const test = require( 'node:test');
const assert = require("node:assert");
const { RecursiveFunctions } = require("./recursiveFunctions");

const { describe, it } = test;

describe('Test suite', () => {
    describe('Recursive functions', () => {
        it('factorial', () => {
            assert.strictEqual(RecursiveFunctions.factorial(2), 2);
            assert.strictEqual(RecursiveFunctions.factorial(3), 6);
            assert.strictEqual(RecursiveFunctions.factorial(4), 24);
            assert.strictEqual(RecursiveFunctions.factorial(5), 120);
            assert.strictEqual(RecursiveFunctions.factorial(10), 3628800);
        });
        it('fibonacci', () => {
            assert.strictEqual(RecursiveFunctions.fibonacci(0), 0);
            assert.strictEqual(RecursiveFunctions.fibonacci(1), 1);
            assert.strictEqual(RecursiveFunctions.fibonacci(2), 1);
            assert.strictEqual(RecursiveFunctions.fibonacci(3), 2);
            assert.strictEqual(RecursiveFunctions.fibonacci(4), 3);
            assert.strictEqual(RecursiveFunctions.fibonacci(5), 5);
            assert.strictEqual(RecursiveFunctions.fibonacci(6), 8);
            assert.strictEqual(RecursiveFunctions.fibonacci(7), 13);
            assert.strictEqual(RecursiveFunctions.fibonacci(8), 21);
            assert.strictEqual(RecursiveFunctions.fibonacci(9), 34);
            assert.strictEqual(RecursiveFunctions.fibonacci(10), 55);
        });
        it('sumArray', () => {
            assert.strictEqual(RecursiveFunctions.sumArray([1, 2, 3, 4, 5]), 15);
            assert.strictEqual(RecursiveFunctions.sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
            assert.strictEqual(RecursiveFunctions.sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 66);
        });
        it('reverseString', () => {
            assert.strictEqual(RecursiveFunctions.reverseString("hello"), "olleh");
            assert.strictEqual(RecursiveFunctions.reverseString("world"), "dlrow");
            assert.strictEqual(RecursiveFunctions.reverseString("hello world"), "dlrow olleh");
            assert.strictEqual(RecursiveFunctions.reverseString("madam"), "madam");
            assert.strictEqual(RecursiveFunctions.reverseString("nurses run"), "nur sesrun");
        });
        it('findMax', () => {
            assert.strictEqual(RecursiveFunctions.findMax([1, 2, 3, 4, 5]), 5);
            assert.strictEqual(RecursiveFunctions.findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10);
            assert.strictEqual(RecursiveFunctions.findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 11);
            assert.strictEqual(RecursiveFunctions.findMax([1, 2, 3, 4, 5, 10, 45818544554,11, 516, 41856, 1]), 45818544554);
        });
        it('power', () => {
            assert.strictEqual(RecursiveFunctions.power(2, 0), 1);
            assert.strictEqual(RecursiveFunctions.power(2, 1), 2);
            assert.strictEqual(RecursiveFunctions.power(2, 2), 4);
            assert.strictEqual(RecursiveFunctions.power(2, 3), 8);
            assert.strictEqual(RecursiveFunctions.power(2, 4), 16);
            assert.strictEqual(RecursiveFunctions.power(2, 5), 32);
            assert.strictEqual(RecursiveFunctions.power(2, 6), 64);
            assert.strictEqual(RecursiveFunctions.power(2, 7), 128);
            assert.strictEqual(RecursiveFunctions.power(2, 8), 256);
            assert.strictEqual(RecursiveFunctions.power(2, 9), 512);
            assert.strictEqual(RecursiveFunctions.power(2, 10), 1024);
        });
        it('gcd', () => {
            assert.strictEqual(RecursiveFunctions.gcd(2, 0), 2);
            assert.strictEqual(RecursiveFunctions.gcd(2, 1), 1);
            assert.strictEqual(RecursiveFunctions.gcd(2, 2), 2);
            assert.strictEqual(RecursiveFunctions.gcd(2, 3), 1);
            assert.strictEqual(RecursiveFunctions.gcd(2, 4), 2);
            assert.strictEqual(RecursiveFunctions.gcd(2, 5), 1);
            assert.strictEqual(RecursiveFunctions.gcd(2, 6), 2);
            assert.strictEqual(RecursiveFunctions.gcd(2, 7), 1);
            assert.strictEqual(RecursiveFunctions.gcd(2, 8), 2);
            assert.strictEqual(RecursiveFunctions.gcd(2, 9), 1);
            assert.strictEqual(RecursiveFunctions.gcd(2, 10), 2);
        });
        it('binarySearch', () => {
            assert.strictEqual(RecursiveFunctions.binarySearch([1, 2, 3, 4, 5], 5), 4);
            assert.strictEqual(RecursiveFunctions.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 9);
            assert.strictEqual(RecursiveFunctions.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11), 10);
        });
        it('isPalindrome', () => {
            assert.strictEqual(RecursiveFunctions.isPalindrome("madam"), true);
            assert.strictEqual(RecursiveFunctions.isPalindrome("nursesrun"), true);
            assert.strictEqual(RecursiveFunctions.isPalindrome("hello"), false);
            assert.strictEqual(RecursiveFunctions.isPalindrome("world"), false);
            assert.strictEqual(RecursiveFunctions.isPalindrome("hello world"), false);
        });
        it('flattenArray', () => {
            assert.deepStrictEqual(RecursiveFunctions.flattenArray([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]);
            assert.deepStrictEqual(RecursiveFunctions.flattenArray([1, 2, 3, [4, 5], [6, 7, 8, 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            assert.deepStrictEqual(RecursiveFunctions.flattenArray([1, 2, 3, [4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        });
    })
    describe('Iterative functions should be equal iterative', () => {
    });
});
