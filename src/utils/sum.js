/**
 * Sums all numbers in an array.
 *
 * @param {number[]} numbers - An array of numbers to sum.
 * @returns {number} The sum of all numbers in the array.
 * @throws {TypeError} If the input is not an array.
 */
export default function sum(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError('Input must be an array');
    }
    return numbers.reduce((acc, num) => acc + num, 0);
}